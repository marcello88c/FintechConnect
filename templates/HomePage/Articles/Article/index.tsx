import Link from "next/link";
import Image from "@/components/Image";

type ArticleProps = {
    item: any;
};

const Article = ({ item }: ArticleProps) => (
    <Link className="group" href={`/blog/${item.id}`}>
        <div className="relative h-[31.25rem] mb-16 xl:h-[22rem] xl:mb-10 md:h-[22.5rem]">
            <Image
                className="object-cover"
                src={item.image}
                sizes="(max-width: 768px) 100vw, 33vw"
                fill
                alt=""
            />
        </div>
        <div className="mb-4 uppercase text-sm text-color-7">{item.date}</div>
        <div className="text-h6 transition-colors group-hover:text-color-4 xl:text-h7">
            {item.title}
        </div>
    </Link>
);

export default Article;
