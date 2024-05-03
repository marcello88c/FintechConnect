import Link from "next/link";
import Image from "@/components/Image";

import { blog } from "@/mocks/blog";

type ArticlesProps = {};

const Articles = ({}: ArticlesProps) => {
    return (
        <div className="section-light">
            <div className="container">
                <div className="label-dark">ARTICLE</div>
                <div className="max-w-[50.32rem] mb-28 text-h1-desktop 2xl:mb-20 2xl:text-h1-tablet xl:mb-16 md:text-h4">
                    Recent articles
                </div>
                <div className="flex flex-wrap -mb-22 -mx-5 md:-mb-16">
                    {blog.slice(0, 2).map((article) => (
                        <Link
                            className="group w-[calc(50%-2.5rem)] mb-22 mx-5 md:w-[calc(100%-2.5rem)] md:mb-16"
                            key={article.id}
                            href={`/blog/${article.id}`}
                        >
                            <div className="relative aspect-[1.275] mb-16 xl:mb-10">
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
                            <div className="text-h5 transition-colors group-hover:text-color-4 xl:text-h6 lg:text-h7">
                                {article.title}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Articles;
