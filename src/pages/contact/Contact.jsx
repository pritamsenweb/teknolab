import React from 'react';
import { Breadcrumbs } from '../../component';

function Contact() {
    return (
        <>

            <Breadcrumbs pageTitle="Contact Us" pageDesc="Excepteur sint occaecat cupidatat non proident, sunt in coulpa qui official<br> modeserunt mollit anim id est laborum 20 years experience."/>

            <div class="rs-contact contact-style5 pt-130 md-pt-80">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 md-mb-60">
                            <div class="contact-box">
                                <div class="sec-title mb-45">
                                    <span class="sub-text contact pb-7">Let's Talk</span>
                                    <h2 class="title">Speak With Engineers.</h2>
                                </div>
                                <div class="address-box mb-25">
                                    <div class="address-icon">
                                        <i class="fa fa-home"></i>
                                    </div>
                                    <div class="address-text">
                                        <span class="label">Email:</span>
                                        <a href="tel:123222-8888">(123) 222-8888</a>
                                    </div>
                                </div>
                                <div class="address-box mb-25">
                                    <div class="address-icon">
                                        <i class="fa fa-phone"></i>
                                    </div>
                                    <div class="address-text">
                                        <span class="label">Phone:</span>
                                        <a href="#">support@rstheme.com</a>
                                    </div>
                                </div>
                                <div class="address-box">
                                    <div class="address-icon">
                                        <i class="fa fa-map-marker"></i>
                                    </div>
                                    <div class="address-text">
                                        <span class="label">Address:</span>
                                        <div class="desc">New Jesrsy, 1201, USA</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8 pl-70 md-pl-15">
                            <div class="contact-widget">
                                <div id="form-messages"></div>
                                <form id="contact-form" method="post" action="">
                                    <fieldset>
                                        <div class="row">
                                            <div class="col-lg-6 mb-30 col-md-6 col-sm-6">
                                                <input class="from-control" type="text" id="name" name="name" placeholder="Name" required="" />
                                            </div>
                                            <div class="col-lg-6 mb-30 col-md-6 col-sm-6">
                                                <input class="from-control" type="text" id="email" name="email" placeholder="E-Mail" required="" />
                                            </div>
                                            <div class="col-lg-6 mb-30 col-md-6 col-sm-6">
                                                <input class="from-control" type="text" id="phone" name="phone" placeholder="Phone Number" required="" />
                                            </div>
                                            <div class="col-lg-6 mb-30 col-md-6 col-sm-6">
                                                <input class="from-control" type="text" id="website" name="website" placeholder="Your Website" required="" />
                                            </div>

                                            <div class="col-lg-12 mb-30">
                                                <textarea class="from-control" id="message" name="message" placeholder="Your message Here" required=""></textarea>
                                            </div>
                                        </div>
                                        <div class="btn-part">
                                            <div class="form-group mb-0">
                                                <input class="readon download submit-faq contact" type="submit" value="Submit Now" />
                                            </div>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="map-canvas pt-130 md-pt-80">
                    <iframe src="https://maps.google.com/maps?q=rstheme&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe>
                </div>
            </div>

        </>
    )
}

export default Contact