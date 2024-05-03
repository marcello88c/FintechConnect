import { useState } from "react";
import Image from "@/components/Image";
import Play from "@/components/Play";
import Modal from "@/components/Modal";

type DetailsProps = {};

const Details = ({}: DetailsProps) => {
  const [visibleModal, setVisibleModal] = useState<boolean>(false);

  return (
    <>
      <div className="section-light">
        <div className="container">
          <div className="max-w-[60.875rem] mb-18 text-h3 2xl:text-h4 2xl:font-medium xl:max-w-[43.75rem] xl:text-h5 md:-mr-2">
            Navigating Financial Independence for Millennials: Establishing
            Objectives and Attaining Financial Autonomy
          </div>
          <div
            className="group relative cursor-pointer tap-highlight-color"
            onClick={() => setVisibleModal(true)}
          >
            <Image
              className="w-full md:min-h-[15rem] md:object-cover"
              src="/images/image-7.jpg"
              width={1312}
              height={720}
              alt=""
            />
            {/* <Play className="absolute left-3 bottom-3 group-hover:bg-color-4 group-hover:fill-color-2" /> */}
          </div>
        </div>
      </div>
      {/* <Modal
        visible={visibleModal}
        onClose={() => setVisibleModal(false)}
        video
      >
        <video className="" autoPlay muted loop playsInline>
          <source src="/videos/video-1.mp4" type="video/mp4" />
        </video>
      </Modal> */}
    </>
  );
};

export default Details;
