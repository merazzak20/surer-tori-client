import Container from "./shared/Container";
import SectionTitle from "./shared/SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import Slider from "react-slick";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]); // Initialize as an empty array

  useEffect(() => {
    fetch("/review.json") // Ensure the correct path
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <div className="py-10">
      <div className="w-10/12 mx-auto relative mb-12">
        <SectionTitle head={"Customer Feedback"} />
        <p className="mt-4">Hear what our customers have to say about us!</p>
      </div>

      <Container>
        <Slider {...settings}>
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 rounded-md shadow-md"
            >
              {/* <img
                src={review.image}
                alt={review.name}
                className="w-24 h-24 object-cover rounded-full mb-4"
              /> */}
              <h2 className="text-xl font-semibold">{review.name}</h2>
              <h4 className="text-gray-600">{review.title}</h4>
              <p className="mt-2 text-gray-500">{review.review}</p>
              <div className="flex justify-center mt-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`text-yellow-500 ${
                      i < review.star ? "opacity-100" : "opacity-30"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default Testimonial;
