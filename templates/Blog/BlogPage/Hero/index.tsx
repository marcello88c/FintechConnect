type HeroProps = {};

const Hero = ({}: HeroProps) => {
    return (
        <div className="relative min-h-[39.88rem] -mt-[6.75rem] pt-[14.125rem] pb-30 bg-color-3 2xl:-mt-24 md:min-h-[38rem] md:-mt-18 md:pt-[12.5rem]">
            <div className="container">
                <div className="mb-18 text-h0-desktop text-color-1 2xl:text-h0-tablet md:text-h0-mobile">
                    We love to share stuff
                </div>
                <div className="max-w-[29.25rem] text-2xl text-color-5 xl:text-xl md:text-lg">
                    News, articles and whitepapers from our team of experts on
                    how data and technology is transforming financial planner.
                </div>
            </div>
        </div>
    );
};

export default Hero;
