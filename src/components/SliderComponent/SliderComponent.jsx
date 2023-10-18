/* eslint-disable react/prop-types */
import { Image } from "antd";
import { WrapperSliderStyle } from "./style";

export default function SliderComponent({ arrImages }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <WrapperSliderStyle {...settings}>
      {arrImages.map((image) => {
        return (
          <Image
            key={image}
            src={image}
            alt="slider"
            preview={false}
            width="100%"
            height="300px"
            style={{ backgroundSize: "cover" }}
          />
        );
      })}
    </WrapperSliderStyle>
  );
}
