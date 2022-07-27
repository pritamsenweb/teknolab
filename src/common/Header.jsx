import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>  
    <div class="full-width-header">
       
        <header id="rs-header" class="rs-header">
            
            <div class="topbar-area style1 hidden-md">
                <div class="container">
                    <div class="row y-middle">
                        <div class="col-lg-8">
                            <ul class="topbar-contact">
                                 <li>
                                    <i class="flaticon-email"></i>
                                    <a href="mailto:support@rstheme.com">support@rstheme.com</a>
                                 </li>
                                 <li>
                                    <i class="flaticon-call"></i>
                                    <a href="tel:+1(990)9995554"> +1 (990) 999 5554</a>
                                 </li>
                                 <li>
                                    <i class="flaticon-location"></i>
                                    05 kandi BR. New York
                                 </li>
                            </ul>
                        </div>
                        <div class="col-lg-4 text-right">
                            <div class="toolbar-sl-share">
                                <ul>
                                     <li class="opening"> <em><i class="flaticon-clock"></i> 08:00am-6:00pm</em> </li>
                                     <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                     <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                     <li><a href="#"><i class="fa fa-pinterest-p"></i></a></li>
                                     <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            <div class="menu-area menu-sticky">
                <div class="container">
                    <div class="row-table">
                        <div class="col-cell header-logo">                                  
                            <div class="logo-area">
                                <Link to="/">
                                    <img class="normal-logo" src="assets/images/logo-dark.png" alt="logo" />  
                                    <img class="sticky-logo" src="assets/images/logo-dark.png" alt="logo" />
                                </Link>
                            </div>
                        </div>
                        <div class="col-cell">
                            <div class="rs-menu-area">
                                <div class="main-menu">
                                    <nav class="rs-menu hidden-md">
                                        <ul class="nav-menu">
                                            <li class="menu-item-has-children current-menu-item">
                                                <Link to="/">Home</Link>
                                                <ul class="sub-menu">
                                                    <li class="menu-item-has-children current-menu-item">
                                                        <a href="#">Multipages</a>
                                                        <ul class="sub-menu">
                                                            <li class="active"><a href="index.html">Home One</a></li>
                                                            <li><a href="index2.html">Home Two</a></li>
                                                            <li><a href="index3.html">Home Three</a></li>
                                                            <li><a href="index4.html">Home Four</a></li>
                                                            <li><a href="index5.html">Home Five</a></li>
                                                            <li><a href="index6.html">Home Six</a></li>
                                                        </ul> 
                                                    </li>
                                                    <li class="menu-item-has-children">
                                                        <a href="#">Onepages</a>
                                                        <ul class="sub-menu">
                                                            <li><a href="onepage1.html">Onepage One</a></li>
                                                            <li><a href="onepage2.html">Onepage Two</a></li>
                                                            <li><a href="onepage3.html">Onepage Three</a></li>
                                                            <li><a href="onepage4.html">Onepage Four</a></li>
                                                            <li><a href="onepage5.html">Onepage Five</a></li>
                                                            <li><a href="onepage6.html">Onepage Six</a></li>
                                                        </ul>  
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="menu-item-has-children">
                                                <Link to="/about">About Us</Link>
                                                <ul class="sub-menu">
                                                    <li><Link to="/about">About Us</Link></li>
                                                    <li><Link to="/about2">About Us Two</Link></li>
                                                </ul>
                                            </li>
                                            <li class="menu-item-has-children">
                                                <a href="#">Services</a>
                                                <ul class="sub-menu">
                                                    <li><Link to="/service1">Services 1</Link></li>
                                                    <li><Link to="/service2">Services 2</Link></li>
                                                    <li><Link to="/service3">Services 3</Link></li>
                                                    <li class="last-item menu-item-has-children">
                                                        <a href="#">Service Single</a>
                                                        <ul class="sub-menu">
                                                            <li><a href="software-development.html">Software Development</a></li>
                                                            <li><a href="web-development.html">Web Development</a> </li>
                                                            <li><a href="analytic-solutions.html">Analytic Solutions</a></li>
                                                            <li><a href="cloud-and-devops.html">Cloud and DevOps</a></li>
                                                            <li><a href="product-design.html">Product Design</a></li>
                                                            <li><a href="database-administration.html">Database Administration</a></li>
                                                        </ul>
                                                    </li>                                                         
                                                </ul>
                                            </li>
                                            <li class="menu-item-has-children">
                                                <a href="#">Pages</a>                                                        
                                                <ul class="sub-menu">                                                          
                                                    <li class="last-item menu-item-has-children">
                                                        <a href="#">Team</a>
                                                        <ul class="sub-menu">
                                                            <li><a href="team-style1.html">Team Style 1</a></li>
                                                            <li><a href="team-style2.html">Team Style 2</a></li>
                                                            <li><a href="team-style3.html">Team Style 3</a></li>
                                                            <li><a href="team-single.html">Team Single</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="menu-item-has-children">
                                                       <a href="#">Case Studies</a>
                                                        <ul class="sub-menu">
                                                           <li><a href="case-studies-style1.html">Case Studies Style 1</a></li>
                                                           <li><a href="case-studies-style2.html">Case Studies Style 2</a></li>
                                                           <li><a href="case-studies-style3.html">Case Studies Style 3</a></li>
                                                           <li><a href="case-studies-style4.html">Case Studies Style 4</a></li>
                                                           <li><a href="case-studies-style5.html">Case Studies Style 5</a></li>
                                                           <li><a href="case-studies-style6.html">Case Studies Style 6</a></li>
                                                           <li><a href="case-studies-style7.html">Case Studies Style 7</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="menu-item-has-children">
                                                        <a href="shop.html">Shop</a>
                                                        <ul class="sub-menu">
                                                            <li><a href="shop.html">Shop</a></li>
                                                            <li><a href="cart.html">Cart</a></li>
                                                            <li><a href="checkout.html">Checkout</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="faqs.html">Faqs</a></li>
                                                    <li><a href="pricing.html">Pricing</a></li>
                                                </ul>
                                            </li>
                                            <li><Link to="/blog">Blog</Link></li>
                                            <li><Link to="/contact">Contact</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div class="col-cell">
                            <div class="expand-btn-inner">
                                <ul>
                                    <li class="sidebarmenu-search">
                                        <a class="hidden-xs rs-search" data-bs-toggle="modal" data-bs-target="#searchModal" href="#">
                                            <i class="flaticon-search"></i>
                                        </a>
                                    </li>
                                    <li class="nav-link-container">
                                        <a id="nav-expander" class="nav-expander bar" href="#">
                                            <div class="bar">
                                                <span class="dot1"></span>
                                                <span class="dot2"></span>
                                                <span class="dot3"></span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <nav class="right_menu_togle menu-wrap-off  hidden-md">
                <div class="close-btn">
                    <a id="nav-close" class="nav-close">
                        <div class="line">
                            <span class="line1"></span>
                            <span class="line2"></span>
                        </div>
                    </a>
                </div>
                <div class="rs-offcanvas-inner">
                    <div class="canvas-logo">
                        <a href="index.html"><img src="assets/images/logo-dark.png" alt="logo" /></a>
                    </div>
                    <div class="offcanvas-text">
                        <p>Teknolab quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus, in porttitor theo lacus egestas etiusto odio data center.</p>
                    </div>
                    <div class="canvas-contact">
                        <div class="address-area">
                            <div class="address-list">
                                <div class="info-icon">
                                    <i class="flaticon-location"></i>
                                </div>
                                <div class="info-content">
                                    <h4 class="title">Address</h4>
                                    <em>05 kandi BR. New York</em>
                                </div>
                            </div>
                            <div class="address-list">
                                <div class="info-icon">
                                    <i class="flaticon-email"></i>
                                </div>
                                <div class="info-content">
                                    <h4 class="title">Email</h4>
                                    <em><a href="mailto:support@rstheme.com">support@rstheme.com</a></em>
                                </div>
                             </div>
                            <div class="address-list">
                                <div class="info-icon">
                                  <i class="flaticon-call"></i>
                                </div>
                                <div class="info-content">
                                  <h4 class="title">Phone</h4>
                                  <em>+019988772</em>
                                </div>
                            </div>
                        </div>
                        <ul class="social">
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa fa-pinterest-p"></i></a></li>
                            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            
            <nav class="right_menu_togle mobile-navbar-menu" id="mobile-navbar-menu">
                <div class="close-btn">
                    <a id="nav-close2" class="nav-close">
                        <div class="line">
                            <span class="line1"></span>
                            <span class="line2"></span>
                        </div>
                    </a>
                </div>
                <ul class="nav-menu">
                    <li class="menu-item-has-children current-menu-item">
                        <a href="index.html">Home</a>
                        <ul class="sub-menu">
                            <li class="menu-item-has-children current-menu-item">
                                <a href="#">Multipages</a>
                                <ul class="sub-menu">
                                    <li class="active"><a href="index.html">Home One</a></li>
                                    <li><a href="index2.html">Home Two</a></li>
                                    <li><a href="index3.html">Home Three</a></li>
                                    <li><a href="index4.html">Home Four</a></li>
                                    <li><a href="index5.html">Home Five</a></li>
                                    <li><a href="index6.html">Home Six</a></li>
                                </ul> 
                            </li>
                            <li class="menu-item-has-children">
                                <a href="#">Onepages</a>
                                <ul class="sub-menu">
                                    <li><a href="onepage1.html">Onepage One</a></li>
                                    <li><a href="onepage2.html">Onepage Two</a></li>
                                    <li><a href="onepage3.html">Onepage Three</a></li>
                                    <li><a href="onepage4.html">Onepage Four</a></li>
                                    <li><a href="onepage5.html">Onepage Five</a></li>
                                    <li><a href="onepage6.html">Onepage Six</a></li>
                                </ul>  
                            </li>
                        </ul>
                    </li>
                    <li class="menu-item-has-children">
                        <a href="#">About Us</a>
                        <ul class="sub-menu">
                            <li><a href="about-us.html">About Us</a> </li>
                            <li><a href="about-us-two.html">About Us Two</a> </li>
                        </ul>
                    </li>
                    <li class="menu-item-has-children">
                        <a href="#">Services</a>
                        <ul class="sub-menu">
                            <li><a href="services1.html">Services 1</a></li>
                            <li><a href="services2.html">Services 2</a></li>
                            <li><a href="services3.html">Services 3</a></li>
                            <li class="last-item menu-item-has-children">
                                <a href="#">Service Single</a>
                                <ul class="sub-menu">
                                    <li><a href="software-development.html">Software Development</a></li>
                                    <li><a href="web-development.html">Web Development</a> </li>
                                    <li><a href="analytic-solutions.html">Analytic Solutions</a></li>
                                    <li><a href="cloud-and-devops.html">Cloud and DevOps</a></li>
                                    <li><a href="product-design.html">Product Design</a></li>
                                    <li><a href="database-administration.html">Database Administration</a></li>
                                </ul>
                            </li>                                                         
                        </ul>
                    </li>
                    <li class="menu-item-has-children">
                        <a href="#">Pages</a>                                                        
                        <ul class="sub-menu">                                                          
                            <li class="last-item menu-item-has-children">
                                <a href="#">Team</a>
                                <ul class="sub-menu">
                                    <li><a href="team-style1.html">Team Style 1</a></li>
                                    <li><a href="team-style2.html">Team Style 2</a></li>
                                    <li><a href="team-style3.html">Team Style 3</a></li>
                                    <li><a href="team-single.html">Team Single</a></li>
                                </ul>
                            </li>
                            <li class="menu-item-has-children">
                               <a href="#">Case Studies</a>
                                <ul class="sub-menu">
                                   <li><a href="case-studies-style1.html">Case Studies Style 1</a></li>
                                   <li><a href="case-studies-style2.html">Case Studies Style 2</a></li>
                                   <li><a href="case-studies-style3.html">Case Studies Style 3</a></li>
                                   <li><a href="case-studies-style4.html">Case Studies Style 4</a></li>
                                   <li><a href="case-studies-style5.html">Case Studies Style 5</a></li>
                                   <li><a href="case-studies-style6.html">Case Studies Style 6</a></li>
                                   <li><a href="case-studies-style7.html">Case Studies Style 7</a></li>
                                </ul>
                            </li>
                            <li class="menu-item-has-children">
                                <a href="shop.html">Shop</a>
                                <ul class="sub-menu">
                                    <li><a href="shop.html">Shop</a></li>
                                    <li><a href="cart.html">Cart</a></li>
                                    <li><a href="checkout.html">Checkout</a></li>
                                </ul>
                            </li>
                            <li><a href="faqs.html">Faqs</a></li>
                            <li><a href="pricing.html">Pricing</a></li>
                        </ul>
                    </li>
                    <li class="menu-item-has-children">
                        <a href="#">Blog</a>
                        <ul class="sub-menu">
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="blog-single.html">Blog Single</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="contact.html">Contact</a>
                    </li>
                </ul>
                  
                <div class="canvas-contact">
                      <div class="address-area">
                          <div class="address-list">
                              <div class="info-icon">
                                  <i class="flaticon-location"></i>
                              </div>
                              <div class="info-content">
                                  <h4 class="title">Address</h4>
                                  <em>05 kandi BR. New York</em>
                              </div>
                          </div>
                          <div class="address-list">
                              <div class="info-icon">
                                  <i class="flaticon-email"></i>
                              </div>
                              <div class="info-content">
                                  <h4 class="title">Email</h4>
                                  <em><a href="mailto:support@rstheme.com">support@rstheme.com</a></em>
                              </div>
                          </div>
                          <div class="address-list">
                              <div class="info-icon">
                                  <i class="flaticon-call"></i>
                              </div>
                              <div class="info-content">
                                  <h4 class="title">Phone</h4>
                                  <em>+019988772</em>
                              </div>
                          </div>
                      </div>
                </div>
            </nav>
                                  
        </header>
       
    </div>
    </>
  )
}

export default Header