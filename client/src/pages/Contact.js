import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import "../index.css";
function Contact() {
  return (
    <Layout title={"Contact us"}>
      {/* <div className="row contactus ">
              <div className="col-md-6 ">
                <img
                  src="/images/contactus.jpeg"
                  alt="contactus"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="col-md-4">
                <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
                <p className="text-justify mt-2">
                  any query and info about prodduct feel free to call anytime we 24X7
                  vaialible
                </p>
                <p className="mt-3">
                  <BiMailSend /> : www.help@ecommerceapp.com
                </p>
                <p className="mt-3">
                  <BiPhoneCall /> : 012-3456789
                </p>
                <p className="mt-3">
                  <BiSupport /> : 1800-0000-0000 (toll free)
                </p>
              </div>
            </div> */}
      <div>
        <section
          id="page-header"
          className="about-header"
          style={{ backgroundImage: "url('/images/img/banner.jpg')" }}
        >
          <h2>#let's_talk</h2>
          <p>leave a message...WE LOVE TO HEAR FRPM YOU!</p>
        </section>
        <section id="contact-details" className="section-p1 m-3">
          <div className="details">
            <span>GET IN TOUCH</span>
            <h2>Visit one of our agency location or contact us today</h2>
            <h3>Head Office</h3>
            <div>
              <li>
                <i className="fal fa-map" />
                <p>117 street, om shanti colony , madlauda</p>
              </li>
              <li>
                <i className="fal fa-envelope" />
                <p> mahakj064@gmail.com</p>
              </li>
              <li>
                <i className="fal fa-phone-alt" />

                <p> 9306552141</p>
              </li>
              <li>
                <i className="fal fa-clock" />
                <p>Monday to Saturday : 9.00am to 6.00pm</p>
              </li>
            </div>
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27808.203462823923!2d76.7865367612413!3d29.398812055743814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390de74b55c9dd2d%3A0xc79f4010967cb914!2sMadlauda%2C%20Haryana%20132113!5e0!3m2!1sen!2sin!4v1690464216215!5m2!1sen!2sin"
              width={600}
              height={450}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
        \
      </div>
    </Layout>
  );
}

export default Contact;
