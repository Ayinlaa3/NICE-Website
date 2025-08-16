import Button from "@/components/ui/Button";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Worker,
  Youtube,
} from "../Icons";

const WhoWeAre = () => {
  return (
    <section className="bg-(--accent) p-5 py-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 text-center lg:text-left">
        {/* section 1 */}
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
          <h2 className="flex mb-6 lg:mb-10 items-center justify-center lg:justify-start gap-2 text-(--primary) font-bold text-xl lg:text-2xl">
            <Worker />
            <span className="capitalize">Who We Are</span>
          </h2>

          <h1 className="font-bold text-2xl lg:text-4xl mb-4 lg:mb-6 leading-snug">
            The Nigerian Institution of Civil Engineers (NICE)
          </h1>

          <p className="text-base lg:text-xl font-medium lg:font-semibold mb-6 lg:mb-11 max-w-lg lg:max-w-none">
            The Nigerian Institution of Civil Engineers, is the umbrella body of
            all Nigerian Civil Engineers. It is dedicated to promoting Civil
            Engineering profession and inter relationship with other branches of
            Engineering in Nigeria and diaspora. The Institution is made up of
            Professionals drawn from all fields of Civil Engineering including
            Construction Engineering, Structural Engineering, Highway
            Engineering, Geotechnics and Water Resources Engineering. NICE is
            the largest Division of the Nigerian Society of Engineers.
          </p>

          <Link to="/about">
            <Button className="mb-6 lg:mb-10">About NICE</Button>
          </Link>

          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3">
            <img
              src="/icons/logo.svg"
              className="size-16 lg:size-20"
              alt="NICE Logo"
            />
            <span className="text-(--primary) font-bold text-base lg:text-lg">
              NICE HQ
            </span>
            <div className="h-[50px] lg:h-[73px] w-[2px] bg-(--muted)" />
            <a href="https://web.facebook.com/icenigerian/">
              <Facebook />
            </a>
            {/* Hide Twitter on mobile, show only on desktop */}
            <a href="#" className="hidden lg:inline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path d="M19.633 7.997c.013.176.013.353.013.53 0 5.402-4.11 11.63-11.63 11.63-2.31 0-4.46-.676-6.27-1.844.323.038.634.05.97.05a8.21 8.21 0 0 0 5.09-1.753 4.104 4.104 0 0 1-3.83-2.847c.248.037.497.062.758.062.36 0 .721-.05 1.058-.137a4.097 4.097 0 0 1-3.29-4.022v-.05c.548.311 1.18.497 1.854.522a4.093 4.093 0 0 1-1.824-3.41c0-.748.199-1.422.548-2.016a11.65 11.65 0 0 0 8.457 4.287 4.624 4.624 0 0 1-.1-.94 4.093 4.093 0 0 1 7.09-2.799 8.1 8.1 0 0 0 2.598-.99 4.083 4.083 0 0 1-1.797 2.26 8.21 8.21 0 0 0 2.36-.635 8.775 8.775 0 0 1-2.043 2.117z" />
              </svg>
            </a>
            <a href="#">
              <Instagram />
            </a>
            <a href="https://www.linkedin.com/company/nigerian-institution-of-civil-engineers-headquarters/">
              <Linkedin />
            </a>
            <a href="https://www.youtube.com/@NICE-HQ">
              <Youtube />
            </a>
          </div>
        </div>

        {/* section 2 */}
        <div className="relative w-full lg:w-1/2 lg:h-[600px] bg-white rounded-(--radius)">
          <img
            src="/images/chairman.png"
            alt="NICE National Chairman"
            className="object-cover w-full h-full rounded-(--radius)"
            draggable="false"
          />
          <div className="py-4 px-7 flex flex-col items-center border-b border-(--primary) bg-(--secondary-foreground) w-full rounded-[20px] absolute bottom-30 left-0 2xl:left-20 z-10">
            <span className="font-bold text-(--primary) text-lg lg:text-2xl text-center">
              Engr. Tokunbo Ajanaku, FNSE FNICE
            </span>
            <span className="text-[#FF531C] font-semibold text-base lg:text-xl text-center">
              National Chairman - 2025/2026
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
