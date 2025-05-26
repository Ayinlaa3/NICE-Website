import Button from "@/components/ui/Button";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Worker,
  Youtube,
} from "../Icons";

const WhoWeAre = () => {
  return (
    <section className="bg-(--accent) p-4 md:p-5 py-6 md:py-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-6 md:gap-8">
        {/* section 1  */}
        <div className="w-full lg:w-1/2">
          <h2 className="flex mb-6 md:mb-10 items-center gap-2 text-(--primary) font-bold text-xl md:text-2xl">
            <Worker />
            <span className="capitalize">Who We Are</span>
          </h2>

          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6">
            The Nigerian Institution of Civil Engineers (NICE)
          </h1>

          <p className="text-base sm:text-lg md:text-xl font-semibold mb-6 md:mb-11">
            The Nigerian Institution of Civil Engineers, is the umbrella body of
            all Nigerian Civil Engineers. It is dedicated to promoting Civil
            Engineering profession and inter relationship with other branches of
            Engineering in Nigeria and diaspora. The Institution is made up of
            Professionals drawn from all fields of Civil Engineering including
            Construction Engineering, Structural Engineering, Highway
            Engineering, Geotechnics and Water Resources Engineering. NICE is
            the largest Division of the Nigerian Society of Engineers.
          </p>

          <Button className="mb-6 md:mb-10">About NICE</Button>

          <div className="flex flex-wrap items-center gap-3">
            <img src="/icons/logo.svg" className="size-16 md:size-20" alt="NICE Logo" />
            <span className="text-(--primary) font-bold text-base md:text-lg">NICE HQ</span>
            <div className="h-[50px] md:h-[73px] w-[2px] bg-(--muted)" />
            <div className="flex gap-2 md:gap-3">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Facebook />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Twitter />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Instagram />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Linkedin />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Youtube />
              </a>
            </div>
          </div>
        </div>
        {/* section 2  */}
        <div className="relative w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-white rounded-(--radius)">
          <img
            src="/images/chairman.png"
            alt="NICE National Chairman"
            className="object-cover w-full h-full rounded-(--radius)"
            draggable="false"
          />
          <div className="py-3 md:py-4 px-4 md:px-7 flex flex-col items-center border-b border-(--primary) bg-(--secondary-foreground) w-full rounded-[20px] absolute bottom-0 left-0 lg:bottom-30 lg:left-0 2xl:left-20 z-10">
            <span className="font-bold text-(--primary) text-lg md:text-2xl text-center">
              Engr. Tokunbo Ajanaku, FNSE FNICE
            </span>
            <span className="text-[#FF531C] font-semibold text-base md:text-xl text-center">
              National Chairman - 2025/2026
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
