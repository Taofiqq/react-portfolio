import React from 'react'
import './intro.scss'

const Intro = () => {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                <img src="resource/about.png" alt="background img"/>
                </div>
            </div>

            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I am</h2>
                    <h1>Taofiq Aiyelabegan</h1>
                    <h3>Front End Developer <span>I develops the user interface of the website and applications.</span> </h3>
                </div>
                <a href="#portfolio">
                    <img src="resource/down.png" alt="arrow down img"/>
                </a>
            </div>
        </div>
    )
}

export default Intro;
