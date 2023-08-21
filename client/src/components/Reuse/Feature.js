import React from "react";
import "../../styles/Feature.css";

const Feature = () => {
  return (
    <>
      <section id="feature" className="section-p1">
        <div className="fe-box">
          <img src="/images/img/f1.webp" alt height="150px" width="150px" />
          <h6>Free Shipping</h6>
        </div>
        <div className="fe-box">
          <img src="/images/img/f2.jpg" alt height="150px" width="150px" />
          <h6>Online order</h6>
        </div>
        <div className="fe-box">
          <img src="/images/img/f3.jpg" alt height="150px" width="150px" />
          <h6>Save Money</h6>
        </div>
        <div className="fe-box">
          <img src="/images/img/f4.webp" alt height="150px" width="150px" />
          <h6>Promotions</h6>
        </div>
        <div className="fe-box">
          <img src="/images/img/f5.avif" alt height="150px" width="150px" />
          <h6>Happy Sell</h6>
        </div>
        <div className="fe-box">
          <img src="/images/img/f6.webp" alt height="150px" width="150px" />
          <h6>24/7 Support</h6>
        </div>
      </section>
    </>
  );
};

export default Feature;
