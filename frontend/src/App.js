import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import AboutUs from "@/pages/AboutUs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="bottom-center" theme="light" />
    </div>
  );
}

export default App;
