import Link from "next/link";
import Socials from "@/components/Socials";

import { navigation } from "@/constants/navigation";
import { socialsFooter } from "@/constants/socials";

type FooterProps = {};

const Footer = ({}: FooterProps) => (
    <footer className="section-light pb-14 xl:pb-16">
        <div className="container">
            <div className="label-dark">CONTACT US</div>
            <div className="flex mt-25 space-x-10 2xl:mt-30 xl:mt-20 md:block md:space-x-0 md:mt-16">
                <div className="flex flex-col items-start w-[50%] lg:w-[35%] md:w-full">
                    {navigation.map((link) => (
                        <Link
                            className="flex items-center mb-1 p-1 text-3xl uppercase tracking-[0.15em] transition-colors hover:text-color-4 last:mb-0 2xl:text-2xl xl:text-lg"
                            href={link.url}
                            key={link.id}
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>
                <div className="w-[50%] lg:w-[65%] md:w-auto md:mt-16">
                    <div className="flex mb-22 space-x-10 xl:mb-16 md:block md:space-x-0">
                        <div className="w-1/2 lg:w-auto">
                            <div className="mb-4 p-1 text-color-5 md:mb-2">
                                ADDRESS
                            </div>
                            <div className="p-1 text-xl tracking-[0.025em] xl:text-base md:text-lg">
                                Green Lane, London, SW1,
                                UNITED KINGDOM
                            </div>
                        </div>
                        <div className="w-1/2 lg:w-auto lg:shrink-0 lg:ml-6 md:mt-6 md:ml-0">
                            <div className="mb-4 p-1 text-color-5 md:mb-2">
                                PHONE NUMBER
                            </div>
                            <div className="p-1 text-xl tracking-[0.025em] xl:text-base md:text-lg">
                            +44 2036 915 893
                            </div>
                        </div>
                    </div>
                    <Socials items={socialsFooter} />
                </div>
            </div>
            <div className="flex mt-30 space-x-10 2xl:mt-30 xl:mt-20 md:flex-col-reverse md:space-x-0">
                <div className="w-1/2 lg:w-auto lg:mr-auto md:mt-8">
                    <div className="text-color-5">
                    <script>document.write(new Date().getFullYear());</script> © 2024 - FintechConnect. All right reserved.
                    </div>
                </div>
                <div className="flex w-1/2 lg:w-auto lg:ml-6 md:flex-col md:items-start md:w-auto">
                    <a
                        className="mr-14 text-color-5 transition-colors hover:text-color-1 lg:mr-8 md:mr-0 md:mb-4"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Privacy policy
                    </a>
                    <a
                        className="text-color-5 transition-colors hover:text-color-1"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Terms of conditions
                    </a>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
