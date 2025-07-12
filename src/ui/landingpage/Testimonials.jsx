import React from 'react';
import { Button } from "@headlessui/react";
import TestimonialCard from "../../components/TestimonialCard";
import { ArrowLeft, ArrowRight } from "../Icons";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// You might also need to import a custom CSS file here if you don't use a global one
// import './your-custom-slick-styles.css'; // Example if you create a new CSS file for this


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

const Testimonial = () => {
  // Custom Next Arrow component
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <Button
        className={`${className} absolute right-0 top-1/2 transform -translate-y-1/2 hover:shadow-lg transition duration-300 ease-in-out rounded-full active:scale-90 z-20`}
        onClick={onClick}
        style={{ ...style, display: "block" }} // Ensure it's visible
      >
        <ArrowRight />
      </Button>
    );
  };

  // Custom Prev Arrow component
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <Button
        className={`${className} absolute left-0 top-1/2 transform -translate-y-1/2 hover:shadow-lg transition duration-300 ease-in-out rounded-full active:scale-90 z-20`}
        onClick={onClick}
        style={{ ...style, display: "block" }} // Ensure it's visible
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
    // arrows: true, // This is the default, so you can omit it or explicitly set to true
    nextArrow: <NextArrow />, // Assign custom next arrow
    prevArrow: <PrevArrow />, // Assign custom prev arrow
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

  return (
    <div className="relative py-12">
      {/* Background image container */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center bg-fixed opacity-30"
        style={{ backgroundImage: "url('/images/testimonial-bg.jpg')" }}
      ></div>

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#03823ac0] to-[#fef10367]" />

      {/* Content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Success Stories
        </h2>
        <div className="relative">
          <Slider {...settings}>
            {testimonials.map((story, index) => (
              <TestimonialCard key={index} {...story} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;