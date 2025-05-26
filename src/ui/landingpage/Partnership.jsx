import Button from "@/components/ui/Button";

const Partnership = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 md:gap-6 lg:gap-8 py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-40 bg-no-repeat bg-cover bg-center bg-[url('/images/partnership-bg.png')] relative">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6">Partnership & Sponsorship</h2>
        <p className="text-base sm:text-lg md:text-xl text-center">
          We believe that strong partnerships create lasting impact. By
          collaborating with industry leaders, corporations, and institutions, we drive innovation, research, and capacity-building to
          shape the future of Nigeria&apos;s built environment.
        </p>
      </div>

      <Button className="mt-4 md:mt-6">Become a Partner</Button>
      <div className="bg-linear-90 to-[#fef10367] from-0% from-[#03823ac0] to-100% absolute inset-0" />
    </section>
  );
};

export default Partnership;
