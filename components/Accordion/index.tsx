import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import Image from "@/components/Image";

type AccordionProps = {
    className?: string;
    item: any;
    index?: any;
};

const Accordion = ({ className, item, index }: AccordionProps) => {
    return (
        <Disclosure
            className={`relative ${className || ""} ${
                item.image
                    ? "ui-open:min-h-[36rem] xl:ui-open:min-h-[27.5rem]"
                    : ""
            }`}
            defaultOpen={item.defaultOpen}
            as="div"
        >
            <Disclosure.Button
                className={`group relative z-1 cursor-pointer tap-highlight-color ${
                    item.image
                        ? "pr-[41.6875rem] xl:pr-[30.375rem] lg:pr-[7.75rem] md:pr-20"
                        : "pr-[10.5rem] xl:pr-[7.75rem] md:pr-20"
                }`}
                as="div"
            >
                {index && (
                    <div className="label mb-6 text-color-2">
                        {index < 10 && "0"}
                        {index}
                    </div>
                )}
                <div className="text-h2-desktop text-color-2 transition-colors group-hover:text-color-4 ui-open:!text-color-4 2xl:text-h2-tablet 2xl:group-hover:text-color-2 md:text-h6">
                    {item.title}
                </div>
                <div className="absolute right-0 bottom-0 w-16 h-16 rounded-full bg-color-2 transition-colors before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-4 before:h-0.5 before:bg-color-1 after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-0.5 after:h-4 after:bg-color-1 after:transition-all ui-open:bg-color-4 ui-open:after:rotate-90 ui-open:after:bg-color-2 ui-open:before:bg-color-2 md:top-0 md:bottom-auto"></div>
            </Disclosure.Button>
            <Disclosure.Panel
                className={`pt-14 md:pt-10 ${
                    item.image
                        ? "pr-[41.6875rem] xl:pr-[30.375rem] lg:pr-0"
                        : "pr-[10.5rem] xl:pr-[7.75rem] lg:pr-0"
                }`}
            >
                <div
                    className={`text-color-7 ${
                        item.image
                            ? "max-w-[29.25rem] xl:max-w-full lg:max-w-full"
                            : ""
                    }`}
                >
                    {item.content}
                </div>
                {item.url && (
                    <Link className="btn mt-10" href={item.url}>
                        LEARN MORE
                    </Link>
                )}
                {item.image && (
                    <div className="absolute top-0 left-[calc(100%-39.6875rem)] right-[10.5rem] bottom-4 max-h-[35rem] xl:left-[calc(100%-27.375rem)] xl:right-[7.75rem] xl:bottom-0 xl:max-h-[27.5rem] lg:relative lg:top-auto lg:left-auto lg:right-auto lg:bottom-auto lg:h-[27.5rem] lg:mx-auto lg:mt-16 md:h-[25rem]">
                        <Image
                            className="object-cover"
                            src={item.image}
                            sizes="(max-width: 768px) 100vw, 44vw"
                            fill
                            alt=""
                        />
                    </div>
                )}
            </Disclosure.Panel>
        </Disclosure>
    );
};

export default Accordion;
