import React, { useState } from "react";
import bella from "../assets/images/bella.png";
import sam from "../assets/images/sam.png";
import bryce from "../assets/images/bryce.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    image: bella,
    content:
      "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the world",
    name: "Bella Moon",
    title: "Product Designer",
  },
  {
    id: 2,
    image: sam,
    content:
      "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the world",
    name: "Samuel Fortune",
    title: "Product Designer",
  },
  {
    id: 3,
    image: bryce,
    content:
      "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the world",
    name: "Bryce Jason",
    title: "Product Designer",
  },
  {
    id: 4,
    image: bella,
    content:
      "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the world",
    name: "Bella Moon",
    title: "Product Designer",
  },

  // add more testimonial objects as needed
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    beforeChange: (current, next) => setCurrentSlide(next),
    arrows: true,

    infinite: true,
    cssEase: "ease-in-out",
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div id="testimonials" className="bg-[#F8F9FC] py-10 px-4 md:px-0">
      <div className="container mx-auto px-4 my-5 md:px-0">
        <div className="text-center mb-8 md:mx-40">
          <div className="capitalize text-[#000F24] font-bold text-4xl">
            what our clients are saying
          </div>
          <div className="capitalize mt-2 text-[#845757]">
            high-definition video is video of higher resolution and quality than
            standard definition. while there’s no standard meaning for high
            definition, generally any standard video image
          </div>
        </div>

        <div className=" ">
          <Slider
            {...settings}
            afterChange={(index) => setCurrentSlide(index)}
            dots={true}
            autoplay={true}
            autoplaySpeed={2000}
            className=""
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-full md:w-[603px] bg-white rounded-lg p-3  px-5 md:px-4 mb-8"
              >
                <div className="p-2 ">
                  <div className="capitalize text-[#A2A2A2] mb-4">
                    {testimonial.content}
                  </div>
                  <div className="flex">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="mr-2 h-10 w-10 rounded-full"
                    />
                    <div className="">
                      <p className="text-black text-sm font-bold">
                        {testimonial.name}
                      </p>
                      <p className="text-[#A1A1A1] font-[400]">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
