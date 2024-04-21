import type { NextPage } from "next";
import Navbar from "../components/navbar";
import FrameComponent from "../components/frame-component";

const DesktopHomePage: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start pt-[0rem] px-[0rem] pb-[12.687rem] box-border gap-[7.062rem] leading-[normal] tracking-[normal] mq450:gap-[1.75rem] mq950:gap-[3.5rem]">
      <img
        className="w-[129.938rem] h-[121.75rem] absolute !m-[0] bottom-[-39.937rem] left-[-11.25rem] object-cover"
        alt=""
        src="/31988-1@2x.png"
      />
      <Navbar />
      <section className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-center text-[1.5rem] text-white font-inter">
        <div className="w-[59.406rem] flex flex-col items-end justify-start gap-[5.187rem] max-w-full mq700:gap-[1.313rem] mq950:gap-[2.563rem]">
          <FrameComponent />
          <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.25rem] pl-[1.437rem]">
            <div className="w-[14.25rem] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(4px)] rounded-6xl bg-skyblue-200 flex flex-row items-start justify-start z-[1]">
              <div className="self-stretch w-[14.25rem] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(4px)] rounded-6xl bg-skyblue-200 hidden" />
              <b className="h-[3.063rem] flex-1 relative flex items-center justify-center z-[1] mq450:text-[1.188rem]">
                Sign-Up
              </b>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesktopHomePage;
