import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Article from "./Article";

import { articles } from "@/mocks/articles";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Pagination, Scrollbar } from "swiper/modules";

type ArticlesProps = {};

const Articles = ({}: ArticlesProps) => {
    return (
        <div className="section-light">
            <div className="container">
                <div className="label">ARTICLE</div>
                <div className="mb-30 text-h1-desktop 2xl:text-h1-tablet xl:mb-20 md:mb-16 md:text-h1-mobile">
                    The finance insider
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
                        {articles.map((article: any) => (
                            <SwiperSlide key={article.id}>
                                <Article item={article} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="absolute top-[15.125rem] left-[calc(50%+5.25rem)] z-2 flex justify-center items-center w-50 h-50 -translate-x-1/2 rounded-full bg-color-4 font-normal text-xl text-color-2 pointer-events-none transition-all group-hover:invisible group-hover/slider:opacity-0 group-hover/slider:scale-75 xl:top-[10.5rem] xl:w-40 xl:h-40 lg:hidden">
                        DRAG
                    </div>
                </div>
                <Link className="btn-blue mt-22 md:mt-16" href="/blog">
                    LEARN MORE
                </Link>
            </div>
        </div>
    );
};

export default Articles;
