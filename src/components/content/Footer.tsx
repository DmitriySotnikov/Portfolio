import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__sector">
          <div className="footer__sector-title">
            <span className="footer__title-text">Dmitry Sotnikov</span>
          </div>
          <div className="footer__block-text">
            <span className="footer__text">Portfolio website</span>
          </div>
        </div>
        <div className="footer__sector">
          <div className="footer__sector-title">
            <span className="footer__title-text">EXPLORE</span>
          </div>
          <div className="footer__block-text">
            <span className="footer__text">Home</span>
          </div>
        </div>
        <div className="footer__sector">
          <div className="footer__sector-title">
            <span className="footer__title-text">FOLLOW</span>
          </div>
          <div className="footer__block-text">
            <span className="footer__text">Git</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer as React.FC;
