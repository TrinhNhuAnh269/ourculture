import React from 'react';

// Giả sử các file CSS này được import trong file chính của dự án React của bạn,
// ví dụ như trong App.js hoặc index.js.
// import './css/aos.css';
// import './css/style1.css';
// import './css/plugin.css';
// import './css/sm-core-css.css';
// import './css/sm-clean.css';
// import './css/thaw-flex.css';
// import './css/font.css';
// import './css/fontawesome.min.css';
// import './style.css';
// import './css/responsive.css';

function BlogPage() {
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
                                        <li className="menu-item"><a href="/blog" className="menu-link active">News</a></li>
                                        <li className="menu-item"><a href="/contact" className="menu-link">Contact</a></li>
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
            {/* SECTION START */}
            <section className="content">
                {/* BLOG POST */}
                <div className="page-blog blog-post">
                    <div className="container clearfix">
                        {/* BLOG LOOP START */}
                        <div className="blog-item blog-content grid grid-cols-12 gap-8">
                            <div className="post-thumb-wrap col-span-6 sm:col-span-12 res:col-span-12">
                                <div className="post-thumb">
                                    <a href="single-post.html">
                                        <img src="img/blog-img-1.png" alt="blog-img-1" />
                                        <div className="pesta-overlay"></div>
                                    </a>
                                </div>
                            </div>
                            <div className="post-content-wrap col-span-6 sm:col-span-12 res:col-span-12">
                                <div className="loop-post-head the-post-head clearfix">
                                    <div className="standard-post-categories span-head">
                                        <a href="single-post.html">Nightlife</a>
                                    </div>
                                    <h2 className="post-title entry-title">
                                        <a href="single-post.html">
                                            Donec condimentum pulvinorem velitursus vitae
                                        </a>
                                    </h2>
                                </div>
                                <div className="date span-head">
                                    <a href="#">
                                        <span>August, 2021</span>
                                    </a>
                                </div>
                                <div className="post-text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit odio ante, id dapibus elit condimentum vitae. Maecenas eget orci…</p>
                                </div>
                            </div>
                        </div>
                        <div className="blog-item blog-content grid grid-cols-12 gap-8">
                            <div className="post-thumb-wrap col-span-6 sm:col-span-12 res:col-span-12">
                                <div className="post-thumb">
                                    <a href="single-post.html">
                                        <img src="img/blog-img-2.png" alt="blog-img-2" />
                                        <div className="pesta-overlay"></div>
                                    </a>
                                </div>
                            </div>
                            <div className="post-content-wrap col-span-6 sm:col-span-12 res:col-span-12">
                                <div className="loop-post-head the-post-head clearfix">
                                    <div className="standard-post-categories span-head">
                                        <a href="single-post.html">Club News</a>
                                    </div>
                                    <h2 className="post-title entry-title">
                                        <a href="single-post.html">
                                            Vivamus pulvinar urna nec ipsum interdum blandi
                                        </a>
                                    </h2>
                                </div>
                                <div className="date span-head">
                                    <a href="#">
                                        <span>April, 2021</span>
                                    </a>
                                </div>
                                <div className="post-text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit odio ante, id dapibus elit condimentum vitae. Maecenas eget orci…</p>
                                </div>
                            </div>
                        </div>
                        <div className="blog-item blog-content grid grid-cols-12 gap-8">
                            <div className="post-thumb-wrap col-span-6 sm:col-span-12 res:col-span-12">
                                <div className="post-thumb">
                                    <a href="single-post.html">
                                        <img src="img/blog-img-3.png" alt="blog-img-3" />
                                        <div className="pesta-overlay"></div>
                                    </a>
                                </div>
                            </div>
                            <div className="post-content-wrap col-span-6 sm:col-span-12 res:col-span-12">
                                <div className="loop-post-head the-post-head clearfix">
                                    <div className="standard-post-categories span-head">
                                        <a href="single-post.html">Contest</a>
                                    </div>
                                    <h2 className="post-title entry-title">
                                        <a href="single-post.html">
                                            Vivamus pulvinar urna nec ipsum interdum blandi </a>
                                    </h2>
                                </div>
                                <div className="date span-head">
                                    <a href="#">
                                        <span>April, 2021</span>
                                    </a>
                                </div>
                                <div className="post-text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit odio ante, id dapibus elit condimentum vitae. Maecenas eget orci…</p>
                                </div>
                            </div>
                        </div>
                        <div className="blog-item blog-content grid grid-cols-12 gap-8">
                            <div className="post-thumb-wrap col-span-6 sm:col-span-12 res:col-span-12">
                                <div className="post-thumb">
                                    <a href="single-post.html">
                                        <img src="img/blog-img-4.png" alt="blog-img-4" />
                                        <div className="pesta-overlay"></div>
                                    </a>
                                </div>
                            </div>
                            <div className="post-content-wrap col-span-6 sm:col-span-12 res:col-span-12">
                                <div className="loop-post-head the-post-head clearfix">
                                    <div className="standard-post-categories span-head">
                                        <a href="single-post.html">Nightlife</a>
                                    </div>
                                    <h2 className="post-title entry-title">
                                        <a href="single-post.html">
                                            Maecenas ultrices justo metusoer quis facilisis
                                        </a>
                                    </h2>
                                </div>
                                <div className="date span-head">
                                    <a href="#">
                                        <span>April, 2021</span>
                                    </a>
                                </div>
                                <div className="post-text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit odio ante, id dapibus elit condimentum vitae. Maecenas eget orci…</p>
                                </div>
                            </div>
                        </div>
                        <div className="blog-item blog-content grid grid-cols-12 gap-8">
                            <div className="post-thumb-wrap col-span-6 sm:col-span-12 res:col-span-12">
                                <div className="post-thumb">
                                    <a href="single-post.html">
                                        <img src="img/blog-img-5.png" alt="blog-img-5" />
                                        <div className="pesta-overlay"></div>
                                    </a>
                                </div>
                            </div>
                            <div className="post-content-wrap col-span-6 sm:col-span-12 res:col-span-12">
                                <div className="loop-post-head the-post-head clearfix">
                                    <div className="standard-post-categories span-head">
                                        <a href="single-post.html">Nightlife</a>
                                    </div>
                                    <h2 className="post-title entry-title">
                                        <a href="single-post.html">
                                            Proin In Orci Quis Elit Blandit Imperdiet Enim </a>
                                    </h2>
                                </div>
                                <div className="date span-head">
                                    <a href="#">
                                        <span>April, 2021</span>
                                    </a>
                                </div>
                                <div className="post-text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit odio ante, id dapibus elit condimentum vitae. Maecenas eget orci…</p>
                                </div>
                            </div>
                        </div>
                        <div className="blog-standard-pagination clearfix">
                            <nav className="navigation-paging pagination clearfix">
                                <div className="post-navigation nav-previous pull-left">
                                    <a href="#" className="button-basic-1">OLDER POSTS</a>
                                </div>
                                <div className="post-navigation nav-previous pull-right">
                                    <a href="#" className="button-basic-1">NEWST POSTS</a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                {/* BLOG POST BLOCK END */}
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

export default BlogPage;
