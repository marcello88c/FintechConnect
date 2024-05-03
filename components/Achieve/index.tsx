import Image from "@/components/Image";

type AchieveProps = {};

const Achieve = ({}: AchieveProps) => (
    <div className="relative">
        <div className="absolute top-0 left-0 bottom-0 w-[calc(50%-1.25rem)] after:absolute after:inset-0 after:bg-color-1/40 2xl:w-[calc(50%+2.7rem)] xl:w-[48%] md:w-full md:after:absolute md:after:inset-0 md:after:bg-color-1/80">
            <Image
                className="object-cover"
                src="/images/image-4.jpg"
                sizes="(max-width: 768px) 100vw, 36vw"
                fill
                alt=""
            />
        </div>
        <div className="relative z-2 container flex justify-end items-center min-h-[59.3125rem] py-20 2xl:min-h-[47rem] md:min-h-min md:py-24">
            <div className="max-w-[50.3125rem] xl:max-w-[35.625rem]">
                <div className="mb-18 text-h0-desktop 2xl:max-w-[44.1rem] 2xl:text-h0-tablet md:mb-12 md:text-h0-mobile">
                    Achieve your financial goals
                </div>
                <div className="max-w-[29.25rem] ml-auto pr-[10.625rem] xl:max-w-[20.5rem] xl:pr-0 md:max-w-full">
                    <div className="text-color-7">
                    Embark on your journey with our innovative solutions and deep financial industry knowledge, equipping you with the necessary tools, insights, and strategies to begin. 
                    </div>
                    <button className="btn-blue mt-10 text-lg tracking-[0.25em]">
                        GET STARTED
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default Achieve;
