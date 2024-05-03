import Image from "@/components/Image";
import Socials from "@/components/Socials";

import { blog } from "@/mocks/blog";
import { socialsArticle } from "@/constants/socials";

const detailsArticle = [
    {
        title: "Understanding tax planning",
        content:
            "Tax planning is the process of analyzing your financial situation and structuring your financial activities in a way that minimizes your overall tax liability. It involves taking advantage of tax deductions, credits, exemptions, and other incentives offered by the tax code. A well-thought-out tax plan can help you legally reduce your tax burden and keep more of your money to invest, save, or spend on your financial goals.",
    },
    {
        title: "Save money",
        content:
            "One of the primary benefits of tax planning is the opportunity to save money. By identifying and utilizing tax deductions, credits, exemptions, and other incentives, you can lower your taxable income, which in turn reduces the amount of tax you owe. This can result in significant savings, allowing you to keep more of your hard-earned money to use for other financial purposes, such as investing, saving, or paying off debt.",
    },
    {
        title: "Optimize investment returns",
        content:
            "Taxes can have a significant impact on your investment returns. Tax-efficient investment strategies, such as investing in tax-advantaged retirement accounts or taking advantage of capital gains tax rates, can help you maximize your investment returns over the long term. By strategically managing your investments with an eye on tax implications, you can minimize the impact of taxes on your investment gains, allowing your investments to grow more effectively.",
    },
    {
        title: "Plan for major financial events",
        content:
            "Tax planning is essential when it comes to major financial events, such as buying a home, starting a business, or planning for retirement. These events often have significant tax implications, and proper tax planning can help you make informed decisions to minimize the tax impact. For example, understanding the tax deductions and credits available for homebuyers or the tax implications of different retirement account options can help you plan strategically and save on taxes, allowing you to achieve your financial goals more effectively.",
    },
];

type HeroProps = {
    id: string;
};

const Hero = ({ id }: HeroProps) => {
    const article = blog.find((blog) => blog.id === id);

    return article ? (
        <div className="pt-30 pb-50 2xl:pb-40 xl:pt-24 xl:pb-30 md:pb-24">
            <div className="container">
                <div className="max-w-[71.5rem] mb-30 text-h0-desktop 2xl:max-w-[48rem] 2xl:text-h0-tablet xl:mb-24 md:text-h1-mobile">
                    {article.title}
                </div>
                <div className="relative lg:pb-[11.375rem]">
                    <div className="flex mb-22 lg:block md:mb-18">
                        <div className="flex flex-col shrink-0 w-[31.75rem] pr-10 xl:w-[23.125rem] lg:w-full lg:pr-0 lg:mb-16">
                            <div className="flex mb-auto">
                                <div className="w-[8.125rem] xl:w-20">
                                    <Image
                                        className="w-full"
                                        src="/images/photo-author.jpg"
                                        width={130}
                                        height={160}
                                        alt=""
                                    />
                                </div>
                                <div className="pl-10 lg:pt-0 md:pl-4">
                                    <div className="mb-2 uppercase text-sm text-color-7">
                                        {article.date}
                                    </div>
                                    <div className="">Pierlugui Giglio</div>
                                </div>
                            </div>
                            <div className="lg:absolute lg:left-0 lg:bottom-0">
                                <div className="mb-6 text-xl">Share post:</div>
                                <Socials
                                    className="space-x-6"
                                    items={socialsArticle}
                                />
                            </div>
                        </div>
                        <div className="grow">
                            <div className="relative max-h-[53.75rem] aspect-square">
                                <Image
                                    className="object-cover"
                                    src={article.image}
                                    fill
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex lg:block">
                        <div className="shrink-0 w-[31.75rem] pr-10 xl:w-[23.125rem] lg:w-full lg:pr-0"></div>
                        <div className="grow">
                            <div className="max-w-[29.25rem] mb-30 text-color-7 xl:mb-24 lg:max-w-full">
                                Tax planning is an essential part of managing
                                your finances effectively. It involves
                                understanding the intricacies of the tax code
                                and leveraging various tax strategies to
                                minimize your tax liability and maximize your
                                financial gains. With proper tax planning, you
                                can optimize your tax strategy and keep more of
                                your hard-earned money in your pocket. In this
                                article, we will explore key tips and strategies
                                to help you navigate tax planning and make
                                informed decisions to optimize your tax strategy
                            </div>
                            <div className="">
                                {detailsArticle.map((item, index) => (
                                    <div
                                        className="mb-20 last:mb-0 xl:mb-16"
                                        key={index}
                                    >
                                        <div className="relative mb-2 pb-2 text-lg uppercase text-color-7 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.25 after:bg-color-7">
                                            0{index + 1}
                                        </div>
                                        <div className="max-w-[39.75rem] mb-10 text-h3 2xl:text-h4 2xl:font-medium lg:max-w-full md:text-h5">
                                            {item.title}
                                        </div>
                                        <div className="max-w-[29.25rem] text-color-7 lg:max-w-full">
                                            {item.content}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : null;
};

export default Hero;
