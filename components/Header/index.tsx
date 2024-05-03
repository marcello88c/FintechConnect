import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import Logo from "@/components/Logo";

import { navigation } from "@/constants/navigation";

type HeaderProps = {
    light?: boolean;
};

const Header = ({ light }: HeaderProps) => {
    const pathname = usePathname();
    const [headerStyle, setHeaderStyle] = useState<boolean>(false);
    const [visible, setVisible] = useState<boolean>(false);

    const toggleMenu = () => {
        setVisible(!visible);
        if (visible) {
            enablePageScroll();
        } else {
            disablePageScroll();
        }
    };

    const closeMenu = () => {
        setVisible(false);
        enablePageScroll();
    };

    useScrollPosition(({ currPos }) => {
        setHeaderStyle(currPos.y <= -1);
    });

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-10 transition-shadow ${
                light ? "bg-color-3" : "bg-color-1"
            } ${headerStyle ? "shadow-xl" : ""}`}
        >
            <div className="container flex items-center h-[6.75rem] 2xl:h-24 md:h-18">
                <Logo className="mr-auto md:w-32" light={light} />
                <button
                    className={`hidden relative z-20 flex-col justify-center items-center w-10 h-10 -mr-2 tap-highlight-color before:w-4 before:h-0.5 before:my-0.75 before:transition-all after:w-4 after:h-0.5 after:my-0.75 after:transition-all xl:flex ${
                        light
                            ? "before:bg-color-1 after:bg-color-1"
                            : "before:bg-color-2 after:bg-color-2"
                    } ${
                        visible
                            ? "before:rotate-45 before:translate-y-[0.245rem] after:-rotate-45 after:-translate-y-[0.245rem] before:!bg-color-1 after:!bg-color-1"
                            : ""
                    }`}
                    onClick={toggleMenu}
                ></button>
                <div
                    className={twMerge(
                        `flex items-center xl:fixed xl:z-10 xl:top-0 xl:right-0 xl:bottom-0 xl:flex-col xl:items-stretch xl:w-80 xl:px-8 xl:pt-20 xl:pb-6 xl:translate-x-full xl:bg-color-2 xl:transition-transform xl:overflow-auto md:pt-18 ${
                            visible ? "xl:translate-x-0" : ""
                        }`
                    )}
                >
                    <div className="flex mr-14 2xl:mr-10 xl:flex-col xl:mr-0 xl:mb-10">
                        {navigation.map((link) => (
                            <div
                                className="group relative mr-8 last:mr-0 2xl:mr-6 xl:mr-0 xl:mb-6 xl:last:mb-0"
                                key={link.id}
                            >
                                <Link
                                    className={`flex items-center px-1 py-7 uppercase font-normal tracking-[0.15em] transition-colors group-hover:text-color-4 xl:font-semibold xl:p-0 ${
                                        light
                                            ? "text-color-1"
                                            : "text-color-3 xl:text-color-1"
                                    } ${
                                        pathname === link.url
                                            ? "!text-color-4"
                                            : ""
                                    }`}
                                    href={link.url}
                                >
                                    {link.title}
                                    {link.items && (
                                        <svg
                                            className={`ml-1 transition-all group-hover:rotate-180 group-hover:fill-color-4 xl:hidden ${
                                                light
                                                    ? "fill-color-1"
                                                    : "fill-color-3"
                                            } ${
                                                pathname === link.url
                                                    ? "!fill-color-4"
                                                    : ""
                                            }`}
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M18.29 7.41l1.419 1.41-7.709 7.76L4.29 8.82l1.419-1.41 6.291 6.332z" />
                                        </svg>
                                    )}
                                </Link>
                                {link.items && (
                                    <div
                                        className={`absolute top-full -left-6 w-72 translate-y-2 p-6 shadow-2xl invisible opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 xl:static xl:w-full xl:translate-y-0 xl:p-0 xl:pt-4 xl:pl-4 xl:shadow-none xl:visible xl:opacity-100 xl:transition-none ${
                                            light
                                                ? "bg-color-1 xl:bg-transparent"
                                                : "bg-color-2 xl:bg-transparent"
                                        }`}
                                    >
                                        {link.items.map((item) => (
                                            <Link
                                                className={`block mb-4 p-1 font-normal tracking-[0.14em] transition-colors last:mb-0 hover:!text-color-4 xl:p-0 ${
                                                    light
                                                        ? "text-color-2 xl:text-color-1"
                                                        : "text-color-1"
                                                }`}
                                                href={item.url}
                                                key={item.id}
                                            >
                                                {item.title}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    <button className="btn xl:mt-auto">GET STARTED</button>
                </div>
            </div>
            <div
                className={twMerge(
                    `hidden fixed inset-0 z-5 bg-color-1/90 xl:block xl:invisible xl:opacity-0 xl:transition-all ${
                        visible ? "xl:visible xl:opacity-100" : ""
                    }`
                )}
                onClick={closeMenu}
            ></div>
        </header>
    );
};

export default Header;
