import Accordion from "@/components/Accordion";

import { services1 } from "@/mocks/services";

type ServicesProps = {};

const Services = ({}: ServicesProps) => {
    return (
        <div className="section">
            <div className="container">
                <div className="label">SERVICES</div>
                <div className="max-w-[48rem] mb-30 text-h1-desktop 2xl:mb-24 2xl:text-h1-tablet md:mb-16 md:text-h1-mobile">
                    Customized strategies for your financial success
                </div>
                <div>
                    {services1.map((service, index) => (
                        <Accordion
                            className="mb-20 last:mb-0"
                            item={service}
                            key={service.id}
                            index={index + 1}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
