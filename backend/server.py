from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI(title="Sonic Brush About Us API")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# ---------- Models ----------
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class NewsletterSubscribeRequest(BaseModel):
    email: EmailStr
    source: Optional[str] = "about_us_page"


class NewsletterSubscriber(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: EmailStr
    source: Optional[str] = "about_us_page"
    subscribed_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class NewsletterSubscribeResponse(BaseModel):
    success: bool
    message: str
    id: Optional[str] = None


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"message": "Sonic Brush About Us API"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks


@api_router.post("/newsletter", response_model=NewsletterSubscribeResponse)
async def subscribe_newsletter(payload: NewsletterSubscribeRequest):
    email_norm = payload.email.lower().strip()

    existing = await db.newsletter_subscribers.find_one(
        {"email": email_norm}, {"_id": 0}
    )
    if existing:
        return NewsletterSubscribeResponse(
            success=True,
            message="You're already on the list. We'll be in touch soon.",
            id=existing.get("id"),
        )

    subscriber = NewsletterSubscriber(email=email_norm, source=payload.source)
    doc = subscriber.model_dump()
    doc["email"] = email_norm
    doc["subscribed_at"] = doc["subscribed_at"].isoformat()
    await db.newsletter_subscribers.insert_one(doc)

    return NewsletterSubscribeResponse(
        success=True,
        message="Thanks for subscribing! Check your inbox.",
        id=subscriber.id,
    )


@api_router.get("/newsletter", response_model=List[NewsletterSubscriber])
async def list_subscribers():
    subs = await db.newsletter_subscribers.find({}, {"_id": 0}).sort("subscribed_at", -1).to_list(1000)
    for s in subs:
        if isinstance(s.get("subscribed_at"), str):
            s["subscribed_at"] = datetime.fromisoformat(s["subscribed_at"])
    return subs


@api_router.get("/newsletter/count")
async def newsletter_count():
    count = await db.newsletter_subscribers.count_documents({})
    return {"count": count}


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
