import React from 'react'

const Workprocess = ({ wNumber, wTitle, wDesc}) => {
    return (
        <>
            <div class="col-lg-3 col-md-6 md-mb-50">
                <div class="rs-addon-services">
                    <div class="addon-wrap">
                        <div class="number-text pt-100 md-pt-60">
                            <div class="number-area">{wNumber}</div>
                            <div class="content-txt">
                                <h3 class="number-title">{wTitle}</h3>
                                <p class="number-txt">{wDesc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Workprocess