import React from 'react';

function Hero(){
    return (
        <article className="hero">
            <hr className="horizon" />
            <p>small change <span className="turn-text">turns</span> <span>into big change!</span> </p>

            <div className='btn-div'>
                <button className="btn btn-hero">play video</button>
            </div>
            <hr className="horizon-bottom" />
        </article>
    )
}

export default Hero;