// src/components/Testimonial.jsx

import React from "react";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from "../Icons";
import TestimonialCard from "../../components/TestimonialCard";
import Button from "@/components/ui/Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Engr. Chinenye Okonkwo, FNSE",
    quote:
      "Joining NICE opened doors to endless professional growth and meaningful collaborations nationwide.",
    imageSrc: "/images/testimonial1.png",
  },
  {
    name: "Engr. Musa Bello, MNICE",
    quote:
      "NICE empowered me with the technical knowledge and leadership skills needed to transform communities.",
    imageSrc: "/images/testimonial2.png",
  },
  {
    name: "Dr. Maryam Sani, FNSE",
    quote:
      "The mentorship I’ve received from NICE senior engineers shaped my career in the most impactful way.",
    imageSrc: "/images/testimonial3.png",
  },
  {
    name: "Engr. Tunde Alabi, MNSE",
    quote:
      "Through NICE conferences, I’ve connected with world-class engineers solving real infrastructure challenges.",
    imageSrc: "/images/testimonial4.png",
  },
  {
    name: "Engr. Adaeze Nwachukwu, MNICE",
    quote:
      "NICE gave me a platform to speak, learn, and lead change in the civil engineering profession.",
    imageSrc: "/images/testimonial5.jpg",
  },
  {
    name: "Engr. Peter Ojo, FNICE",
    quote:
      "The technical workshops and CPD programs from NICE helped me stay relevant in a fast-changing industry.",
    imageSrc: "/images/testimonial6.png",
  },
];

// Custom Arrows
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <Button
      onClick={onClick}
      className={`${className} absolute right-0 top-1/2 transform -translate-y-1/2 hover:shadow-lg rounded-full z-10`}
      style={{ ...style, display: "block" }}
    >
      <ArrowRight />
    </Button>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <Button
      onClick={onClick}
      className={`${className} absolute left-0 top-1/2 transform -translate-y-1/2 hover:shadow-lg rounded-full z-10`}
      style={{ ...style, display: "block" }}
    >
      <ArrowLeft />
    </Button>
  );
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
    },
  ],
};

const Testimonial = () => {
  return (
    <div className="relative py-16 bg-no-repeat bg-cover bg-center bg-[url('/images/testimonial-bg.jpg')]">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#03823ac0] to-[#fef10367]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white text-center mb-8">
          Success Stories
        </h2>
        <Slider {...settings}>
          {testimonials.map((story, index) => (
            <TestimonialCard key={index} {...story} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
