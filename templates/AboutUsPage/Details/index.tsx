import Image from "@/components/Image";
import Accordion from "@/components/Accordion";

import { timeline } from "@/constants/timeline";

type DetailsProps = {};

const Details = ({}: DetailsProps) => {
    return (
        <div className="section">
            <div className="relative min-h-[52rem] mb-30 2xl:min-h-[48rem] xl:min-h-[44rem] md:min-h-min md:mb-20">
                <div className="container">
                    <div className="relative z-2 max-w-[60vw] pr-20 md:max-w-full md:pr-0">
                        <div className="label">WHO WE ARE</div>
                        <div className="max-w-[42.25rem] mb-18 text-h1-desktop 2xl:text-h1-tablet md:mb-12 md:text-h4">
                            Our dedicated team comprising financial consultants
                        </div>
                        <div className="max-w-[29.25rem] text-color-7">
                        We are a group of seasoned financial advisors focused on aiding individuals and businesses in attaining financial prosperity. 
                        Leveraging years of experience in the financial sector, we pledge to offer customized financial strategies aligned with our clients' specific objectives. <br></br>
                        Our team consists of proficient financial experts deeply committed to empowering clients to manage their financial destinies. 
                        We prioritize fostering enduring partnerships founded on trust and honesty, delivering outstanding service with the highest standards of professionalism and discretion.
                        </div>
                    </div>
                </div>
                <div className="absolute top-8 right-0 bottom-0 w-[37vw] max-h-[50rem] 2xl:top-0 md:relative md:inset-auto md:w-auto md:h-[35rem] md:mt-16">
                    <Image
                        className="object-cover"
                        src="/images/image-5.jpg"
                        sizes="(max-width: 768px) 100vw, 36vw"
                        fill
                        alt=""
                    />
                </div>
            </div>
            <div className="">
                <div className="container">
                    {timeline.map((item) => (
                        <Accordion
                            className="mb-18 last:mb-0"
                            item={item}
                            key={item.id}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Details;
