import CountUp from "react-countup";

const Ratings = () => {
  return (
    <div className="flex flex-wrap justify-center items-center py-6 md:py-10 gap-6 md:gap-8 container mx-auto px-4 md:px-6 lg:px-8 xl:px-40">
      <div className="flex flex-col items-center gap-2 min-w-[150px]">
        <Rating number={7000} />
        <span className="text-sm md:text-base text-center">Registered members</span>
      </div>
      <Vr />
      <div className="flex flex-col items-center gap-2 min-w-[150px]">
        <Rating number={7000} />
        <span className="text-sm md:text-base text-center">Nice members</span>
      </div>
      <Vr />
      <div className="flex flex-col items-center gap-2 min-w-[150px]">
        <Rating number={500} />
        <span className="text-sm md:text-base text-center">Research Publications</span>
      </div>
      <Vr />
      <div className="flex flex-col items-center gap-2 min-w-[150px]">
        <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-(--border)">2001</span>
        <span className="text-sm md:text-base text-center">Year Established</span>
      </div>
    </div>
  );
};

export default Ratings;

const Rating = ({ number }) => {
  return (
    <CountUp
      className="text-2xl md:text-3xl lg:text-4xl font-bold text-(--border)"
      end={number}
      duration={2.2}
      valueStart={0}
      enableScrollSpy={true}
      scrollSpyOnce={true}
      scrollSpyDelay={200}
      scrollSpyThrottle={1000}
      suffix="+"
    />
  );
};

const Vr = () => {
  return <div className="h-8 md:h-10 w-[1px] bg-(--muted) hidden md:block" />;
};
