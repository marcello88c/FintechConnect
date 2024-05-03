import Image from "@/components/Image";

const investors = [
    "/images/zoom.png",
    "/images/caixa.png",
    "/images/casio.png",
    "/images/forbes.png",
];

type InvestorProps = {};

const Investor = ({}: InvestorProps) => {
    return (
        <div className="section-light">
            <div className="container">
                <div className="label-dark">INVESTOR</div>
                <div className="max-w-[33rem] mb-28 text-h1-desktop 2xl:mb-16 2xl:text-h1-tablet md:mb-8 md:text-h4">
                    Our capital provider
                </div>
                <div className="max-w-[60.875rem] mx-auto xl:max-w-[50rem]">
                    <div className="flex flex-wrap -mt-10 -mx-5 2xl:m-0 md:block">
                        {investors.map((investor, index) => (
                            <div
                                className="w-[calc(50%-2.5rem)] mt-10 mx-5 2xl:w-1/2 2xl:m-0 md:w-full"
                                key={index}
                            >
                                <Image
                                    className="w-full"
                                    src={investor}
                                    width={467}
                                    height={320}
                                    alt=""
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Investor;
