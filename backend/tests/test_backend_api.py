"""Backend tests for Sonic Brush About Us API."""
import os
import uuid
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "").rstrip("/")
if not BASE_URL:
    # Fallback to reading frontend .env
    try:
        with open("/app/frontend/.env") as f:
            for line in f:
                if line.startswith("REACT_APP_BACKEND_URL="):
                    BASE_URL = line.split("=", 1)[1].strip().rstrip("/")
                    break
    except Exception:
        pass

API = f"{BASE_URL}/api"


@pytest.fixture(scope="session")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- Root ----------
class TestRoot:
    def test_root_message(self, client):
        r = client.get(f"{API}/")
        assert r.status_code == 200
        data = r.json()
        assert data.get("message") == "Sonic Brush About Us API"


# ---------- Status (existing) ----------
class TestStatus:
    def test_create_status(self, client):
        payload = {"client_name": "TEST_pytest_client"}
        r = client.post(f"{API}/status", json=payload)
        assert r.status_code == 200
        data = r.json()
        assert data["client_name"] == "TEST_pytest_client"
        assert "id" in data and isinstance(data["id"], str)
        assert "timestamp" in data
        assert "_id" not in data

    def test_get_statuses(self, client):
        r = client.get(f"{API}/status")
        assert r.status_code == 200
        data = r.json()
        assert isinstance(data, list)
        if data:
            assert "_id" not in data[0]
            assert "id" in data[0]


# ---------- Newsletter ----------
class TestNewsletter:
    @pytest.fixture(scope="class")
    def unique_email(self):
        return f"test_{uuid.uuid4().hex[:10]}@example.com"

    def test_subscribe_valid_email(self, client, unique_email):
        r = client.post(f"{API}/newsletter", json={"email": unique_email})
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["success"] is True
        assert "id" in data and data["id"]
        assert "message" in data
        assert "_id" not in data

    def test_subscribe_duplicate_idempotent(self, client, unique_email):
        # subscribe again with same email
        r = client.post(f"{API}/newsletter", json={"email": unique_email})
        assert r.status_code == 200
        data = r.json()
        assert data["success"] is True
        assert "already" in data["message"].lower()

    def test_subscribe_invalid_email(self, client):
        r = client.post(f"{API}/newsletter", json={"email": "notanemail"})
        assert r.status_code == 422

    def test_list_subscribers_no_object_id(self, client, unique_email):
        r = client.get(f"{API}/newsletter")
        assert r.status_code == 200
        data = r.json()
        assert isinstance(data, list)
        assert len(data) >= 1
        for sub in data:
            assert "_id" not in sub
            assert "id" in sub
            assert "email" in sub
            assert "source" in sub
            assert "subscribed_at" in sub
        # confirm our email exists
        emails = [s["email"] for s in data]
        assert unique_email.lower() in emails

    def test_newsletter_count(self, client):
        r = client.get(f"{API}/newsletter/count")
        assert r.status_code == 200
        data = r.json()
        assert "count" in data
        assert isinstance(data["count"], int)
        assert data["count"] >= 1

    def test_email_normalization(self, client):
        email = f"TEST_Upper_{uuid.uuid4().hex[:6]}@Example.COM"
        r1 = client.post(f"{API}/newsletter", json={"email": email})
        assert r1.status_code == 200
        # Resubmit lowercased - should be detected as duplicate
        r2 = client.post(f"{API}/newsletter", json={"email": email.lower()})
        assert r2.status_code == 200
        assert "already" in r2.json()["message"].lower()
