
// All code commented out. Only admin features are active.

import React from "react";
import MainLayout from "./MainLayout";

const Home = () => (
  <MainLayout>
    <section className="content">
      {/* MAIN VIDEO BACKGROUND */}
      <div className="main-video">
        <div className="image-background"></div>
        <div className="image-title">
          <p>At vero eos et accusamus et iusto odio dignissimos</p>
          <p>ducimus qui blanditiis</p>
          <a href="#" className="button-basic-1" data-aos="fade-up">All Events</a>
        </div>
        <div className="video-background">
          <video autoPlay muted loop id="myVideo">
            <source src="/main-layout/img/concert-loop.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      {/* GLOBAL BLOCK */}
      <div className="global-block">
        <div className="container">
          <div className="global-block-wrap grid grid-cols-12 gap-8">
            <div className="global-img col-span-5 sm:col-span-12 res:col-span-12">
              <div className="item-content">
                <div className="img-header">
                  <a className="pattern" href="#">
                    <img src="/main-layout/img/event-img.png" alt="event-img" />
                  </a>
                </div>
              </div>
            </div>
            <div className="global-counter col-span-7 sm:col-span-12 res:col-span-12">
              <div className="global-title">
                <a href="#" className="button-basic-1">Electro</a>
                <h2 data-aos="fade-up">Global Fridays Glow Up 4.20</h2>
                <h5 data-aos="fade-up">/ 26 SEPTEMBER 2021</h5>
                <p className="dugem-text" data-aos="fade-up">Mauris varius porttitor suscipit. Quisque justo tortor, convallis id elit vitae, posuere ullamcorper ante. Sed in magna viverra, fermentum arcu sit amet, porttitor nulla. Vestibulum vestibulum sem neque.</p>
              </div>
              <div className="global-buy" data-aos="fade-up">
                <a href="/single-event" className="button-basic-1">View Detail</a>
                <a href="#" className="button-basic-2">Get Ticket</a>
              </div>
              <div className="global-countdown">
                <div className="event-counter clearfix">
                  <div className="countdown">
                    <div className="days-count float">
                      <h3 id="days"></h3>
                      <span>Days</span>
                    </div>
                    <div className="hours-count float">
                      <h3 id="hours"></h3>
                      <span>Hours</span>
                    </div>
                    <div className="minutes-count float">
                      <h3 id="minutes"></h3>
                      <span>Minutes</span>
                    </div>
                    <div className="seconds-count float">
                      <h3 id="seconds"></h3>
                      <span>Seconds</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* TABLE EVENTS */}
      <div className="table-events">
        <div className="background-overlay"></div>
        <div className="container">
          <div className="the-title text-center" data-aos="fade-up">
            <h5 className="head-title-2"> / EVENTS </h5>
            <h2 className="head-title-1"> Upcoming Event
              <span className="title-end">.</span></h2>
            <p className="dugem-text"> Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.</p>
          </div>
          <table className="event">
            <tbody>
              <tr>
                <td>Date</td>
                <td className="event-thumb-head"></td>
                <td>Artist</td>
                <td>Event</td>
                <td>Ticket</td>
              </tr>
              {/* ...event rows... */}
              <tr>
                <td className="event-date">26/09/2021</td>
                <td className="event-thumb">
                  <a href="/single-event">
                    <img width="70" height="100" src="/main-layout/img/upcoming-event-1.png" alt="table-1" />
                  </a>
                </td>
                <td className="event-artist">DJ Ocean & DJ Thunder</td>
                <td className="event-title">
                  <a href="/single-event">Global Fridays</a>
                </td>
                <td className="event-ticket-link">
                  <a href="#" className="button button-white rsvp">BOOK</a>
                  <a href="#" className="button button-white">BUY TICKET</a>
                </td>
              </tr>
              {/* Add more event rows as needed... */}
            </tbody>
          </table>
          {/* ...event-mobile and button-view omitted for brevity... */}
        </div>
      </div>
      {/* BLOG LOOP */}
      <div className="blog-loop">
        <div className="container">
          <div className="news-title grid grid-cols-12">
            <div className="the-title col-span-6 sm:col-span-12 res:col-span-12" data-aos="fade-up">
              <h5 className="head-title-2"> / EVENTS </h5>
              <h2 className="head-title-1"> Upcoming Event
                <span className="title-end">.</span></h2>
              <p className="dugem-text"> Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.</p>
            </div>
            <div className="button-view col-span-6 sm:col-span-12 res:col-span-12" data-aos="fade-up">
              <a href="/blog" className="button-basic-1">ALL JOURNAL</a>
            </div>
          </div>
        </div>
        {/* ...blog-slide omitted for brevity... */}
      </div>
      {/* TESTIMONIAL BLOCK */}
      <div className="testimonial-block">
        <div className="background-overlay"> </div>
        <div className="testimonial-background"></div>
        <div className="testimonial-wrap">
          <div className="the-title text-center">
            <h5 className="head-title-2"> / TESTIMONIAL </h5>
            <h2 className="head-title-1">
              From Great Our Clients
              <span className="title-end">.</span>
            </h2>
          </div>
          {/* ...testimonial-slide omitted for brevity... */}
        </div>
      </div>
      {/* BOOK TABLE */}
      <div className="book-table">
        <div className="container">
          <div className="book-wrap news-title grid grid-cols-12 gap-24">
            <div className="the-title col-span-6 sm:col-span-12 res:col-span-12">
              <h5 className="head-title-2"> / RESERVATION </h5>
              <h2 className="head-title-1"> Book A Table Now
                <span className="title-end">.</span></h2>
              <p className="dugem-text"> Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor. Sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. </p>
            </div>
            <div className="contact-form-style col-span-6 sm:col-span-12 res:col-span-12">
              <input type="text" name="your-name" size="40" placeholder="Name" />
              <input type="text" name="your-name" size="40" placeholder="Email" />
              <textarea name="your-message" cols="40" rows="10" placeholder="Text"></textarea>
              <input type="submit" value="Send" className="button-basic-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </MainLayout>
);

export default Home;
