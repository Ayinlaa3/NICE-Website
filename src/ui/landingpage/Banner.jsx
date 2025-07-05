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
    <div className="relative w-full p-5 container mx-auto">
      <div className="flex flex-row justify-center items-start lg:gap-20 gap-10">
        {/* Left Text Section */}
        <div className="flex flex-col gap-10 z-10 w-1/2">
          <h2 className="font-extrabold text-5xl text-[var(--primary)]">
            Sustaining the World&apos;s <br /> Infrastructure
          </h2>
          <p className="text-2xl font-medium max-w-[735px]">
            Engineering a stronger, smarter future. The Nigerian Institution of
            Civil Engineers empowers civil engineers with the knowledge, tools,
            and network to build resilient communities and drive innovation.
            Together, we shape tomorrow&apos;s infrastructure.
          </p>

          {/* Quick Links Overlay */}
          <div
            className="text-xl rounded-2xl font-bold flex gap-2 *:flex *:items-center *:gap-2 *:px-2 px-3 py-5 border-3 border-t-0 border-[var(--border)] bg-white/90 backdrop-blur-md w-fit shadow-lg absolute bottom-20 left-0 2xl:left-20 z-10"
            id="quickLinks"
          >
            <a href="#">
              <Plus /> Join NICE
            </a>
            <a href="https://portal.nicehq.org/register">
              <Search /> Find A Member
            </a>
            <a href="#">
              <Certificate /> Browse Courses
            </a>
            <a href="#">
              <Partner /> Donate Now
            </a>
            <a href="#">
              <Secure /> Make Payment
            </a>
          </div>
        </div>

        {/* Slider Section */}
        <div className="relative w-[500px] h-[450px] rounded-2xl overflow-hidden ml-[-20px]">
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
