import React from "react";
import logo from "../../assets/img/logo.png";

function Banner() {
  return (
    <section className='banner'>
      <div className="overlay">
        <img src={logo} alt="" />
        <a href="#carte" className="button">Notre carte</a>
      </div>
    </section>
  );
}

export default Banner;
