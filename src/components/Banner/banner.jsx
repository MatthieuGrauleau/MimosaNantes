import React from "react";
import logo from "../../assets/img/logo.png";
import menupdf from "../../assets/img/menu.jpg";

function Banner() {
  return (
    <section className='banner'>
      <div className="overlay">
        <img src={logo} alt="" />
        <a href={menupdf} className="button" target="_blank" rel="noopener noreferrer">Notre carte</a>
      </div>
    </section>
  );
}

export default Banner;
