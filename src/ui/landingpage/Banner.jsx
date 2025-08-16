// src/ui/landingpage/Banner.jsx

// src/ui/landingpage/Banner.jsx

import { Certificate, Partner, Plus, Search, Secure } from "../Icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

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

const Banner = () => {
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
        <h2 className="font-extrabold text-4xl md:text-6xl leading-snug drop-shadow-lg">
          Sustaining the World&apos;s <br /> Infrastructure
        </h2>
        <p className="mt-6 text-lg md:text-2xl font-medium max-w-3xl drop-shadow-md">
          Engineering a stronger, smarter future. The Nigerian Institution of
          Civil Engineers empowers civil engineers with the knowledge, tools,
          and network to build resilient communities and drive innovation.
          Together, we shape tomorrow&apos;s infrastructure.
        </p>

        {/* Quick Links */}
        <div
          className="mt-10 text-lg md:text-xl rounded-2xl font-bold flex flex-wrap justify-center gap-4 px-6 py-4 border-2 border-green-600 bg-white/95 backdrop-blur-md shadow-lg transition"
          id="quickLinks"
        >
          <a
            href="#"
            className="flex items-center gap-2 text-green-700 hover:text-white hover:bg-green-600 px-3 py-2 rounded-xl transition"
          >
            <Plus className="w-5 h-5 fill-yellow-500" /> Join NICE
          </a>
          <a
            href="https://portal.nicehq.org/register"
            className="flex items-center gap-2 text-green-700 hover:text-white hover:bg-green-600 px-3 py-2 rounded-xl transition"
          >
            <Search className="w-5 h-5 !fill-red-500" /> Find A Member
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-green-700 hover:text-white hover:bg-green-600 px-3 py-2 rounded-xl transition"
          >
            <Certificate className="w-5 h-5" /> Browse Courses
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-green-700 hover:text-white hover:bg-green-600 px-3 py-2 rounded-xl transition"
          >
            <Partner className="w-5 h-5" /> Donate Now
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-green-700 hover:text-white hover:bg-green-600 px-3 py-2 rounded-xl transition"
          >
            <Secure className="w-5 h-5" /> Make Payment
          </a>
        </div>
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
