// src/ui/landingpage/Journals.jsx

import Slider from "react-slick";
import Button from "@/components/ui/Button";

import { ArrowLeft, ArrowRight } from "../Icons";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const JOURNALS = [
  {
    cover: "/images/journal1.jpg",
    file: "/journals/journal1.pdf",
  },
  {
    cover: "/images/newsletter1.jpg",
    file: "/newsletters/newsletter1.pdf",
  },
  {
    cover: "/images/journal2.jpg",
    file: "/journals/journal2.pdf",
  },
  {
    cover: "/images/newsletter2.jpg",
    file: "/newsletters/newsletter2.pdf",
  },
  {
    cover: "/images/journal3.jpg",
    file: "/journals/journal3.pdf",
  },
  {
    cover: "/images/journal4.jpg",
    file: "/journals/journal4.pdf",
  },
  {
    cover: "/images/newsletter3.jpg",
    file: "/newsletters/newsletter3.pdf",
  },
  
  {
    cover: "/images/newsletter4.jpg",
    file: "/newsletters/newsletter4.pdf",
  },
];

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

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <NextArrow />, // Assign custom next arrow
  prevArrow: <PrevArrow />, // Assign custom prev arrow
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 640,
      settings: { slidesToShow: 1 },
    },
  ],
};

const Journals = () => {
  return (
    <div className="bg-[url('/images/journal-bg.png')] bg-no-repeat bg-cover bg-center relative p-5 py-15">
      <article className="relative z-10 flex flex-col gap-15 items-center">
        <h2 className="text-4xl font-extrabold text-[var(--background)]">
          Latest Publications
        </h2>

        <Slider {...sliderSettings} className="w-full max-w-6xl p-5">
          {JOURNALS.map((journal, idx) => (
            <div key={idx} className="px-4">
              <a
                href={journal.file}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={journal.cover}
                  alt={`Journal ${idx + 1}`}
                  className="rounded-xl shadow-md hover:shadow-lg transition"
                />
              </a>
            </div>
          ))}
        </Slider>
          <Link to="/publications">
              <Button variant="tertiary">View all Publications</Button>
           </Link>
      </article>

      <div className="absolute inset-0 bg-gradient-to-r from-[#03823a] to-[#fef103b2] opacity-80 z-0" />
    </div>
  );
};

export default Journals;










// import Button from "@/components/ui/Button";

// const Journals = () => {
//   const arr = Array(3).fill(null);
//   return (
//     <div className="bg-no-repeat bg-cover bg-center bg-[url('/images/journal-bg.png')] relative p-5 py-8">
//       <article className="flex flex-col items-center relative gap-15 z-10">
//         <h2 className="font-extrabold text-(--background) text-4xl">
//           Latest Publications
//         </h2>
//         <div className="flex items-center justify-center gap-15">
//           {arr.map((_, i) => {
//             return <img key={i} src="/images/journal.png" alt="Journal" />;
//           })}
//         </div>

//         <Button variant="tertiary">View all Publications</Button>
//       </article>
//       <div className="bg-linear-90 to-[#fef103b2] from-0% from-[#03823a] to-100% absolute inset-0" />
//     </div>
//   );
// };

// export default Journals;
