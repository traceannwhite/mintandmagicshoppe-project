import React from "react";
import CustomerReviews from "../components/CustomerReviews";
import ExploreButton from "../components/ExploreButton";

const Main = () => {
  return (
    <div className="main">
      <div className="company-img">
        <img
          src="https://res.cloudinary.com/dhcagrzcb/image/upload/v1627865442/Mint_MagicShoppe-02_gqorlp.jpg"
          alt=""
        ></img>
      </div>
      <div className="shop-btn">
        <ExploreButton />
      </div>
      <div className="product-cat">
        <img
          src="https://res.cloudinary.com/dhcagrzcb/image/upload/v1627871386/christmas-2924667_kq4dcd.jpg"
          alt=""
        ></img>
        <img
          src="https://res.cloudinary.com/dhcagrzcb/image/upload/v1627871531/beeswax-candle-3413350_fagm5w.jpg"
          alt=""
        ></img>
      </div>
      <div className="reviews-carousel">
        <CustomerReviews />
      </div>
    </div>
  );
};

export default Main;
