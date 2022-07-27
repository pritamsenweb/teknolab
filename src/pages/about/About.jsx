import React from 'react';
import { Breadcrumbs, OurPartner, Testimonials } from '../../component';

function About() {
  return (
    <>
      <Breadcrumbs pageTitle="About Us" pageDesc="Excepteur sint occaecat cupidatat non proident, sunt in coulpa qui official
modeserunt mollit anim id est laborum 20 years experience."/>
      <div class="rs-about style1 pt-130 pb-130 md-pt-80 md-pb-80">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-12 md-mb-50">
              <div class="about-images">
                <img class="js-tilt" src="assets/images/about/about-home.png" alt="images" />
                  <div class="rs-addon-services wow fadeinup">
                    <div class="services-icon">
                      <img src="assets/images/about/fav-light.png" alt="favicon" />
                    </div>
                    <div class="services-text">
                      <h4 class="title"> Leading Tech Agency Since 2001</h4>
                    </div>
                  </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 pl-40 md-pl-15">
              <div class="sec-title mb-40 md-mb-0">
                <span class="sub-upper pb-13">[ <span class="sub-title">About company</span> ] </span>
                <h2 class="title pb-26">
                  Improve and Innovate The <span>Tecnolab</span> Trends
                </h2>
                <div class="desc pb-30">
                  Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure. Creation timelines for the digital consulting business theme 2021 standard
                </div>
                <ul class="rs-features-list">
                  <li>
                    <i class="fa fa-check-circle"></i>
                    <span class="rs-feature-text">Sed ut perspiciatis unde omnis iste natus error</span>
                  </li>
                  <li>
                    <i class="fa fa-check-circle"></i>
                    <span class="rs-feature-text">Sed ut perspiciatis unde omnis iste natus error</span>
                  </li>
                  <li>
                    <i class="fa fa-check-circle"></i>
                    <span class="rs-feature-text">Sed ut perspiciatis unde omnis iste natus error</span>
                  </li>
                </ul>
                <div class="btn-part mt-36">
                  <a class="readon started get" href="about.html">Get Started</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="rs-appointment pt-130 pb-130 bg1 md-pt-80 md-pb-80">
                <div class="container">
                    <div class="row y-middle">
                        <div class="col-lg-5 md-mb-50">
                            <div class="contact-wrap">
                               <div class="content-part mb-25">
                                   <h2 class="title mb-15">Free Consultation</h2>
                                   <p class="desc">We here to help you 24/7 with experts</p>
                               </div>
                                <div id="form-messages"></div>
                                <form id="contact-form" method="post" action="">
                                    <fieldset>
                                        <div class="row">
                                            <div class="col-lg-12 mb-20">
                                                <input class="from-control" type="text" id="name" name="name" placeholder="Name" required="" />
                                            </div> 
                                            <div class="col-lg-12 mb-20">
                                                <input class="from-control" type="text" id="email" name="email" placeholder="E-Mail" required="" />
                                            </div>   
                                            <div class="col-lg-12 mb-20">
                                                <input class="from-control" type="text" id="phone" name="phone" placeholder="Phone Number" required="" />
                                            </div> 
                                            <div class="col-lg-12 mb-22">
                                                <textarea class="from-control" id="message" name="message" placeholder="Your message Here" required=""></textarea>
                                            </div>
                                        </div>
                                        <div class="form-group mb-0">
                                            <input class="submit-btn" type="submit" value="Submit Now" />
                                        </div>
                                    </fieldset>
                                </form> 
                            </div>
                        </div>
                        <div class="col-lg-7">
                            <div class="rs-contact-box text-center">
                                <div class="address-icon mb-23">
                                    <img src="assets/images/call-us/phn-icon.png" alt="Call" />
                                </div>
                                <div class="sec-title">
                                    <span class="sub-text pb-15 big white-color">// CALL US 24/7</span>
                                    <h2 class="title white-color pb-22">(+123) 456-9989</h2>
                                    <p class="desc desc2 white-color">Have any idea or project for in your mind call us or schedule a<br />
                                     appointment. Our representative will reply you shortly.</p>
                                </div>
                                <div class="btn-part mt-40">
                                    <a class="readon started" href="contact.html">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="rs-counter style1">
                <div class="container">
                    <div class="counter-top-area text-center">
                        <div class="row">
                            <div class="col-lg-4 md-mb-30">
                                <div class="counter-list">
                                    <div class="counter-text">
                                        <div class="count-number">
                                            <span class="rs-count k">25</span>
                                        </div>
                                        <h3 class="title">Products Done</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 md-mb-30">
                                <div class="counter-list">
                                    <div class="counter-text">
                                        <div class="count-number">
                                            <span class="rs-count k">10</span>
                                        </div>
                                        <h3 class="title">Happy Clients</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="counter-list">
                                    <div class="counter-text">
                                        <div class="count-number">
                                            <span class="rs-count plus">25</span>
                                        </div>
                                        <h3 class="title">Companies</h3>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>

            <div id="rs-about" class="rs-about style1 pt-216 pb-120 md-pb-80">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-12 pr-55 md-pr-15 md-mb-50">
                            <div class="sec-title mb-40">
                                <span class="sub-text pb-10">// About company</span>
                                <h2 class="title pb-26">
                                    Improve and Innovate The <span>Tecnolab</span> Trends
                                </h2>
                                <div class="desc">
                                    Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure. Creation timelines for the digital consulting business theme 2021 standard
                                </div>
                            </div>
                            
                            <div class="rs-skillbar style1">
                                <div class="cl-skill-bar">
                                   
                                   <span class="skillbar-title">Analytics</span>
                                   <div class="skillbar" data-percent="95">
                                       <p class="skillbar-bar"></p>
                                       <span class="skill-bar-percent"></span> 
                                   </div>
                                   
                                   <span class="skillbar-title">Development</span>
                                   <div class="skillbar blue-style" data-percent="75">
                                       <p class="skillbar-bar"></p>
                                       <span class="skill-bar-percent"></span> 
                                   </div>
                                   
                                   <span class="skillbar-title">Solutions</span>
                                   <div class="skillbar pink-style" data-percent="85">
                                       <p class="skillbar-bar"></p>
                                       <span class="skill-bar-percent"></span> 
                                   </div>
                                  
                                   <span class="skillbar-title">Support & Security</span>
                                   <div class="skillbar skyblue-style" data-percent="90">
                                       <p class="skillbar-bar"></p>
                                       <span class="skill-bar-percent"></span> 
                                   </div> 
                               </div>
                            </div>
                           
                        </div>
                        <div class="col-lg-6 col-md-12">
                            <div class="about-images">
                                <img class="js-tilt" src="assets/images/about/about-2.jpg" alt="images" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="rs-team team-style1 bg12 pt-125 pb-130 md-pt-75 md-pb-80">
                <div class="container custom">
                    <div class="sec-title text-center mb-45">
                        <span class="sub-text pb-10">// Our Team</span>
                        <h2 class="title white-color">
                            Meet With IT <span>Experts</span>
                        </h2>
                    </div>
                    <div class="rs-carousel owl-carousel" 
                        data-loop="true" 
                        data-items="3" 
                        data-margin="30" 
                        data-autoplay="true" 
                        data-hoverpause="true" 
                        data-autoplay-timeout="5000" 
                        data-smart-speed="800" 
                        data-dots="false" 
                        data-nav="false" 
                        data-nav-speed="false" 

                        data-md-device="3" 
                        data-md-device-nav="false" 
                        data-md-device-dots="false" 
                        data-center-mode="false"

                        data-ipad-device2="2" 
                        data-ipad-device-nav2="false" 
                        data-ipad-device-dots2="false"

                        data-ipad-device="2" 
                        data-ipad-device-nav="false" 
                        data-ipad-device-dots="false" 

                        data-mobile-device="1" 
                        data-mobile-device-nav="false" 
                        data-mobile-device-dots="false">
                        <div class="team-wrap">
                            <div class="image-wrap">
                                <a href="team-single.html"><img src="assets/images/team/style1/1.jpg" alt="Images" /></a>
                            </div>
                            <div class="team-content">
                                <h3 class="team-name">
                                    <a href="team-single.html">Corey Anderson</a>
                                </h3>
                                <span class="team-title">President & CEO</span>
                                <div class="plus-team">
                                    <div class="social-cion">
                                        <a href="#"><i class="fa fa-facebook"></i></a>
                                        <a href="#"><i class="fa fa-instagram"></i></a>
                                        <a href="#"><i class="fa fa-twitter"></i></a>
                                        <a href="#"><i class="fa fa-linkedin"></i></a>
                                    </div>
                                    <i class="fa flaticon-cross"></i>
                                </div>
                            </div>
                        </div>
                        <div class="team-wrap">
                            <div class="image-wrap">
                                <a href="team-single.html"><img src="assets/images/team/style1/2.jpg" alt="Images" /></a>
                            </div>
                            <div class="team-content">
                                <h3 class="team-name">
                                    <a href="team-single.html">Johnny Depp</a>
                                </h3>
                                <span class="team-title">Product Designer</span>
                                <div class="plus-team">
                                    <div class="social-cion">
                                        <a href="#"><i class="fa fa-facebook"></i></a>
                                        <a href="#"><i class="fa fa-instagram"></i></a>
                                        <a href="#"><i class="fa fa-twitter"></i></a>
                                        <a href="#"><i class="fa fa-linkedin"></i></a>
                                    </div>
                                    <i class="fa flaticon-cross"></i>
                                </div>
                            </div>
                        </div>
                        <div class="team-wrap">
                            <div class="image-wrap">
                                <a href="team-single.html"><img src="assets/images/team/style1/3.jpg" alt="Images" /></a>
                            </div>
                            <div class="team-content">
                                <h3 class="team-name">
                                    <a href="team-single.html">Angelina Jolie</a>
                                </h3>
                                <span class="team-title">Digital Marketer</span>
                                <div class="plus-team">
                                    <div class="social-cion">
                                        <a href="#"><i class="fa fa-facebook"></i></a>
                                        <a href="#"><i class="fa fa-instagram"></i></a>
                                        <a href="#"><i class="fa fa-twitter"></i></a>
                                        <a href="#"><i class="fa fa-linkedin"></i></a>
                                    </div>
                                    <i class="fa flaticon-cross"></i>
                                </div>
                            </div>
                        </div>
                        <div class="team-wrap">
                            <div class="image-wrap">
                                <a href="team-single.html"><img src="assets/images/team/style1/4.jpg" alt="Images" /></a>
                            </div>
                            <div class="team-content">
                                <h3 class="team-name">
                                    <a href="team-single.html">Makhaia Antitni</a>
                                </h3>
                                <span class="team-title">Content Writer</span>
                                <div class="plus-team">
                                    <div class="social-cion">
                                        <a href="#"><i class="fa fa-facebook"></i></a>
                                        <a href="#"><i class="fa fa-instagram"></i></a>
                                        <a href="#"><i class="fa fa-twitter"></i></a>
                                        <a href="#"><i class="fa fa-linkedin"></i></a>
                                    </div>
                                    <i class="fa flaticon-cross"></i>
                                </div>
                            </div>
                        </div>
                        <div class="team-wrap">
                            <div class="image-wrap">
                                <a href="team-single.html"><img src="assets/images/team/style1/5.jpg" alt="Images" /></a>
                            </div>
                            <div class="team-content">
                                <h3 class="team-name">
                                    <a href="team-single.html">Natalie Portman</a>
                                </h3>
                                <span class="team-title">General Manager</span>
                                <div class="plus-team">
                                    <div class="social-cion">
                                        <a href="#"><i class="fa fa-facebook"></i></a>
                                        <a href="#"><i class="fa fa-instagram"></i></a>
                                        <a href="#"><i class="fa fa-twitter"></i></a>
                                        <a href="#"><i class="fa fa-linkedin"></i></a>
                                    </div>
                                    <i class="fa flaticon-cross"></i>
                                </div>
                            </div>
                        </div>
                        <div class="team-wrap">
                            <div class="image-wrap">
                                <a href="team-single.html"><img src="assets/images/team/style1/6.jpg" alt="Images" /></a>
                            </div>
                            <div class="team-content">
                                <h3 class="team-name">
                                    <a href="team-single.html">Pull Maradona</a>
                                </h3>
                                <span class="team-title">UI / UX Designer</span>
                                <div class="plus-team">
                                    <div class="social-cion">
                                        <a href="#"><i class="fa fa-facebook"></i></a>
                                        <a href="#"><i class="fa fa-instagram"></i></a>
                                        <a href="#"><i class="fa fa-twitter"></i></a>
                                        <a href="#"><i class="fa fa-linkedin"></i></a>
                                    </div>
                                    <i class="fa flaticon-cross"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Testimonials />

            <OurPartner />
    </>
  )
}

export default About