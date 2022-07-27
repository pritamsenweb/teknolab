import React from 'react';
import { Banner, Skill, Services, Statistic, Workprocess } from '../../component';

function Home() {
  return (
    <>
      <Banner />
      <div id="rs-about" class="rs-about style1 pt-130 pb-130 md-pt-80 md-pb-60">
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
              <div class="sec-title mb-40 md-mb-25">
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
                  <Skill title="Analytics" scrore="95" />
                  <Skill title="Development" scrore="75" />
                  <Skill title="Solutions" scrore="85" />
                  <Skill title="Support & Security" scrore="90" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div class="rs-services main-home gray-bg pt-125 pb-130 md-pt-75 md-pb-80">
        <div class="container">
          <div class="sec-title text-center mb-55 md-mb-35">
            <span class="sub-text pb-10">// Our Services</span>
            <h2 class="title">
              We Provide Truly Prominent<br /> <span>Technology</span> Solutions
            </h2>
          </div>
          <div class="row">
            <Services mImg="assets/images/services/main-home/main-img/1.png" hImg="assets/images/services/main-home/hover-img/1.png" servicetitle="Software Development" servicedesc="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio  data center for managing database." />
            <Services mImg="assets/images/services/main-home/main-img/2.png" hImg="assets/images/services/main-home/hover-img/2.png" servicetitle="Web Development" servicedesc="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio  data center for managing database." />
            <Services mImg="assets/images/services/main-home/main-img/3.png" hImg="assets/images/services/main-home/hover-img/3.png" servicetitle="Analytic Solutions" servicedesc="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio  data center for managing database." />
            <Services mImg="assets/images/services/main-home/main-img/4.png" hImg="assets/images/services/main-home/hover-img/4.png" servicetitle="Clould & DevOps" servicedesc="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio  data center for managing database." />
            <Services mImg="assets/images/services/main-home/main-img/5.png" hImg="assets/images/services/main-home/hover-img/5.png" servicetitle="Product & Design" servicedesc="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio  data center for managing database." />
            <Services mImg="assets/images/services/main-home/main-img/6.png" hImg="assets/images/services/main-home/hover-img/6.png" servicetitle="Database Administrator" servicedesc="At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio  data center for managing database." />
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
                  <p class="desc desc2 white-color">Have any idea or project for in your mind call us or schedule a <br /> appointment. Our representative will reply you shortly.</p>
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
              <Statistic number="45" stTitle="Products Done" />
              <Statistic number="10" stTitle="Happy Clients" />
              <Statistic number="25" stTitle="Companies" />
            </div>
          </div>
        </div>
      </div>

      <div class="rs-process style1 pt-216 pb-125  md-pb-75">
        <div class="container">
          <div class="sec-title text-center mb-55">
            <span class="sub-text pb-10">// Working Process</span>
            <h2 class="title">
              How We Work For Our <br /> <span>Customers</span>
            </h2>
          </div>
          <div class="addon-service-main">
            <div class="row no-gutters">
              <Workprocess wNumber="01" wTitle="Discovery" wDesc="Quisque placerat vitae lacus ut sceler isque. Fusce luctus odio acnibh luctus in porttitor theo lacus egestas." />
              <Workprocess wNumber="02" wTitle="Planning" wDesc="Quisque placerat vitae lacus ut sceler isque. Fusce luctus odio acnibh luctus in porttitor theo lacus egestas." />
              <Workprocess wNumber="03" wTitle="Execute" wDesc="Quisque placerat vitae lacus ut sceler isque. Fusce luctus odio acnibh luctus in porttitor theo lacus egestas." />
              <Workprocess wNumber="04" wTitle="Delivery" wDesc="Quisque placerat vitae lacus ut sceler isque. Fusce luctus odio acnibh luctus in porttitor theo lacus egestas." />

            </div>
          </div>
        </div>
      </div>

      <div class="rs-pricing pricing-style1 pt-125 pb-130 md-pt-75 md-pb-80">
        <div class="container">
          <div class="sec-title mb-75 md-mb-45 text-center">
            <span class="sub-text pb-10">// Pricing</span>
            <h2 class="title">
              Our Pricing Plan
            </h2>
          </div>
          <div class="row">
            <div class="col-lg-4 md-mb-50">
              <div class="pricing-table">
                <div class="pricing-badge">
                  Silver
                </div>
                <div class="pricing-icon">
                  <img src="assets/images/pricing/main-home/icons/1.png" alt="" />
                </div>
                <div class="pricing-table-price">
                  <div class="pricing-table-bags">
                    <span class="pricing-currency">$</span>
                    <span class="table-price-text">29.99</span>
                    <span class="table-period">Monthly Package</span>
                  </div>
                </div>
                <div class="pricing-table-body">
                  <ul>
                    <li><i class="fa fa-check"></i><span>Powerful Admin Panel</span></li>
                    <li><i class="fa fa-check"></i><span>1 Native Android App</span></li>
                    <li><i class="fa fa-close"></i><span>Multi-Language Support</span></li>
                    <li><i class="fa fa-check"></i><span>Support via E-mail and Phone</span></li>
                  </ul>
                </div>
                <div class="btn-part">
                  <a class="readon buy-now" href="contact.html">Buy Now</a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 md-mb-50 mt--20">
              <div class="pricing-table">
                <div class="pricing-badge">
                  Gold
                </div>
                <div class="pricing-icon">
                  <img src="assets/images/pricing/main-home/icons/2.png" alt="" />
                </div>
                <div class="pricing-table-price">
                  <div class="pricing-table-bags">
                    <span class="pricing-currency">$</span>
                    <span class="table-price-text">39.99</span>
                    <span class="table-period">Monthly Package</span>
                  </div>
                </div>
                <div class="pricing-table-body">
                  <ul>
                    <li><i class="fa fa-check"></i><span>Powerful Admin Panel</span></li>
                    <li><i class="fa fa-check"></i><span>2 Native Android App</span></li>
                    <li><i class="fa fa-check"></i><span>Unlimited User Access</span></li>
                    <li><i class="fa fa-check"></i><span>Multi-Language Support</span></li>
                    <li><i class="fa fa-check"></i><span>Support via E-mail and Phone</span></li>
                  </ul>
                </div>
                <div class="btn-part">
                  <a class="readon buy-now" href="contact.html">Buy Now</a>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="pricing-table">
                <div class="pricing-badge">
                  Platinum
                </div>
                <div class="pricing-icon">
                  <img src="assets/images/pricing/main-home/icons/3.png" alt="" />
                </div>
                <div class="pricing-table-price">
                  <div class="pricing-table-bags">
                    <span class="pricing-currency">$</span>
                    <span class="table-price-text">79.99</span>
                    <span class="table-period">Monthly Package</span>
                  </div>
                </div>
                <div class="pricing-table-body">
                  <ul>
                    <li><i class="fa fa-check"></i><span>Powerful Admin Panel</span></li>
                    <li><i class="fa fa-check"></i><span>3 Native Android App</span></li>
                    <li><i class="fa fa-check"></i><span>Multi-Language Support</span></li>
                    <li><i class="fa fa-check"></i><span>Support via E-mail and Phone</span></li>
                  </ul>
                </div>
                <div class="btn-part">
                  <a class="readon buy-now" href="contact.html">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
            <div class="rs-project bg2">
                <div class="container">
                    <div class="row y-middle">
                        <div class="col-lg-6">
                            <div class="sec-title">
                                <span class="sub-text pb-10 white-color">// Portfolio</span>
                                <h2 class="title white-color">
                                    Our Recent <span>Projects</span>
                                </h2>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="sec-title">
                               <p class="desc white-color">We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
           

      <div class="rs-testimonial testimonial-style1 bg3 pt-125 pb-130 md-pt-75 md-pb-80">
        <div class="container">
          <div class="row y-middle">
            <div class="col-lg-5">
              <div class="sec-title mb-50 md-mb-30">
                <span class="sub-text pb-10">// Testimonial</span>
                <h2 class="title">
                  Our Clients <span>Feedback</span>
                </h2>
              </div>
            </div>
            <div class="col-lg-7">
              <div class="sec-title mb-28">
                <p class="desc">We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.</p>
              </div>
            </div>
          </div>
          <div class="rs-carousel owl-carousel" data-loop="true" data-items="3" data-margin="30" data-autoplay="true" data-hoverpause="true" data-autoplay-timeout="5000" data-smart-speed="800" data-dots="true" data-nav="false" data-nav-speed="false" data-md-device="3" data-md-device-nav="false" data-md-device-dots="false" data-center-mode="true" data-ipad-device2="2" data-ipad-device-nav2="false" data-ipad-device-dots2="false" data-ipad-device="2" data-ipad-device-nav="false" data-ipad-device-dots="false" data-mobile-device="1" data-mobile-device-nav="false" data-mobile-device-dots="false">
            <div class="testi-item">
              <div class="item-content">
                <div class="desc"><img class="quote" src="assets/images/testimonial/main-home/quote.png" alt="" />Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.</div>
              </div>
              <div class="testi-content">
                <div class="image-wrap">
                  <img src="assets/images/testimonial/main-home/1.jpg" alt="" />
                </div>
                <div class="testi-information">
                  <div class="testi-name">Abdur Rashid</div>
                  <span class="designation">CEO, Brick Consulting</span>
                </div>
              </div>
            </div>
            <div class="testi-item">
              <div class="item-content">
                <div class="desc"><img class="quote" src="assets/images/testimonial/main-home/quote.png" alt="" />Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.</div>
              </div>
              <div class="testi-content">
                <div class="image-wrap">
                  <img src="assets/images/testimonial/main-home/2.jpg" alt="" />
                </div>
                <div class="testi-information">
                  <div class="testi-name">Mariya Khan</div>
                  <span class="designation">App Developer</span>
                </div>
              </div>
            </div>
            <div class="testi-item">
              <div class="item-content">
                <div class="desc"><img class="quote" src="assets/images/testimonial/main-home/quote.png" alt="" />Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.</div>
              </div>
              <div class="testi-content">
                <div class="image-wrap">
                  <img src="assets/images/testimonial/main-home/3.jpg" alt="" />
                </div>
                <div class="testi-information">
                  <div class="testi-name">Betty Wilson</div>
                  <span class="designation">Manager</span>
                </div>
              </div>
            </div>
            <div class="testi-item">
              <div class="item-content">
                <div class="desc"><img class="quote" src="assets/images/testimonial/main-home/quote.png" alt="" />Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.</div>
              </div>
              <div class="testi-content">
                <div class="image-wrap">
                  <img src="assets/images/testimonial/main-home/4.jpg" alt="" />
                </div>
                <div class="testi-information">
                  <div class="testi-name">Melania Trump</div>
                  <span class="designation">Vice Principal</span>
                </div>
              </div>
            </div>
            <div class="testi-item">
              <div class="item-content">
                <div class="desc"><img class="quote" src="assets/images/testimonial/main-home/quote.png" alt="" />Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.</div>
              </div>
              <div class="testi-content">
                <div class="image-wrap">
                  <img src="assets/images/testimonial/main-home/5.jpg" alt="" />
                </div>
                <div class="testi-information">
                  <div class="testi-name">Melania Trump</div>
                  <span class="designation">Assistant Director</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="rs-blog" class="rs-blog blog-home-style1 pt-125 pb-130 md-pt-75 md-pb-80">
                <div class="container">
                    <div class="sec-title mb-60 md-mb-40 text-center">
                        <span class="sub-text pb-10">// Blog</span>
                        <h2 class="title">
                            Our Latest News
                        </h2>
                    </div> 
                    <div class="rs-carousel owl-carousel" data-loop="true" data-items="3" data-margin="30" data-autoplay="true" data-hoverpause="true" data-autoplay-timeout="7000" data-smart-speed="1200" data-dots="false" data-nav="false" data-nav-speed="false" data-center-mode="false" data-mobile-device="1" data-mobile-device-nav="false" data-mobile-device-dots="false" data-ipad-device="2" data-ipad-device-nav="false" data-ipad-device-dots="false" data-ipad-device2="2" data-ipad-device-nav2="false" data-ipad-device-dots2="false" data-md-device="3" data-md-device-nav="false" data-md-device-dots="false">
                        <div class="blog-item">
                            <div class="image-wrap">
                                <a href="blog-single.html"><img src="assets/images/blog/main-home/1.jpg" alt="" /></a>
                                <ul class="post-categories">
                                    <li><a href="blog-single.html">Application Testing</a></li>
                                </ul>
                            </div>
                            <div class="blog-content">
                               <h3 class="blog-title"><a href="blog-single.html">Open Source Job Show More Openings Fewer</a></h3>
                               <p class="desc">We denounce with righteous indige nation and dislike men who are so beguiled and demo realized...</p>
                               <ul class="blog-meta">
                                   <li class="date"><i class="fa fa-calendar-check-o"></i> 21 Nov 2021</li>
                                   <li class="admin"><i class="fa fa-user-o"></i> admin</li>
                               </ul>
                            </div>
                        </div>
                        <div class="blog-item">
                            <div class="image-wrap">
                                <a href="blog-single.html"><img src="assets/images/blog/main-home/2.jpg" alt="" /></a>
                                <ul class="post-categories">
                                    <li><a href="blog-single.html">Application Testing</a></li>
                                </ul>
                            </div>
                            <div class="blog-content">
                               <h3 class="blog-title"><a href="blog-single.html">Tech Products That Makes Its Easier to Stay at Home</a></h3>
                               <p class="desc">We denounce with righteous indige nation and dislike men who are so beguiled and demo realized...</p>
                               <ul class="blog-meta">
                                   <li class="date"><i class="fa fa-calendar-check-o"></i> 21 Nov 2021</li>
                                   <li class="admin"><i class="fa fa-user-o"></i> admin</li>
                               </ul>
                            </div>
                        </div>
                        <div class="blog-item">
                            <div class="image-wrap">
                                <a href="blog-single.html"><img src="assets/images/blog/main-home/3.jpg" alt="" /></a>
                                <ul class="post-categories">
                                    <li><a href="blog-single.html">Application Testing</a></li>
                                </ul>
                            </div>
                            <div class="blog-content">
                               <h3 class="blog-title"><a href="blog-single.html">Necessity May Give Us Your Best Virtual Court System</a></h3>
                               <p class="desc">We denounce with righteous indige nation and dislike men who are so beguiled and demo realized...</p>
                               <ul class="blog-meta">
                                   <li class="date"><i class="fa fa-calendar-check-o"></i> 16 Nov 2020</li>
                                   <li class="admin"><i class="fa fa-user-o"></i> admin</li>
                               </ul>
                            </div>
                        </div>
                        <div class="blog-item">
                            <div class="image-wrap">
                                <a href="blog-single.html"><img src="assets/images/blog/main-home/4.jpg" alt="" /></a>
                                <ul class="post-categories">
                                    <li><a href="blog-single.html">Application Testing</a></li>
                                </ul>
                            </div>
                            <div class="blog-content">
                               <h3 class="blog-title"><a href="blog-single.html">Servo Project Joins The Linux Foundation Fold</a></h3>
                               <p class="desc">We denounce with righteous indige nation and dislike men who are so beguiled and demo realized...</p>
                               <ul class="blog-meta">
                                   <li class="date"><i class="fa fa-calendar-check-o"></i> 21 Nov 2021</li>
                                   <li class="admin"><i class="fa fa-user-o"></i> admin</li>
                               </ul>
                            </div>
                        </div>
                        <div class="blog-item">
                            <div class="image-wrap">
                                <a href="blog-single.html"><img src="assets/images/blog/main-home/5.jpg" alt="" /></a>
                                <ul class="post-categories">
                                    <li><a href="blog-single.html">IT Services</a></li>
                                </ul>
                            </div>
                            <div class="blog-content">
                               <h3 class="blog-title"><a href="blog-single.html">Servo Project Joins The Linux Foundation Fold</a></h3>
                               <p class="desc">We denounce with righteous indige nation and dislike men who are so beguiled and demo realized...</p>
                               <ul class="blog-meta">
                                   <li class="date"><i class="fa fa-calendar-check-o"></i> 21 Nov 2021</li>
                                   <li class="admin"><i class="fa fa-user-o"></i> admin</li>
                               </ul>
                            </div>
                        </div>
                        <div class="blog-item">
                            <div class="image-wrap">
                                <a href="blog-single.html"><img src="assets/images/blog/main-home/6.jpg" alt="" /></a>
                                <ul class="post-categories">
                                    <li><a href="blog-single.html">Software Development</a></li>
                                </ul>
                            </div>
                            <div class="blog-content">
                               <h3 class="blog-title"><a href="blog-single.html">Necessity May Give Us Your Best Virtual Court System</a></h3>
                               <p class="desc">We denounce with righteous indige nation and dislike men who are so beguiled and demo realized...</p>
                               <ul class="blog-meta">
                                   <li class="date"><i class="fa fa-calendar-check-o"></i> 21 Nov 2021</li>
                                   <li class="admin"><i class="fa fa-user-o"></i> admin</li>
                               </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



      <div class="rs-partner-section partner-style1 pt-65 pb-65">
        <div class="container">
          <div class="rs-carousel owl-carousel"
            data-loop="true"
            data-items="5"
            data-margin="30"
            data-autoplay="true"
            data-hoverpause="true"
            data-autoplay-timeout="4000"
            data-smart-speed="700"
            data-dots="false"
            data-nav="false"
            data-nav-speed="false"

            data-md-device="5"
            data-md-device-nav="false"
            data-md-device-dots="false"
            data-center-mode="false"

            data-ipad-device2="3"
            data-ipad-device-nav2="false"
            data-ipad-device-dots2="false"

            data-ipad-device="3"
            data-ipad-device-nav="false"
            data-ipad-device-dots="false"

            data-mobile-device="2"
            data-mobile-device-nav="false"
            data-mobile-device-dots="false">
            <div class="logo-img">
              <a href="https://rstheme.com/">
                <img class="hovers-logos rs-grid-img" src="assets/images/partner/main-home/1.png" title="" alt="" />
                  <img class="mains-logos rs-grid-img " src="assets/images/partner/main-home/1.png" title="" alt="" />
                  </a>
                </div>
                <div class="logo-img">
                  <a href="https://rstheme.com/">
                    <img class="hovers-logos rs-grid-img" src="assets/images/partner/main-home/2.png" title="" alt="" />
                      <img class="mains-logos rs-grid-img " src="assets/images/partner/main-home/2.png" title="" alt="" />
                      </a>
                    </div>
                    <div class="logo-img">
                      <a href="https://rstheme.com/">
                        <img class="hovers-logos rs-grid-img" src="assets/images/partner/main-home/3.png" title="" alt="" />
                          <img class="mains-logos rs-grid-img " src="assets/images/partner/main-home/3.png" title="" alt="" />
                          </a>
                        </div>
                        <div class="logo-img">
                          <a href="https://rstheme.com/">
                            <img class="hovers-logos rs-grid-img" src="assets/images/partner/main-home/4.png" title="" alt="" />
                              <img class="mains-logos rs-grid-img " src="assets/images/partner/main-home/4.png" title="" alt="" />
                              </a>
                            </div>
                            <div class="logo-img">
                              <a href="https://rstheme.com/">
                                <img class="hovers-logos rs-grid-img" src="assets/images/partner/main-home/5.png" title="" alt="" />
                                  <img class="mains-logos rs-grid-img " src="assets/images/partner/main-home/5.png" title="" alt="" />
                                  </a>
                                </div>
                                <div class="logo-img">
                                  <a href="https://rstheme.com/">
                                    <img class="hovers-logos rs-grid-img" src="assets/images/partner/main-home/6.png" title="" alt="" />
                                      <img class="mains-logos rs-grid-img " src="assets/images/partner/main-home/6.png" title="" alt="" />
                                      </a>
                                    </div>
                                    <div class="logo-img">
                                      <a href="https://rstheme.com/">
                                        <img class="hovers-logos rs-grid-img" src="assets/images/partner/main-home/7.png" title="" alt="" />
                                          <img class="mains-logos rs-grid-img " src="assets/images/partner/main-home/7.png" title="" alt="" />
                                          </a>
                                        </div>
                                        <div class="logo-img">
                                          <a href="https://rstheme.com/">
                                            <img class="hovers-logos rs-grid-img" src="assets/images/partner/main-home/8.png" title="" alt="" />
                                              <img class="mains-logos rs-grid-img " src="assets/images/partner/main-home/8.png" title="" alt="" />
                                              </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                              </>
                              )
}

                              export default Home