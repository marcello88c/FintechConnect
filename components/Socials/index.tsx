import { twMerge } from "tailwind-merge";

type SocialsProps = {
    className?: string;
    items?: any;
};

const Socials = ({ className, items }: SocialsProps) => (
    <div
        className={twMerge(
            `flex space-x-8 lg:space-x-6 md:space-x-4 ${className || ""}`
        )}
    >
        {items.map((item: any) => (
            <a
                className="group flex justify-center items-center w-16 h-16 bg-color-2 rounded-full transition-colors hover:bg-color-4"
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                key={item.id}
            >
                <svg
                    className="fill-color-1 transition-colors group-hover:fill-color-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <path d={item.icon} />
                </svg>
            </a>
        ))}
    </div>
);

export default Socials;
