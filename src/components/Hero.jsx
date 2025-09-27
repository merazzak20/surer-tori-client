import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";

import { Scrollbar, Autoplay } from "swiper/modules";

import h1 from "../assets/hero1.jpg";
import h2 from "../assets/hero2.jpg";
import h3 from "../assets/hero3.jpg";
import h4 from "../assets/hero4.jpg";
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
            backgroundImage: `linear-gradient(rgba(20, 5, 5, 0.2), rgba(20, 5, 5, 0.9)), url(${h1})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh",
          }}
        >
          <Container>
            <div
              data-aos="fade-up"
              className="absolute bottom-20 max-w-[10/12] lg:max-w-7/12 text-white text-2xl tracking-wide font-semibold mutalis"
            >
              <p>
                &quot;When you play a violin piece, you are a storyteller, and
                you&apos;re telling a story.&quot; <br />
                &quot;A violin should be played with love, or not at all.&quot;
              </p>
              <p className="mt-4 ml-2">- Joseph Wechsberg</p>
            </div>
          </Container>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `linear-gradient(rgba(20, 5, 5, 0), rgba(20, 5, 5, 0.5)), url(${h2})`,
            backgroundPosition: "center top",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh",
          }}
        >
          <Container>
            <div
              data-aos="fade-up"
              className="absolute max-w-[10/12] lg:max-w-7/12 bottom-20 text-white text-2xl tracking-wide font-semibold mutalis"
            >
              <p>
                If there are different musical instruments tuned alike in one
                room, all of you may have noticed that when one is struck, the
                others have the tendency to vibrate so as to give the same note.
                So all minds that have the same tension, so to say, will be
                equally affected by the same thought.
              </p>
              <p className="mt-4 ml-2">- Swami Vivekananda</p>
            </div>
          </Container>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `linear-gradient(rgba(20, 5, 5, 0), rgba(20, 5, 5, 0.9)), url(${h3})`,
            backgroundPosition: "center top",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh",
          }}
        >
          <Container>
            <div
              data-aos="fade-up"
              className="absolute max-w-[10/12] lg:max-w-7/12 bottom-20 text-white text-2xl tracking-wide font-semibold mutalis"
            >
              <p>
                {" "}
                Talent will get you where you would like to be, but you must
                practice consistently and have a strong will Power to continue
                improving.
              </p>
            </div>
          </Container>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `linear-gradient(rgba(20, 5, 5, 0), rgba(20, 5, 5, 0.9)), url(${h4})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh",
          }}
        >
          <Container>
            <div
              data-aos="fade-up"
              className="absolute max-w-[10/12] lg:max-w-7/12 bottom-20 text-white text-2xl tracking-wide font-semibold mutalis"
            >
              <p>Group Picnic Organized by Surer Tori.</p>
            </div>
          </Container>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
