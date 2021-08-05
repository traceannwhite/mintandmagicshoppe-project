import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const items = [
  {
    src: "https://res.cloudinary.com/dhcagrzcb/image/upload/v1628034032/IMG_4927_isw6vn-_1__wtwe5f.jpg",
    altText: "Slide 1",
    caption:
      '"I love the signature forest mint scent. It makes my living room smell like a medieval garden."',
  },
  {
    src: "https://res.cloudinary.com/dhcagrzcb/image/upload/v1628004771/IMG_4921_id5ggj_nl3smm.jpg",
    altText: "Slide 2",
    caption:
      'I think we all need a little more magic... and Mint and Magic provides that magic!"',
  },
  {
    src: "https://res.cloudinary.com/dhcagrzcb/image/upload/v1628004773/IMG_4929_nclron_yaygtu.jpg",
    altText: "Slide 3",
    caption:
      '"There is nothing quite so magical as lighting a candle on a cool, rainy evening. I have loved every scent!"',
  },
];

const CustomerReviews = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption className="text" captionText={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText=" "
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText=" "
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
};

export default CustomerReviews;
