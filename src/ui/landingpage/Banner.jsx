// src/ui/landingpage/Banner.jsx
// src/ui/landingpage/Banner.jsx

import { Certificate, Partner, Plus, Search, Secure } from "../Icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  "/images/slide1.png",
  "/images/slide2.png",
  "/images/slide3.png",
  "/images/slide4.png",
  "/images/slide5.png",
  "/images/slide6.jpg",
  "/images/slide7.jpg",
  "/images/slide8.png",
  "/images/slide9.jpg",
  "/images/slide10.jpg",
];

// Words to type in sequence
const words = ["Planning", "Designing", "Constructing", "Maintaining", "Sustaining"];

const Banner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500); // change every 2.5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Background Slider */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full relative">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Centered Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:px-20 text-white z-20">
        {/* Heading with typing effect */}
        <motion.h2
          key={index} // re-animates when word changes
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-extrabold text-4xl md:text-6xl leading-snug drop-shadow-lg"
        >
          {words[index]} the World&apos;s <br /> Infrastructure
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-5 text-lg md:text-2xl font-medium max-w-3xl drop-shadow-md"
        >
          The Nigerian Institution of Civil Engineers empowers civil engineers
          with the knowledge, tools, and network to build resilient communities
          and drive innovation.
        </motion.p>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-5 text-lg md:text-xl rounded-2xl font-bold flex flex-wrap justify-center gap-5 px-6 py-2 border border-green-600 bg-white/95 backdrop-blur-md shadow-lg transition"
          id="quickLinks"
        >
          <a
            href="#"
            className="flex items-center gap-2 text-green-700 hover:text-white hover:bg-green-600 px-3 py-2 rounded-xl transition"
          >
            <Plus className="w-8 h-8" /> Join NICE
          </a>
          <a
            href="https://portal.nicehq.org/register"
            className="flex items-center gap-2 text-green-700 hover:text-white hover:bg-green-600 px-3 py-2 rounded-xl transition"
          >
            <Search className="w-8 h-8" /> Find A Member
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-green-700 hover:text-white hover:bg-green-600 px-3 py-2 rounded-xl transition"
          >
            <Certificate className="w-8 h-8" /> Browse Courses
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-green-700 hover:text-white hover:bg-green-600 px-3 py-2 rounded-xl transition"
          >
            <Partner className="w-8 h-8" /> Donate Now
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-green-700 hover:text-white hover:bg-green-600 px-3 py-2 rounded-xl transition"
          >
            <Secure className="w-8 h-8" /> Make Payment
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;




// import { Certificate, Partner, Plus, Search, Secure } from "../Icons";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/autoplay";
// import { Autoplay } from "swiper/modules";

// const images = [
//   "/images/slide1.png",
//   "/images/slide2.png",
//   "/images/slide3.png",
//   "/images/slide4.png",
//   "/images/slide5.png",
//   "/images/slide6.jpg",
//   "/images/slide7.jpg",
//   "/images/slide8.png",
//   "/images/slide9.jpg",
//   "/images/slide10.jpg",
// ];

// const Banner = () => {
//   return (
//     <div className="relative w-full p-5 container mx-auto">
//       <div className="flex flex-row justify-center items-start lg:gap-20 gap-10">
//         {/* Left Text Section */}
//         <div className="flex flex-col gap-10 z-10 w-1/2">
//           <h2 className="font-extrabold text-5xl text-[var(--primary)]">
//             Sustaining the World&apos;s <br /> Infrastructure
//           </h2>
//           <p className="text-2xl font-medium max-w-[735px]">
//             Engineering a stronger, smarter future. The Nigerian Institution of
//             Civil Engineers empowers civil engineers with the knowledge, tools,
//             and network to build resilient communities and drive innovation.
//             Together, we shape tomorrow&apos;s infrastructure.
//           </p>

//           {/* Quick Links Overlay */}
//           <div
//             className="text-xl rounded-2xl font-bold flex gap-2 *:flex *:items-center *:gap-2 *:px-2 px-3 py-5 border-3 border-t-0 border-[var(--border)] bg-white/90 backdrop-blur-md w-fit shadow-lg absolute bottom-20 left-0 2xl:left-20 z-10"
//             id="quickLinks"
//           >
//             <a href="#">
//               <Plus /> Join NICE
//             </a>
//             <a href="https://portal.nicehq.org/register">
//               <Search /> Find A Member
//             </a>
//             <a href="#">
//               <Certificate /> Browse Courses
//             </a>
//             <a href="#">
//               <Partner /> Donate Now
//             </a>
//             <a href="#">
//               <Secure /> Make Payment
//             </a>
//           </div>
//         </div>

//         {/* Slider Section */}
//         <div className="relative w-[500px] h-[450px] rounded-2xl overflow-hidden ml-[-20px]">
//           <Swiper
//             modules={[Autoplay]}
//             autoplay={{ delay: 2500, disableOnInteraction: false }}
//             loop={true}
//             className="w-full h-full"
//           >
//             {images.map((src, index) => (
//               <SwiperSlide key={index}>
//                 <img
//                   src={src}
//                   alt={`Slide ${index + 1}`}
//                   className="object-cover w-full h-full"
//                 />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;
