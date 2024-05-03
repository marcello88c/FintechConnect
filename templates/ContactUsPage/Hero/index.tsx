type HeroProps = {};

const Hero = ({}: HeroProps) => {
    return (
        <div className="relative -mt-[6.75rem] pt-[14.125rem] pb-50 bg-color-3 2xl:pb-40 2xl:-mt-24 lg:pt-50 md:-mt-18 md:pt-48">
            <div className="container">
                <div className="mb-22 text-h0-desktop text-color-1 2xl:mb-18 2xl:text-h0-tablet md:mb-16 md:text-h0-mobile">
                    Contact Us
                </div>
                <div className="max-w-[29.25rem] text-xl text-color-5 md:text-base">
                    Let’s discuss your project, together we will find a solution
                    to the most difficult tasks
                </div>
            </div>
        </div>
    );
};

export default Hero;
