import React from 'react';

const Services = ( { mImg, hImg, servicetitle, servicedesc }) => {
    return (
        <>
            <div class="col-lg-4 col-md-6 mb-20">
                <div class="services-item">
                    <div class="services-icon">
                        <div class="image-part">
                            <img class="main-img" src={mImg} alt="" />
                            <img class="hover-img" src={hImg} alt="" />
                        </div>
                    </div>
                    <div class="services-content">
                        <div class="services-text">
                            <h3 class="title"><a href="software-development.html">{servicetitle}</a></h3>
                        </div>
                        <div class="services-desc">
                            <p>{servicedesc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services
