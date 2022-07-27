import React from 'react';

function Footer() {
  return (
    <> 
        <footer id="rs-footer" class="rs-footer footer-style1">
            <div class="footer-top">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-12 col-sm-12 footer-widget">
                            <div class="footer-logo mb-30">
                                <a href="index.html"><img src="assets/images/logo-lite.png" alt="" /></a>
                            </div>
                                <p class="widget-desc pb-30">Lorem ipsum dolor sit amet, conse turini adipiscing elit. Sed vel aliquet sem. In dignissim eget odio ac luctus semper sagittis et.</p>
                              <ul class="footer-social md-mb-30">  
                                  <li> 
                                      <a href="#" target="_blank"><span><i class="fa fa-facebook"></i></span></a> 
                                  </li>
                                  <li> 
                                      <a href="# " target="_blank"><span><i class="fa fa-twitter"></i></span></a> 
                                  </li>

                                  <li> 
                                      <a href="# " target="_blank"><span><i class="fa fa-pinterest-p"></i></span></a> 
                                  </li>
                                  <li> 
                                      <a href="# " target="_blank"><span><i class="fa fa-instagram"></i></span></a> 
                                  </li>
                                                                           
                              </ul>
                        </div>
                        <div class="col-lg-3 col-md-12 col-sm-12 md-mb-30">
                            <h3 class="widget-title">Contact Info</h3>
                            <ul class="address-widget">
                                <li>
                                    <i class="flaticon-location"></i>
                                    <div class="desc">503 Old Buffalo Street #205 New York-3087</div>
                                </li>
                                <li>
                                    <i class="flaticon-call"></i>
                                    <div class="desc">
                                       <a href="tel:(+880)155-69569">(+880)155-69569</a>
                                    </div>
                                </li>
                                <li>
                                    <i class="flaticon-email"></i>
                                    <div class="desc">
                                        <a href="mailto:support@rstheme.com">support@rstheme.com</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="col-lg-3 col-md-12 col-sm-12 md-mb-30">
                            <h3 class="widget-title">Featured Services</h3>
                            <ul class="site-map">
                                <li><a href="#">Digital Marketing</a></li>
                                <li><a href="#">Web Analytics</a></li>
                                <li><a href="#">Market Analysis</a></li>
                                <li><a href="#">Link Building</a></li>
                                <li><a href="#">Content Marketing</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-3 col-md-12 col-sm-12">
                            <h3 class="widget-title">Get in Touch</h3>
                            <p>
                                <input type="email" name="email" placeholder="Email" required="" />
                                <input type="submit" value="Subscribe Now" />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="container">                    
                    <div class="row y-middle">
                        <div class="col-lg-6 md-mb-10 text-lg-end text-center order-last">
                            <ul class="copy-right-menu">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="about-us.html">About Us</a></li>
                                <li><a href="services.html">Services</a></li>
                                <li><a href="#">Pages</a></li>
                                <li><a href="blog.html">Blog</a></li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-6">
                            <div class="copyright text-lg-start text-center">
                                <p>Copyright © 2022 Teknolab. Designed By <a href="https://www.iknowledgesolution.com/" target="blank"> Iknowledge Solution</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        
    </>
  )
}

export default Footer