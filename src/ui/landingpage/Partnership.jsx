import Button from "@/components/ui/Button";

const Partnership = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-16 px-6 md:px-20 lg:px-40 bg-no-repeat bg-cover bg-center bg-[url('/images/partnership-bg.png')]">
      {/* Heading */}
      <h2 className="font-extrabold text-2xl md:text-3xl lg:text-4xl text-black">
        Partnership & Sponsorship
      </h2>

      {/* Paragraph */}
      <p className="text-base md:text-lg lg:text-xl max-w-4xl leading-relaxed text-black text-center">
        We believe that strong partnerships create lasting impact. By
        collaborating with industry leaders, corporations, and institutions,
        we drive innovation, research, and capacity-building to shape the
        future of Nigeria&apos;s built environment.
      </p>

      {/* CTA Button */}
      <Button size="lg" className="mt-2">
        Become a Partner
      </Button>
    </div>
  );
};

export default Partnership;
