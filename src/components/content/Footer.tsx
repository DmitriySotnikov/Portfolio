import React from "react";
import { NavLink } from "react-router-dom";
import Items from "../../constans/slider-menu-items";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__sector">
          <div className="footer__sector-title">
            <span className="footer__title-text">Portfolio website</span>
          </div>
          <div className="footer__block-text">
            <span className="footer__text">Dmitry Sotnikov</span>
          </div>
        </div>
        <div className="footer__sector">
          <div className="footer__sector-title">
            <span className="footer__title-text">EXPLORE</span>
          </div>
          {
            Items.map((el) => (
              <div className="footer__block-link" key={el.id}>
            <NavLink className="footer__link" to={el.link}>{el.name}</NavLink>
          </div>
            ))
          }
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
