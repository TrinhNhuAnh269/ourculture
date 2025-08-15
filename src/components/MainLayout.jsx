import React, { useState, useEffect } from "react";

// Import admin login/dashboard components
import AdminDashboard from './AdminDashboard';
import LoginPage from './LoginPage';
import About from './About.jsx';
import Blog from './Blog.jsx';
import Contact from './Contact.jsx';
import { Outlet } from "react-router-dom";




// MainLayout: shared header, footer, and layout from main-layout/index.html
// Place dynamic content inside {props.children}

const MainLayout = ({ children }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSearchOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="main-wrapper clearfix">
    {/* HEADER START */}
  <header id="header" className="header-style-1" style={{position: 'absolute', right: 0, left: 0, paddingTop: '30px', paddingBottom: '30px', zIndex: 101}}>
      <div className="container">
        <div className="row clearfix">
          <div className="header-clear clearfix">
            <div className="header-content-left clearfix">
              <div className="logo">
                <a href="/">
                  <img src="/main-layout/img/dugem-logos.png" alt="Dugem Logo" />
                </a>
              </div>
            </div>
            <div className="header-content-center clearfix">
              <nav className="main-nav">
                <input id="main-menu-state" type="checkbox" />
                <label className="main-menu-btn sub-menu-trigger" htmlFor="main-menu-state">
                  <span className="main-menu-btn-icon"></span> Toggle main menu visibility
                </label>
                <ul id="main-menu" className="sm sm-clean">
                      <li className="menu-item"><a href="/" className="menu-link active">Home</a></li>
                      <li className="menu-item"><a href="/about" className="menu-link">About</a></li>
                      <li className="menu-item"><a href="/event" className="menu-link">Event</a></li>
                      <li className="menu-item"><a href="/blog" className="menu-link">News</a></li>
                      <li className="menu-item"><a href="/contact" className="menu-link">Contact</a></li>
                </ul>
              </nav>
            </div>
            <div className="header-content-right">
              <div className="header-info head-item clearfix">
            
              </div>
              <div className="admin-controls">
                {showLogin && !user ? (
                  <a className="button-basic-1" style={{marginLeft: '0.5rem'}} onClick={e => {e.preventDefault(); setShowLogin(false);}} href="#">
                    Back
                  </a>
                ) : (
                  <a className="button-basic-1" style={{marginLeft: '0.5rem'}} onClick={e => {e.preventDefault(); setShowLogin(true);}} href="#">
                    Login
                  </a>
                )}
              </div>
            </div>
            {searchOpen && (
              <div className="search search--open">
                <button id="btn-search-close" className="btn--search-close" onClick={() => setSearchOpen(false)}><i className="icon-themify-1"></i></button>
                <form className="search__form" onSubmit={e => {e.preventDefault(); setSearchOpen(false);}}>
                  <input className="search__input" name="search" type="search" placeholder="Search..." />
                  <span className="search__info">Hit enter to search or ESC to close</span>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
    {/* HEADER END */}

    {/* MAIN CONTENT */}
    <main>
      {showLogin && !user ? (
        <LoginPage onLogin={u => { setUser(u); setShowLogin(false); }} onBackToPublic={() => setShowLogin(false)} />
      ) : user ? (
        <AdminDashboard user={user} onLogout={() => setUser(null)} />
      ) : (
        <Outlet />
      )}
    </main>

    {/* FOOTER START */}
    <footer id="footer" className="footer clearfix">
      <div className="footer-wrap clearfix">
        <div className="footer-bottom clearfix">
          <div className="container">
            <div className="row">
              <div className="foot-col column column-1 text-center clearfix">
                <div className="logo-footer">
                  <a href="/">
                    <img src="/main-layout/img/dugem-logos.png" alt="Logo-Footer" />
                  </a>
                </div>
              </div>
              <div className="foot-col column column-1 text-center clearfix">
                <div className="social-footer">
                  <ul>
                    <li className="soc-icon"><a href="#"><i className="icon icon-themify-13"></i>Twitter</a></li>
                    <li className="soc-icon"><a href="#"><i className="icon icon-themify-17"></i>Facebook</a></li>
                    <li className="soc-icon"><a href="#"><i className="icon icon-themify-11"></i>Google+</a></li>
                    <li className="soc-icon"><a href="#"><i className="icon icon-social-dribbble"></i>Dribbble</a></li>
                    <li className="soc-icon"><a href="#"><i className="icon icon-behance2"></i>Behance</a></li>
                  </ul>
                </div>
              </div>
              <div className="foot-col column column-1 text-center clearfix">
                <div id="copyright" className="copyright-text">
                  © Copyright 2021, Built by ThemesAwesome All rights reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    {/* FOOTER END */}
  </div>
  );
};

export default MainLayout;
