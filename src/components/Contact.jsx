// src/pages/Home.jsx
import React from "react";
const Contact = () => {
  return (
    <section class="content" style={{ marginTop: '100px'}}>
                <div class="contact-section">
                    <div class="container">
                        <div class="contact-section-wrap grid grid-cols-12 gap-24">
                            <div class="the-title text-left col-span-9 sm:col-span-12 res:col-span-12">
                                <div class="contact-title">
                                    <h5 class="head-title-2 text-white"> 
                                        / CONTACTUS 
                                    </h5>
                                    <h2 class="head-title-1"> 
                                        Please do write us
                                    </h2>
                                    <p class="dugem-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia</p>
                                </div>
                                <div class="contact-form-style">
                                    <input type="text" name="your-name" size="40" placeholder="Name"/>
                                    <input type="text" name="your-name" size="40" placeholder="Name"/>
                                    <textarea name="your-message" cols="40" rows="10" placeholder="Text"></textarea>
                                    <input type="submit" value="Send" class="button-basic-1"/>

                                </div>
                            </div>
                            <div class="title-side col-span-3 sm:col-span-12 res:col-span-12">
                                <div class="block-location">
                                    <div class="dugem-text clearfix">
                                        <h3 class="text-white">Our Location</h3>
                                        <p>Jl. Maleer Indah II, Maleer, Batununggal, Kota Bandung, Jawa Barat 40274</p>
                                        <p>+0028 55 96 69</p>
                                    </div>
                                </div>
                                <div class="block-location">
                                    <div class="dugem-text clearfix">
                                        <h3 class="text-white">Email</h3>
                                        <p>Jl. Maleer Indah II, Maleer, Batununggal, Kota Bandung, Jawa Barat 40274</p>
                                        <p>+0028 55 96 69</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="big-title">
                    <div class="the-title text-right">
                        <h1>Get In Touch</h1>
                    </div>
                </div>
                <div class="maps-info-section clearfix">
                    <div class="maps-info-wrap clearfix">
                        <div class="maps-iframe column column-1">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15842.776016949427!2d107.6393476!3d-6.9271322!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x50ce999122e7d8a9!2sZLOOB%20DIGITAL%20KREASI!5e0!3m2!1sid!2sid!4v1610959843725!5m2!1sid!2sid" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </div>
                </div>
                <div class="news-letter">
                    <div class="container">
                        <div class="news-letter-wrap">
                            <div class="the-title text-center">
                                <h5 class="text-white">
                                    Upcoming events and special offers
                                </h5>
                                <h3>Get Weekly Newsletter
                                </h3>
                            </div>
                            <div class="contact-form-style clearfix">
                                <input type="text" name="your-name" size="40" placeholder="Email"/>
                                <input type="submit" value="Send" class="button-basic-1"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  );
};

export default Contact;
