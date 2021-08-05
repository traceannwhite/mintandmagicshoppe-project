import React from "react";
import NewsletterForm from "./NewsletterForm";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social">
        <SocialMedia />
      </div>
      <div className="newsletter-form">
        {" "}
        <h1>Sign up for our newsletter!</h1>
        <NewsletterForm />
      </div>
      <div className="cc">Copyright - Mint and Magic Shoppe, LLC</div>
    </div>
  );
};

export default Footer;
