import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import các component
import MainLayout from "./components/MainLayout.jsx";
import About from "./components/About.jsx";
import Blog from "./components/Blog.jsx"; // Thêm Blog vào để tránh lỗi
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import ListCampaign from "./components/ListCampaign.jsx"; // Thay vì icon Home từ lucide-react

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Trang chủ */}
          <Route index element={<Home />} />

          {/* About */}
          <Route path="/about" element={<About />} />

          {/* Blog */}
          <Route path="/blog" element={<Blog />} />

          {/* Contact */}
          <Route path="/contact" element={<Contact />} />
          
          {/* List Campaign */} 
          <Route path="/event" element={<ListCampaign />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
