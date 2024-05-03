import Webinar from "./Webinar";

import { webinars } from "@/mocks/webinars";

type WebinarsProps = {};

const Webinars = ({}: WebinarsProps) => {
    return (
        <div className="section-light">
            <div className="container">
                <div className="label-dark">WEBINARS</div>
                <div className="max-w-[50.32rem] mb-30 text-h1-desktop 2xl:text-h1-tablet xl:mb-20 md:mb-12 md:-mr-2 md:text-h1-mobile">
                    Building stable financial future
                </div>
                <div className="">
                    {webinars.map((webinar) => (
                        <Webinar item={webinar} key={webinar.id} />
                    ))}
                </div>
                <button className="btn mt-30 xl:mt-20 md:mt-12">
                    VIEW MORE
                </button>
            </div>
        </div>
    );
};

export default Webinars;
