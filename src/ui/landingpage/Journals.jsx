import Button from "@/components/ui/Button";

const Journals = () => {
  const arr = Array(3).fill(null);
  return (
    <section className="bg-no-repeat bg-cover bg-center bg-[url('/images/journal-bg.png')] relative p-4 md:p-6 lg:p-8 py-8 md:py-12 lg:py-16">
      <article className="flex flex-col items-center relative gap-8 md:gap-12 lg:gap-15 z-10 max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="font-extrabold text-(--background) text-2xl sm:text-3xl md:text-4xl mb-2 md:mb-4">
            Latest Publications
          </h2>
          <p className="text-sm md:text-base text-white/90 max-w-2xl mx-auto">
            Explore our latest research papers, technical articles, and industry insights from leading civil engineers.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10 lg:gap-15 w-full">
          {arr.map((_, i) => (
            <div key={i} className="w-full sm:w-1/3 max-w-[300px] transform hover:scale-105 transition-transform duration-300">
              <img 
                src="/images/journal.png" 
                alt="Journal" 
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>

        <Button variant="tertiary" className="mt-4 md:mt-6">View all Publications</Button>
      </article>
      <div className="bg-linear-90 to-[#fef103b2] from-0% from-[#03823a] to-100% absolute inset-0" />
    </section>
  );
};

export default Journals;
