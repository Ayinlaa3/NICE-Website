import CountUp from "react-countup";

const Ratings = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-10 gap-8 md:gap-4 container mx-auto px-6 md:px-20 lg:px-40">
      
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <Rating number={7000} />
        <span>Registered Civil Engineers</span>
      </div>

      {/* Divider - hidden on mobile */}
      <div className="hidden md:block">
        <Vr />
      </div>

      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <Rating number={6000} />
        <span>Capacity Development Programs</span>
      </div>

      <div className="hidden md:block">
        <Vr />
      </div>

      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <Rating number={500} />
        <span>Research Publications</span>
      </div>

      <div className="hidden md:block">
        <Vr />
      </div>

      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <span className="text-4xl font-bold text-(--border)">2001</span>
        <span>Year Established</span>
      </div>
    </div>
  );
};

export default Ratings;

const Rating = ({ number }) => {
  return (
    <CountUp
      className="text-4xl font-bold text-(--border)"
      end={number}
      duration={5.2}
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
  return <div className="h-10 w-[1px] bg-(--muted)" />;
};
