import React from 'react'

const Breadcrumbs = ({ pageTitle, pageDesc}) => {
    return (
        <>
            <div class="rs-breadcrumbs img1">
                <div class="container">
                    <div class="breadcrumbs-inner">
                        <h1 class="page-title">{pageTitle}</h1>
                        <div class="description">
                            <p>{pageDesc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Breadcrumbs