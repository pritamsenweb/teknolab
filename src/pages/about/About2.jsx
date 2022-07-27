import React from 'react';
import { Breadcrumbs, OurPartner, Testimonials } from '../../component';


function About2() {
    return (
        <>
            <Breadcrumbs pageTitle="About Us Two" pageDesc="Excepteur sint occaecat cupidatat non proident, sunt in coulpa qui official
modeserunt mollit anim id est laborum 20 years experience."/>

            <div id="rs-about" class="rs-about style1 pt-130 pb-130 md-pt-80 md-pb-80">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-12">
                            <div class="sec-title mb-40">
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
                        <div class="col-lg-6">
                            <div class="about-images">
                                <img class="js-tilt" src="assets/images/about/about-2.jpg" alt="images" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="rs-contact style1 about-style2 bg4 pt-130 pb-130 md-pt-80 md-pb-80">
                <div class="container">
                    <div class="contact-section">
                        <div class="sec-title mb-35">
                            <h2 class="title">
                                Need any <span>help!</span> contact us
                            </h2>
                        </div>
                        <div class="addrerss-box">
                            <div class="row">
                                <div class="col-lg-6 md-mb-30">
                                   <div class="address-item">
                                       <div class="address-icon">
                                           <img src="assets/images/contact/home2/1.png" alt="Images" />
                                       </div>
                                       <div class="address-text">
                                           <span class="title">Call 24/7</span>
                                           <a href="tel:+(+088)589-8745">(+088)589-8745</a>
                                       </div>
                                   </div> 
                                </div>
                                <div class="col-lg-6">
                                   <div class="address-item">
                                       <div class="address-icon">
                                           <img src="assets/images/contact/home2/2.png" alt="Images" />
                                       </div>
                                       <div class="address-text">
                                           <span class="title">Email us</span>
                                           <a href="mailto:info@yourdomain.com">info@yourdomain.com</a>
                                       </div>
                                   </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="rs-animation">
                    <div class="dotted">
                        <img src="assets/images/contact/dotted.png" alt="Contact" />
                    </div>
                </div>
            </div>

            <div id="rs-whychooseus" class="rs-whychooseus style1">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-12 md-mb-50">
                           <div class="choose-images">
                               <img class="js-tilt" src="assets/images/choose/image.jpg" alt="images" />
                           </div>
                        </div>
                        <div class="col-lg-6 col-md-12 padding-0">
                            <div class="sec-title mb-40">
                                <span class="sub-upper pb-13">[ <span class="sub-title">Our Specialty</span> ] </span>
                                <h2 class="title pb-26">
                                    Improve and Innovate The <span>Tecnolab</span> Trends
                                </h2>
                                <div class="desc">
                                    Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasured.
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
                               </div>
                            </div>
                          
                        </div>
                    </div>
                </div>
                <div class="rs-animation">
                    <div class="animate left-side">
                        <img src="assets/images/choose/icons/2.png" alt="Images" />
                    </div>
                    <div class="animate right-side">
                        <img src="assets/images/choose/icons/1.png" alt="Images" />
                    </div>
                </div>
            </div>

            <Testimonials />
            <OurPartner />
            
        </>
    )
}

export default About2