import Image from "@/components/Image";

type HeroProps = {};

const Hero = ({}: HeroProps) => {
  return (
    <div className="relative min-h-[48.44rem] 2xl:min-h-[40rem] xl:min-h-[35.625rem] py-30">
      <div className="container relative z-2">
        <div className="mb-20 text-h0-desktop 2xl:text-h0-tablet md:text-h0-mobile">
          Financial planning
        </div>
        <div className="max-w-[29.25rem] text-2xl text-color-6 2xl:text-xl md:text-lg">
          Our team is available to learn about your financial planning needs and
          connect you with the appropriate advisor to provide assistance.
        </div>
      </div>
      <div className="absolute inset-0 left-[28vw] after:absolute after:inset-0 after:bg-color-1/80 md:left-0">
        <Image
          className="object-cover"
          src="/images/bg-services.jpg"
          fill
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
