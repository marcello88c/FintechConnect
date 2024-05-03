import { Swiper, SwiperSlide } from "swiper/react";
import Item from "./Item";

import { team } from "@/constants/team";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Pagination, Scrollbar } from "swiper/modules";

type TeamProps = {};

const Team = ({}: TeamProps) => {
    return (
        <div className="section">
            <div className="container">
                <div className="label">TEAM</div>
                <div className="max-w-[50.32rem] mb-28 text-h1-desktop 2xl:mb-20 2xl:text-h1-tablet md:mb-16 md:text-h0-mobile">
                    The experts behind our success
                </div>
                <div className="group/slider relative">
                    <Swiper
                        className="slider"
                        slidesPerView={3}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        scrollbar={{
                            hide: true,
                        }}
                        pagination={{
                            type: "fraction",
                            formatFractionCurrent: function (number) {
                                return number < 10 ? "0" + number : number;
                            },
                            formatFractionTotal: function (number) {
                                return number < 10 ? "0" + number : number;
                            },
                        }}
                        grabCursor={true}
                        navigation={false}
                        modules={[Pagination, Scrollbar]}
                    >
                        {team.map((item: any) => (
                            <SwiperSlide key={item.id}>
                                <Item item={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="absolute top-[14rem] left-[calc(50%+5.25rem)] z-2 flex justify-center items-center w-50 h-50 -translate-x-1/2 rounded-full bg-color-4 font-normal text-xl text-color-2 pointer-events-none transition-all group-hover:invisible group-hover/slider:opacity-0 group-hover/slider:scale-75 2xl:top-[20rem] xl:hidden">
                        DRAG
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
