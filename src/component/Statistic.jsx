import React from 'react'

const Statistic = ( { number, stTitle}) => {
    return (
        <>
            <div class="col-lg-4 md-mb-30">
                <div class="counter-list">
                    <div class="counter-text">
                        <div class="count-number">
                            <span class="rs-count k">{number}</span>
                        </div>
                        <h3 class="title">{stTitle}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Statistic