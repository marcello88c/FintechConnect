import Image from "@/components/Image";

type ItemProps = {
    item: any;
};

const Item = ({ item }: ItemProps) => (
    <div>
        <div className="relative h-[33.75rem] mb-10 xl:h-[23.75rem]">
            <Image
                className="object-cover"
                src={item.photo}
                sizes="(max-width: 768px) 100vw, 33vw"
                fill
                alt=""
            />
        </div>
        <div className="mb-2 text-h6">{item.name}</div>
        <div className="text-color-7">{item.position}</div>
    </div>
);

export default Item;
