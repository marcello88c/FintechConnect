import Image from "@/components/Image";

type HeroProps = {};

const Hero = ({}: HeroProps) => {
    return (
        <div className="relative pt-30 pb-44 2xl:pb-40 md:py-24">
            <div className="container relative z-2">
                <div className="mb-18 text-h0-desktop 2xl:max-w-[51.25rem] 2xl:text-h0-tablet md:mb-10 md:text-h0-mobile">
                We are resolutely dedicated to upholding our core principles.
                </div>
                <div className="max-w-[29.25rem] text-2xl text-color-7 xl:text-xl md:text-lg">
                We deeply value our steadfast dedication to delivering the utmost level of service attainable, a source of great pride for us.
                </div>
            </div>
            <div className="absolute inset-0 after:absolute after:inset-0 after:bg-color-1/80">
                <Image
                    className="object-cover"
                    src="/images/bg-about.jpg"
                    fill
                    alt=""
                />
            </div>
        </div>
    );
};

export default Hero;
