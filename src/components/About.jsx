// src/pages/Home.jsx

import React from "react";

const About = () => {
  return (
    <section className="content">
      <div className="about-page">
        <div className="container">
          <div className="about-wrap">
            <div className="about-img">
              <img src="img/about-img.png" alt="about-img" />
            </div>
            <div className="about-text">
              <div className="the-title">
                <h5 className="head-title-2" data-aos="fade-up"> / STORY </h5>
                <h2 className="head-title-1">
                  Brief About US
                  <span className="title-end">.</span>
                </h2>
              </div>
              <div className="the-text grid grid-cols-12 gap-24">
                <p className="col-span-4 sm:col-span-12 res:col-span-12">
                  For each project we establish relationships with partners who we know will help us create added value for your project. As well as bringing together the public and private sectors, we make sector overarching links to gather knowledge and to learn from each other.
                </p>
                <p className="col-span-4 sm:col-span-12 res:col-span-12">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit.
                </p>
                <p className="col-span-4 sm:col-span-12 res:col-span-12">
                  Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam luptatem quia voluptas sit aspernatur aut odit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div id="lightgallery" className="about-gallery clearfix">
        <div className="gallery clearfix">
          <div className="gallery-block-wrap grid grid-cols-12 gap-10">
            {[
              "img/about-gallery-1.png",
              "img/about-gallery-2.png",
              "img/about-gallery-3.png",
              "img/about-gallery-4.png",
              "img/about-gallery-5.png",
              "img/about-gallery-6.png",
            ].map((src, index) => (
              <div
                key={index}
                data-src={src}
                className="column-gallery col-span-4 sm:col-span-6 res:col-span-6"
              >
                <div className="item-wrap">
                  <figure className="imghvr-circle-top-left">
                    <img src={src} alt={`gallery-pesta-${index + 1}`} />
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
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="testimonial-block about-testi">
        <div className="background-overlay"> </div>
        <div className="testimonial-background"></div>
        <div className="testimonial-wrap">
          <div className="the-title text-center">
            <h5 className="head-title-2" data-aos="fade-up"> / TESTIMONIAL </h5>
            <h2 className="head-title-1">
              From Great Our Clients
              <span className="title-end">.</span>
            </h2>
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
                        <cite className="testi-job">Photographer</cite>
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
                        <cite className="testi-job">Musician</cite>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Client Section */}
      <div className="client-about">
        <div className="container">
          <div className="client-wrap grid grid-cols-12 gap-10">
            <div className="the-title text-left col-span-4 sm:col-span-2 res:col-span-12">
              <h5 className="head-title-2" data-aos="fade-up"> /PARTNERS </h5>
              <h2 className="head-title-1">
                Social Channels & Sponsors
                <span className="title-end">.</span>
              </h2>
            </div>
            <div className="client-inner-content col-span-8 sm:col-span-12 res:col-span-12 grid grid-cols-6">
              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num} className="client-content col-span-2 sm:col-span-6 res:col-span-6">
                  <a href="">
                    <img src={`img/client.-${num}.png`} alt={`client-${num}`} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Waiting Section */}
      <div className="waiting-block">
        <div className="background-overlay"> </div>
        <div className="container">
          <div className="waiting-title">
            <div className="the-title text-center">
              <h3>
                We're waiting for You
                <span className="title-end">.</span>
              </h3>
              <a href="contact.html" className="button-basic-1">
                MAKE RESERVATION
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
