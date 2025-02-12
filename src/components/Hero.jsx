import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";

import { Scrollbar, Autoplay } from "swiper/modules";

import h1 from "../assets/footer.jpg";
import Container from "./shared/Container";

const Hero = () => {
  return (
    <div>
      <Swiper
        scrollbar={{
          hide: false,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Scrollbar, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide
          style={{
            backgroundImage: `linear-gradient(rgba(20, 5, 5, 0), rgba(20, 5, 5, 0.9)), url(${h1})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh",
          }}
        >
          <Container>
            <h1 className="absolute bottom-50">Hello</h1>
          </Container>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `linear-gradient(rgba(20, 5, 5, 0), rgba(20, 5, 5, 0.9)), url(${h1})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh",
          }}
        >
          <Container>
            <h1 className="absolute bottom-50">Hello</h1>
          </Container>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `linear-gradient(rgba(20, 5, 5, 0), rgba(20, 5, 5, 0.9)), url(${h1})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh",
          }}
        >
          <Container>
            <h1 className="absolute bottom-50">Hello</h1>
          </Container>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
