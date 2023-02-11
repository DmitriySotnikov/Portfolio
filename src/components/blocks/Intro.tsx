import React, { FC } from "react";

function Intro() {
  return ( 
    <div className="intro">
        <div className="intro__title">
            <span className="intro__title-text">Hello! I am</span>
        </div>
        <div className="intro__inner">
            <span className="intro__author-name-text">Dmitry Sotnikov</span>
        </div>
    </div>
    );
}

export default Intro as FC;
