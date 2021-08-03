// import React from "react";

// const CustomerReviews = () => {
//   return <div className="cust-img"></div>;
// };

// export default CustomerReviews;
import React from "react";
import { UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: "https://res.cloudinary.com/dhcagrzcb/image/upload/v1628034032/IMG_4927_isw6vn-_1__wtwe5f.jpg",
    altText: "Slide 1",
    caption:
      '"I love the way the Forest Mint candle looks and smells in my living room!"',
    header: "Slide 1 Header",
    key: "1",
  },
  {
    src: "https://res.cloudinary.com/dhcagrzcb/image/upload/v1628004771/IMG_4921_id5ggj_nl3smm.jpg",
    altText: "Slide 2",
    caption: "Slide 2",
    header: "Slide 2 Header",
    key: "2",
  },
  {
    src: "https://res.cloudinary.com/dhcagrzcb/image/upload/v1628004773/IMG_4929_nclron_yaygtu.jpg",
    altText: "Slide 3",
    caption: "Slide 3",
    header: "Slide 3 Header",
    key: "3",
  },
];

const CustomerReviews = () => (
  <div className="carousel">
    <UncontrolledCarousel items={items} />
  </div>
);

export default CustomerReviews;

// PROBLEM: Had initial trouble with adding url to src
// SOLUTION: Won't except files in HEIC format. Must convert to JPG before inputting.
