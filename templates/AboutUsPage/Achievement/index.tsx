import Image from "@/components/Image";

import { achievement } from "@/constants/achievement";

type AchievementProps = {};

const Achievement = ({}: AchievementProps) => {
    return (
        <div className="relative pt-40 pb-30 2xl:pb-40 md:py-24">
            <div className="container relative z-2">
                <div className="label">ACHIEVEMENT</div>
                <div className="max-w-[50.32rem] mb-36 text-h1-desktop 2xl:mb-24 2xl:text-h1-tablet md:mb-16 md:text-h1-mobile">
                    We are in the numbers
                </div>
                <div className="flex pr-[7.75rem] 2xl:pr-0 lg:flex-wrap lg:-mt-10 md:block md:mt-0">
                    {achievement.map((item, index) => (
                        <div
                            className="flex-1 pr-4 lg:flex-auto lg:w-1/2 lg:mt-10 md:w-full md:pr-0"
                            key={index}
                        >
                            <div className="mb-4 text-h2-desktop 2xl:text-h3 md:mb-2 md:text-h5">
                                {item.value}
                            </div>
                            <div className="text-color-7">{item.title}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute inset-0 after:absolute after:inset-0 after:bg-color-1/85">
                <Image
                    className="object-cover"
                    src="/images/bg-achievement.jpg"
                    fill
                    alt=""
                />
            </div>
        </div>
    );
};

export default Achievement;
