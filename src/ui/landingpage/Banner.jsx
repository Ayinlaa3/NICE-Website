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

const words = ["Planning", "Designing", "Constructing", "Maintaining", "Sustaining"];

const Banner = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  // Typing effect
  useEffect(() => {
    let currentWord = words[currentWordIndex];
    let i = 0;
    setDisplayedText("");

    const typingInterval = setInterval(() => {
      setDisplayedText(currentWord.slice(0, i + 1));
      i++;
      if (i === currentWord.length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }, 1500);
      }
    }, 120);

    return () => clearInterval(typingInterval);
  }, [currentWordIndex]);

  return (
    <div className="relative w-full h-[85vh] sm:h-[90vh] overflow-hidden">
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
              <div className="absolute inset-0 bg-black/50" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-10 md:px-20 text-white z-20">
        
        {/* Title with typing effect */}
        <h2 className="font-extrabold text-2xl sm:text-4xl md:text-6xl leading-snug drop-shadow-lg">
          <span className="text-green-400">{displayedText}</span> the World&apos;s <br className="hidden sm:block" /> Infrastructure
        </h2>

        {/* Subtitle */}
        <motion.p
          className="mt-3 sm:mt-5 text-sm sm:text-lg md:text-2xl font-medium max-w-lg sm:max-w-2xl md:max-w-3xl drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          The Nigerian Institution of Civil Engineers empowers civil engineers with the
          knowledge, tools, and network to build resilient communities and drive innovation.
        </motion.p>

        {/* Quick Links */}
        <motion.div
          className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg font-bold flex flex-wrap justify-center gap-3 sm:gap-5 px-4 py-3 border border-green-600 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2, delayChildren: 1 },
            },
          }}
        >
          {/* Desktop View: All 5 buttons */}
          <div className="hidden md:flex flex-wrap justify-center gap-4">
            {[
              { icon: Plus, text: "Join NICE" },
              { icon: Search, text: "Find A Member", link: "https://portal.nicehq.org/register" },
              { icon: Certificate, text: "Browse Courses" },
              { icon: Partner, text: "Donate Now" },
              { icon: Secure, text: "Make Payment" },
            ].map(({ icon: Icon, text, link = "#" }, idx) => (
              <motion.a
                key={idx}
                href={link}
                className="flex items-center gap-2 text-green-700 hover:text-white hover:bg-green-600 px-3 py-2 rounded-xl transition"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                <Icon className="w-6 h-6 md:w-8 md:h-8" /> {text}
              </motion.a>
            ))}
          </div>

          {/* Mobile View: Only 3 buttons inline */}
          <div className="flex md:hidden w-full justify-center gap-2">
            {[
              { icon: Plus, text: "Join NICE" },
              { icon: Search, text: "Find A Member", link: "https://portal.nicehq.org/register" },
              { icon: Secure, text: "Make Payment" },
            ].map(({ icon: Icon, text, link = "#" }, idx) => (
              <motion.a
                key={idx}
                href={link}
                className="flex items-center justify-center gap-1 text-green-700 hover:text-white hover:bg-green-600 px-2 py-1.5 rounded-lg text-xs sm:text-sm flex-1"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" /> {text}
              </motion.a>
            ))}
          </div>
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
