import { useState } from "react";
import Image from "@/components/Image";
import Play from "@/components/Play";
import Modal from "@/components/Modal";

type WebinarProps = {
    item: any;
};

const Webinar = ({ item }: WebinarProps) => {
    const [visibleModal, setVisibleModal] = useState<boolean>(false);

    return (
        <>
            <div
                className="group flex items-end mb-16 cursor-pointer tap-highlight-color last:mb-0 xl:mb-12 md:block"
                onClick={() => setVisibleModal(true)}
            >
                <div className="relative w-1/2 pr-5 xl:w-[62%] xl:pr-0 lg:w-[55%] md:w-full">
                    <div className="relative h-[25rem] xl:h-[23rem] lg:h-[18rem] md:h-60">
                        <Image
                            className="object-cover"
                            src={item.image}
                            sizes="(max-width: 768px) 100vw, 44vw"
                            fill
                            alt=""
                        />
                        <Play className="absolute left-3 bottom-3 group-hover:bg-color-4 group-hover:fill-color-2" />
                    </div>
                </div>
                <div className="w-1/2 pl-5 xl:w-[38%] xl:pl-10 lg:w-[45%] lg:pl-6 md:w-full md:pt-4 md:pl-0">
                    <div className="label-dark text-color-5">
                        EPS {item.number}
                    </div>
                    <div className="max-w-[29.25rem] text-h5 transition-colors group-hover:text-color-4 xl:text-h6">
                        {item.title}
                    </div>
                </div>
            </div>
            <Modal
                visible={visibleModal}
                onClose={() => setVisibleModal(false)}
                video
            >
                <video className="" autoPlay muted loop playsInline>
                    <source src={item.video} type="video/mp4" />
                </video>
            </Modal>
        </>
    );
};

export default Webinar;
