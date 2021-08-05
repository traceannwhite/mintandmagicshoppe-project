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
          src="https://res.cloudinary.com/dhcagrzcb/image/upload/v1628173437/glassmintcandle_jpvjh2.jpg"
          alt=""
        ></img>
        <img
          src="https://res.cloudinary.com/dhcagrzcb/image/upload/v1628173437/candlesupplies_iycgbn.jpg"
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
