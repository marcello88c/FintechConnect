import Link from "next/link";
import { twMerge } from "tailwind-merge";
import Image from "@/components/Image";

import { blog } from "@/mocks/blog";

type BlogProps = {};

const Blog = ({}: BlogProps) => {
    return (
        <div className="section">
            <div className="container">
                <div className="label">BLOG</div>
                <div className="max-w-[50.32rem] mb-28 text-h1-desktop 2xl:text-h1-tablet xl:mb-20 md:mb-16 md:text-h1-mobile">
                    The latest market trends and insights
                </div>
                <div className="flex flex-wrap -mb-22 -mx-5 lg:-mb-16 md:block md:m-0 md:-mb-14">
                    {blog.map((article, index) => (
                        <Link
                            className={twMerge(
                                `group block w-[calc(50%-2.5rem)] mb-22 mx-5 lg:mb-16 md:w-full md:mx-0 md:mb-14 ${
                                    index === 0
                                        ? "w-[calc(62.5%-2.5rem)] mb-36 lg:mb-24 md:w-full md:mb-14"
                                        : ""
                                } ${
                                    index === 1
                                        ? "w-[calc(37.5%-2.5rem)] mb-36 lg:mb-24 md:w-full md:mb-14"
                                        : ""
                                }`
                            )}
                            key={article.id}
                            href={`/blog/${article.id}`}
                        >
                            <div
                                className={twMerge(
                                    `relative h-[31.25rem] mb-16 xl:h-[22.25rem] xl:mb-14 md:h-auto md:aspect-[1.36] md:mb-10 ${
                                        index === 0
                                            ? "h-[45rem] xl:h-[35rem] lg:h-[30rem]"
                                            : ""
                                    }`
                                )}
                            >
                                <Image
                                    className="object-cover"
                                    src={article.image}
                                    fill
                                    alt=""
                                />
                            </div>
                            <div className="mb-2 text-sm text-color-7">
                                {article.date}
                            </div>
                            <div
                                className={twMerge(
                                    `text-h5 transition-colors group-hover:text-color-4 xl:text-h6 lg:text-h7 ${
                                        index === 0
                                            ? "text-h3 xl:text-h5 lg:text-h6 md:text-h7"
                                            : ""
                                    }`
                                )}
                            >
                                {article.title}
                            </div>
                        </Link>
                    ))}
                </div>
                <button className="btn mt-30 text-lg tracking-[0.25em] xl:mt-20 md:mt-16">
                    VIEW MORE
                </button>
            </div>
        </div>
    );
};

export default Blog;
