import React from 'react';

const Skill = ( { title, scrore }) => {
    return (
        <>
            <span class="skillbar-title">{title}</span>
            <div class="skillbar" data-percent={scrore}>
                <p class="skillbar-bar"></p>
                <span class="skill-bar-percent"></span>
            </div>

        </>
    )
}

export default Skill