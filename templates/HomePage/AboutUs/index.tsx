import Link from "next/link";
import Image from "@/components/Image";

type AboutUsProps = {};

const AboutUs = ({}: AboutUsProps) => {
    return (
        <div className="section-light relative pt-[12.5rem] 2xl:pt-40 xl:pt-30 md:pt-24 md:pb-0">
            <div className="container">
                <div className="relative z-2 max-w-[45.88rem]">
                    <div className="label-dark">ABOUT US</div>
                    <div className="mb-18 text-h1-desktop 2xl:text-h1-tablet xl:mb-16 md:mb-10 md:text-h1-mobile">
                    Strengthening the prospects of your financial future.
                    </div>
                    <div className="max-w-[29.25rem] mb-10 text-color-5 xl:max-w-[28rem] lg:max-w-[20rem]">
                    We recognize that financial planning can appear intricate and overwhelming for both individuals and businesses. That's precisely why we're available to support you throughout the entire process, offering customized solutions that match your distinct financial needs.
                    </div>
                    <Link className="btn-blue" href="/about-us">
                        LEARN MORE
                    </Link>
                </div>
            </div>
            <div className="absolute top-[12rem] right-0 bottom-0 w-[37vw] 2xl:top-40 2xl:w-[45vw] xl:top-30 xl:w-[48vw] md:relative md:inset-auto md:w-auto md:h-[30rem] md:mt-16">
                <Image
                    className="object-cover"
                    src="/images/image-2.jpg"
                    sizes="(max-width: 768px) 100vw, 36vw"
                    fill
                    alt=""
                />
            </div>
        </div>
    );
};

export default AboutUs;
