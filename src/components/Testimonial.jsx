import Container from "./shared/Container";
import SectionTitle from "./shared/SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { useEffect, useState } from "react";
import Slider from "react-slick";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Testimonial = () => {
  // useEffect(() => {
  //   fetch("/review.json") // Ensure the correct path
  //     .then((res) => res.json())
  //     .then((data) => setReviews(data));
  // }, []);

  const axiosPublic = useAxiosPublic();
  const { data: feedbacks, isLoading } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/feedback");
      return data;
    },
  });
  if (isLoading)
    return (
      <span className="loading loading-spinner loading-md text-[#9C2227]"></span>
    );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1, // Should match slidesToShow
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10">
      <div className="w-11/12 lg:w-10/12 mx-auto relative mb-12">
        <SectionTitle head={"Customer Feedback"} />
        <p className="mt-4">Hear what our customers have to say about us!</p>
      </div>

      <Container>
        <div className="px-2">
          <Slider {...settings}>
            {feedbacks.map((review, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center  p-6 rounded-md shadow-none lg:shadow-md bg-gray-50/0 space-x-4"
              >
                <div className="flex gap-3 items-center">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-18 h-18 object-cover rounded-full mb-4"
                  />
                  <div>
                    <h2 className="text-xl font-semibold">{review.name}</h2>
                    <h4 className="text-gray-600">{review.title}</h4>
                  </div>
                </div>
                <p className="mt-2 text-gray-500">
                  {/* {review?.review && review.review.length > 100
                    ? `${review.review.slice(0, 100)}...`
                    : review?.review} */}
                  {review?.review}
                </p>
                {/* <p>{review.review}</p> */}

                <div className="flex mt-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`text-yellow-500 ${
                        i < Number(review.star || 0)
                          ? "opacity-100"
                          : "opacity-30"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;
