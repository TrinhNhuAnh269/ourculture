import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

// Import các component
import MainLayout from "./src/components/MainLayout.jsx";
import About from "./src/components/About.jsx";
import Blog from "./src/components/Blog.jsx";
import Home from "./src/components/Home.jsx";
import Contact from "./src/components/Contact.jsx";
import ListCampaign from "./src/components/ListCampaign.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
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
    </HashRouter>
  </React.StrictMode>
);

