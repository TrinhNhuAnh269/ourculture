import React from 'react';

// Giả sử các file CSS này được import trong file chính của dự án React của bạn,
// ví dụ như trong App.js hoặc index.js.
// import './css/aos.css';
// import './css/style1.css';
// import './css/swiper.min.css';
// import './css/lightgallery.min.css';
// import './css/plugin.css';
// import './css/sm-core-css.css';
// import './css/sm-clean.css';
// import './css/thaw-flex.css';
// import './css/font.css';
// import './css/fontawesome.min.css';
// import './style.css';
// import './css/responsive.css';

function ContactPage() {
    // Trong React, các thẻ <script> thường không được đặt trực tiếp trong JSX.
    // Thay vào đó, bạn có thể sử dụng hook `useEffect` để tải các script
    // hoặc thêm chúng vào file public/index.html của dự án.
    // Tương tự, các thẻ trong <head> như <title> và <meta> thường được quản lý
    // bằng các thư viện như React Helmet hoặc được đặt trong public/index.html.

    return (
        <div className="main-wrapper clearfix">
            {/* HEADER START
             ============================================= */}
            <header id="header" className="header-style-1 header-alt">
                <div className="container">
                    <div className="row clearfix">
                        <div className="header-clear clearfix">
                            <div className="header-content-left clearfix">
                                {/* LOGO START
                                 ============================================= */}
                                <div className="logo">
                                    <a href="index.html"><img src="img/dugem-logos.png" alt="Dugem Logo" /></a>
                                </div>
                                {/* LOGO END */}
                            </div>
                            <div className="header-content-center clearfix">
                                {/* NAVIGATION START============================================= */}
                                <nav className="main-nav">
                                    {/* Mobile menu toggle button (hamburger/x icon) */}
                                    <input id="main-menu-state" type="checkbox" />
                                    <label className="main-menu-btn sub-menu-trigger" htmlFor="main-menu-state">
                                        <span className="main-menu-btn-icon"></span> Toggle main menu visibility
                                    </label>
                                    {/* Sample menu definition */}
                                    <ul id="main-menu" className="sm sm-clean">
                                        <li className="menu-item"><a href="/" className="menu-link">Home</a></li>
                                        <li className="menu-item"><a href="/about" className="menu-link">About</a></li>
                                        <li className="menu-item"><a href="/event" className="menu-link">Event</a></li>
                                        <li className="menu-item"><a href="/blog" className="menu-link">News</a></li>
                                        <li className="menu-item"><a href="/contact" className="menu-link active">Contact</a></li>
                                    </ul>
                                </nav>
                                {/* NAVIGATION END */}
                            </div>
                            <div className="header-content-right">
                                <div className="header-info head-item clearfix">
                                    <div className="info-wrap">
                                        <div className="search-wrap">
                                            <button id="btn-search" className="btn btn--search"><i className="icon-simple-line-icons-143"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="search">
                                <button id="btn-search-close" className="btn--search-close"><i className="icon-themify-1"></i></button>
                                <form className="search__form">
                                    <input className="search__input" name="search" type="search" placeholder="Search..." />
                                    <span className="search__info">Hit enter to search or ESC to close</span>
                                </form>
                            </div>{/* /search */}
                        </div>
                    </div>
                </div>
            </header>
            {/* HEADER END */}

            {/* SECTION */}
            <section className="content">
                {/* CONTACT SECTION */}
                <div className="contact-section">
                    <div className="container">
                        <div className="contact-section-wrap grid grid-cols-12 gap-24">
                            <div className="the-title text-left col-span-9 sm:col-span-12 res:col-span-12">
                                <div className="contact-title">
                                    <h5 className="head-title-2 text-white">
                                        / CONTACTUS
                                    </h5>
                                    <h2 className="head-title-1">
                                        Please do write us
                                    </h2>
                                    <p className="dugem-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia</p>
                                </div>
                                <div className="contact-form-style">
                                    <input type="text" name="your-name" size="40" placeholder="Name" />
                                    <input type="text" name="your-name" size="40" placeholder="Name" />
                                    <textarea name="your-message" cols="40" rows="10" placeholder="Text"></textarea>
                                    <input type="submit" value="Send" className="button-basic-1" />
                                </div>
                            </div>
                            <div className="title-side col-span-3 sm:col-span-12 res:col-span-12">
                                <div className="block-location">
                                    <div className="dugem-text clearfix">
                                        <h3 className="text-white">Our Location</h3>
                                        <p>Jl. Maleer Indah II, Maleer, Batununggal, Kota Bandung, Jawa Barat 40274</p>
                                        <p>+0028 55 96 69</p>
                                    </div>
                                </div>
                                <div className="block-location">
                                    <div className="dugem-text clearfix">
                                        <h3 className="text-white">Email</h3>
                                        <p>Jl. Maleer Indah II, Maleer, Batununggal, Kota Bandung, Jawa Barat 40274</p>
                                        <p>+0028 55 96 69</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* CONTACT END */}
                {/* TITLE CONTACT */}
                <div className="big-title">
                    <div className="the-title text-right">
                        <h1>Get In Touch</h1>
                    </div>
                </div>
                {/* TITLE END */}
                {/* CONTACT INFO MAPS */}
                <div className="maps-info-section clearfix">
                    <div className="maps-info-wrap clearfix">
                        <div className="maps-iframe column column-1">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15842.776016949427!2d107.6393476!3d-6.9271322!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x50ce999122e7d8a9!2sZLOOB%20DIGITAL%20KREASI!5e0!3m2!1sid!2sid!4v1610959843725!5m2!1sid!2sid" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                        </div>
                    </div>
                </div>
                {/* CONTACT INFO MAPS END*/}
                {/* NEWSLETTER */}
                <div className="news-letter">
                    <div className="container">
                        <div className="news-letter-wrap">
                            <div className="the-title text-center">
                                <h5 className="text-white">
                                    Upcoming events and special offers
                                </h5>
                                <h3>Get Weekly Newsletter
                                </h3>
                            </div>
                            <div className="contact-form-style clearfix">
                                <input type="text" name="your-name" size="40" placeholder="Email" />
                                <input type="submit" value="Send" className="button-basic-1" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* NEWSLETTER END */}
            </section>
            {/* SECTION END */}
            {/* FOOTER START
             ============================================= */}
            <footer id="footer" className="footer clearfix">
                <div className="footer-wrap clearfix">
                    <div className="footer-bottom clearfix">
                        <div className="container">
                            <div className="row">
                                <div className="foot-col column column-1 text-center clearfix">
                                    <div className="logo-footer">
                                        <a href="index.html"><img src="img/dugem-logos.png" alt="Logo-Footer" /></a>
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
}

export default ContactPage;
