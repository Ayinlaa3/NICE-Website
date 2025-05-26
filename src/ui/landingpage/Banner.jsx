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
];

const Banner = () => {
  return (
    <div className="relative w-full p-4 md:p-5 container mx-auto">
      <div className="flex flex-col lg:flex-row justify-center items-start lg:gap-10 xl:gap-20 gap-6">
        {/* Left Text Section */}
        <div className="flex flex-col gap-6 lg:gap-10 z-10 w-full lg:w-1/2">
          <h2 className="font-extrabold text-3xl md:text-4xl lg:text-5xl text-[var(--primary)]">
            Sustaining the World&apos;s <br /> Infrastructure
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl font-medium max-w-[735px]">
            Engineering a stronger, smarter future. The Nigerian Institution of
            Civil Engineers empowers civil engineers with the knowledge, tools,
            and network to build resilient communities and drive innovation.
            Together, we shape tomorrow&apos;s infrastructure.
          </p>

          {/* Quick Links Overlay */}
          <div
            className="text-base md:text-lg lg:text-xl rounded-2xl font-bold flex flex-wrap gap-2 *:flex *:items-center *:gap-2 *:px-2 px-3 py-4 lg:py-5 border-3 border-t-0 border-[var(--border)] bg-white/90 backdrop-blur-md w-fit shadow-lg relative lg:absolute lg:bottom-20 lg:left-0 2xl:left-20 z-10"
            id="quickLinks"
          >
            <a href="#" className="hover:text-[var(--primary)] transition-colors">
              <Plus /> Join NICE
            </a>
            <a href="#" className="hover:text-[var(--primary)] transition-colors">
              <Search /> Find A Member
            </a>
            <a href="#" className="hover:text-[var(--primary)] transition-colors">
              <Certificate /> Browse Courses
            </a>
            <a href="#" className="hover:text-[var(--primary)] transition-colors">
              <Partner /> Donate Now
            </a>
            <a href="#" className="hover:text-[var(--primary)] transition-colors">
              <Secure /> Make Payment
            </a>
          </div>
        </div>

        {/* Slider Section */}
        <div className="relative w-full lg:w-[500px] h-[300px] md:h-[400px] lg:h-[450px] rounded-2xl overflow-hidden lg:ml-[-20px]">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            className="w-full h-full"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;
