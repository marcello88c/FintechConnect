import Image from "@/components/Image";

type HeroProps = {};

const Hero = ({}: HeroProps) => {
    return (
        <div className="relative pt-30 pb-56 2xl:pb-40 xl:pt-24 xl:pb-30 md:pt-[15.5rem] md:pb-24">
            <div className="container">
                <div className="relative z-2 max-w-[50.32rem] 2xl:max-w-[42rem]">
                    <div className="mb-22 text-h0-desktop 2xl:text-h0-tablet xl:mb-18 md:mb-8 md:text-h1-mobile">
                        Safeguard your assets through effective risk management.
                    </div>
                    <div className="max-w-[29.25rem] mb-12 text-color-7 xl:w-[20.625rem] md:mb-6">
                    Our dedication to delivering outstanding service begins with our team members. We meticulously choose and train each member to ensure they possess the necessary skills.
                    </div>
                    <button className="btn-blue text-lg tracking-[0.25em]">
                        GET STARTED
                    </button>
                </div>
            </div>
            <div className="absolute top-0 right-0 bottom-0 w-[58vw] after:absolute after:inset-0 after:bg-color-1/30 4xl:w-[59vw] 2xl:w-[50vw] xl:w-[60vw] lg:w-[48vw] md:bottom-auto md:w-[70vw] md:h-[21.375rem]">
                <Image
                    className="object-cover"
                    src="/images/image-1.jpg"
                    sizes="(max-width: 768px) 100vw, 60vw"
                    fill
                    alt=""
                />
            </div>
        </div>
    );
};

export default Hero;
