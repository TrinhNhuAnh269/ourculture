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

function AboutPage() {
    // Trong React, các thẻ <script> thường không được đặt trực tiếp trong JSX.
    // Thay vào đó, bạn có thể sử dụng hook `useEffect` để tải các script
    // hoặc thêm chúng vào file public/index.html của dự án.
    // Tương tự, các thẻ trong <head> như <title> và <meta> thường được quản lý
    // bằng các thư viện như React Helmet hoặc được đặt trong public/index.html.

    return (
        <div className="main-wrapper clearfix">
            {/* HEADER START */}
            <header id="header" className="header-style-1 header-alt">
                <div className="container">
                    <div className="row clearfix">
                        <div className="header-clear clearfix">
                            <div className="header-content-left clearfix">
                                {/* LOGO START */}
                                <div className="logo">
                                    <a href="index.html"><img src="img/dugem-logos.png" alt="Dugem Logo" /></a>
                                </div>
                                {/* LOGO END */}
                            </div>
                            <div className="header-content-center clearfix">
                                {/* NAVIGATION START */}
                                <nav className="main-nav">
                                    <input id="main-menu-state" type="checkbox" />
                                    <label className="main-menu-btn sub-menu-trigger" htmlFor="main-menu-state">
                                        <span className="main-menu-btn-icon"></span> Toggle main menu visibility
                                    </label>
                                    <ul id="main-menu" className="sm sm-clean">
                                        <li className="menu-item"><a href="/" className="menu-link">Home</a></li>
                                        <li className="menu-item"><a href="/about" className="menu-link active">About</a></li>
                                        <li className="menu-item"><a href="/event" className="menu-link">Event</a></li>
                                        <li className="menu-item"><a href="/blog" className="menu-link">News</a></li>
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
            {/* HEADER END */}

            {/* SECTION START */}
            <section className="content">
                {/* PAGE TITLE */}
                <div className="about-page">
                    <div className="container">
                        <div className="about-wrap">
                            <div className="about-img">
                                <img src="img/about-img.png" alt="about-img" />
                            </div>
                            <div className="about-text">
                                <div className="the-title">
                                    <h5 className="head-title-2" data-aos="fade-up"> / STORY </h5>
                                    <h2 className="head-title-1"> Brief About US
                                        <span className="title-end">.</span></h2>
                                </div>
                                <div className="the-text grid grid-cols-12 gap-24">
                                    <p className="col-span-4 sm:col-span-12 res:col-span-12">
                                        For each project we establish relationships with partners who we know will help us create added value for your project. As well as bringing together the public and private sectors, we make sector overarching links to gather knowledge and to learn from each other.</p>
                                    <p className="col-span-4 sm:col-span-12 res:col-span-12"> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit.</p>
                                    <p className="col-span-4 sm:col-span-12 res:col-span-12">
                                        Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam luptatem quia voluptas sit aspernatur aut odit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* PAGE TITLE END */}

                {/* GALLERY BLOCK */}
                <div id="lightgallery" className="about-gallery clearfix">
                    <div className="gallery clearfix">
                        <div className="gallery-block-wrap grid grid-cols-12 gap-10">
                            <div data-src="img/about-gallery-1.png" className="column-gallery col-span-4 sm:col-span-6 res:col-span-6">
                                <div className="item-wrap">
                                    <figure className="imghvr-circle-top-left">
                                        <img src="img/about-gallery-1.png" alt="gallery-pesta-1" />
                                        <figcaption>
                                            <div className="caption-inside">
                                                <div className="gallery-icon">
                                                    <i className="fas fa-search"> </i>
                                                </div>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                            <div data-src="img/about-gallery-2.png" className="column-gallery col-span-4 sm:col-span-6 res:col-span-6">
                                <div className="item-wrap">
                                    <figure className="imghvr-circle-top-left">
                                        <img src="img/about-gallery-2.png" alt="gallery-pesta-2" />
                                        <figcaption>
                                            <div className="caption-inside">
                                                <div className="gallery-icon">
                                                    <i className="fas fa-search"> </i>
                                                </div>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                            <div data-src="img/about-gallery-3.png" className="column-gallery col-span-4 sm:col-span-6 res:col-span-6">
                                <div className="item-wrap">
                                    <figure className="imghvr-circle-top-left">
                                        <img src="img/about-gallery-3.png" alt="gallery-pesta-3" />
                                        <figcaption>
                                            <div className="caption-inside">
                                                <div className="gallery-icon">
                                                    <i className="fas fa-search"> </i>
                                                </div>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                            <div data-src="img/about-gallery-4.png" className="column-gallery col-span-4 sm:col-span-6 res:col-span-6">
                                <div className="item-wrap">
                                    <figure className="imghvr-circle-top-left">
                                        <img src="img/about-gallery-4.png" alt="gallery-pesta-4" />
                                        <figcaption>
                                            <div className="caption-inside">
                                                <div className="gallery-icon">
                                                    <i className="fas fa-search"> </i>
                                                </div>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                            <div data-src="img/about-gallery-5.png" className="column-gallery col-span-4 sm:col-span-6 res:col-span-6">
                                <div className="item-wrap">
                                    <figure className="imghvr-circle-top-left">
                                        <img src="img/about-gallery-5.png" alt="gallery-pesta-5" />
                                        <figcaption>
                                            <div className="caption-inside">
                                                <div className="gallery-icon">
                                                    <i className="fas fa-search"> </i>
                                                </div>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                            <div data-src="img/about-gallery-6.png" className="column-gallery col-span-4 sm:col-span-6 res:col-span-6">
                                <div className="item-wrap">
                                    <figure className="imghvr-circle-top-left">
                                        <img src="img/about-gallery-6.png" alt="gallery-pesta-6" />
                                        <figcaption>
                                            <div className="caption-inside">
                                                <div className="gallery-icon">
                                                    <i className="fas fa-search"> </i>
                                                </div>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* TESTIMONIAL BLOCK END */}

                <div className="testimonial-block about-testi">
                    <div className="background-overlay"> </div>
                    <div className="testimonial-background"></div>
                    <div className="testimonial-wrap">
                        <div className="the-title text-center">
                            <h5 className="head-title-2" data-aos="fade-up"> / TESTIMONIAL </h5>
                            <h2 className="head-title-1">
                                From Great Our Clients
                                <span className="title-end">.</span></h2>
                        </div>
                        <div className="testimonial-slide">
                            <div className="swipper-button clearfix">
                                <div className="swiper-button-next">
                                    <span>Prev</span>
                                    <div className="car-page-arrow-next"></div>
                                </div>
                                <div className="swiper-button-prev">
                                    <span>Next</span>
                                    <div className="car-page-arrow-prev"></div>
                                </div>
                            </div>
                            <div className="swiper-container">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="testi-content">
                                            <div className="testimonial-text">
                                                <p>"I'm the sort of person who takes a camera to dinner or a nightclub because I enjoy taking pictures of people."</p>
                                            </div>
                                            <div className="testimonial-detail-inner">
                                                <div className="testimonial-image">
                                                    <img src="img/testimonial-profile-1.png" alt="testi-1" />
                                                </div>
                                                <div className="test-info">
                                                    <h5 className="testi-author">Amanda Zedda</h5>
                                                    <cite className="testi-job">
                                                        Photographer </cite>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="testi-content">
                                            <div className="testimonial-text">
                                                <p>“A friend got me a job on the door of the Camden Palace nightclub, which quickly progressed to running the place.”</p>
                                            </div>
                                            <div className="testimonial-detail-inner">
                                                <div className="testimonial-image">
                                                    <img src="img/testimonial-profile-2.png" alt="testi-2" />
                                                </div>
                                                <div className="test-info">
                                                    <h5 className="testi-author">Jennifer Aster</h5>
                                                    <cite className="testi-job">
                                                        Musician </cite>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* TESTIMONIAL BLOCK END */}

                {/* CLIENT BLOCK */}
                <div className="client-about">
                    <div className="container">
                        <div className="client-wrap grid grid-cols-12 gap-10">
                            <div className="the-title text-left col-span-4 sm:col-span-2 res:col-span-12">
                                <h5 className="head-title-2" data-aos="fade-up"> /PARTNERS </h5>
                                <h2 className="head-title-1"> Social Channels & Sponsors
                                    <span className="title-end">.</span></h2>
                            </div>
                            <div className="client-inner-content col-span-8 sm:col-span-12 res:col-span-12 grid grid-cols-6">
                                <div className="client-content col-span-2 sm:col-span-6 res:col-span-6">
                                    <a href="">
                                        <img src="img/client.-1.png" alt="client-1" />
                                    </a>
                                </div>
                                <div className="client-content col-span-2 sm:col-span-6 res:col-span-6">
                                    <a href="">
                                        <img src="img/client.-2.png" alt="client-2" />
                                    </a>
                                </div>
                                <div className="client-content col-span-2 sm:col-span-6 res:col-span-6">
                                    <a href="">
                                        <img src="img/client.-3.png" alt="client-3" />
                                    </a>
                                </div>
                                <div className="client-content col-span-2 sm:col-span-6 res:col-span-6">
                                    <a href="">
                                        <img src="img/client.-4.png" alt="client-4" />
                                    </a>
                                </div>
                                <div className="client-content col-span-2 sm:col-span-6 res:col-span-6">
                                    <a href="">
                                        <img src="img/client.-5.png" alt="client-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* CLIENT BLOCK END */}

                {/* WAITING BLOCK */}
                <div className="waiting-block">
                    <div className="background-overlay"> </div>
                    <div className="container">
                        <div className="waiting-title">
                            <div className="the-title text-center">
                                <h3>We're waiting for You
                                    <span className="title-end">.</span></h3>
                                <a href="contact.html" className="button-basic-1">MAKE RESERVATION</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* WAITING BLOCK END */}
            </section>
            {/* SECTION END */}

            {/* FOOTER START */}
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

export default AboutPage;
