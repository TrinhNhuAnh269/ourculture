// src/App.jsx
import { HashRouter, Routes, Route } from "react-router-dom";

// Import các component
import MainLayout from "./components/MainLayout.jsx";
import About from "./components/About.jsx";
import Blog from "./components/Blog.jsx";
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import ListCampaign from "./components/ListCampaign.jsx";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="event" element={<ListCampaign />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
