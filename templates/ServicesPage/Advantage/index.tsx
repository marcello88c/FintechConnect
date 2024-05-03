import { advantage } from "@/constants/advantage";

type AdvantageProps = {};

const Advantage = ({}: AdvantageProps) => (
  <div className="section">
    <div className="container">
      <div className="label">ADVANTAGE</div>
      <div className="max-w-[50.32rem] mb-[4.125rem] text-h1-desktop 2xl:max-w-[38rem] 2xl:text-h1-tablet md:text-h4">
        Harnessing the advantages of financial well-being
      </div>
      <div className="flex flex-wrap -mt-24 2xl:-mt-20 md:-mt-12">
        {advantage.map((item, index) => (
          <div
            className="w-1/2 mt-24 pr-12 2xl:mt-20 md:w-full md:mt-12 md:pr-0"
            key={index}
          >
            <div className="relative mb-4 pb-1 text-lg uppercase text-color-7 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.25 after:bg-color-3">
              0{index + 1}
            </div>
            <div className="max-w-[25rem] mb-10 text-h3 2xl:max-w-[22rem] 2xl:text-h4 2xl:font-medium xl:max-w-[19rem] xl:text-h5">
              {item.title}
            </div>
            <div className="max-w-[29.25rem] text-color-7">{item.content}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Advantage;
