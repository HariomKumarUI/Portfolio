import React from "react";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

const CustomRightArrow = () => {
  return (
    <div>
      <LuChevronRight></LuChevronRight>
    </div>
  );
};

const CustomLeftArrow = () => {
  return (
    <div>
      <LuChevronLeft></LuChevronLeft>
    </div>
  );
};

const SocialMedia = (props) => {
  return (
    <SlideshowLightbox
      className="d-flex gx-5 flex-wrap"
      nextArrow={<CustomRightArrow />}
      prevArrow={<CustomLeftArrow />}
      rightArrowClassname="custom-right-arrow-class"
      leftArrowClassname="custom-left-arrow-class"
    >
      {props.imgPaths.map((path, index) => (
        <img key={index} src={path} />
      ))}
    </SlideshowLightbox>
  );
};

export default SocialMedia;
