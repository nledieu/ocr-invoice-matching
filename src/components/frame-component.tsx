import type { NextPage } from "next";
import FrameComponent1 from "./frame-component1";

const FrameComponent: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[7.718rem] text-center text-[2rem] text-black font-inter mq700:gap-[1.938rem] mq950:gap-[3.875rem]">
      <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.562rem] pl-[1.25rem]">
        <div className="w-[22.188rem] relative font-black inline-block z-[1] mq450:text-[1.188rem] mq950:text-[1.625rem]">
          <p className="m-0">{`Ne courrez plus après `}</p>
          <p className="m-0">vos fournisseurs</p>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-end justify-between gap-[1.25rem] text-[1.25rem] mq950:flex-wrap mq950:justify-center">
        <div className="w-[14.469rem] flex flex-col items-start justify-start py-[0rem] pr-[0.406rem] pl-[0rem] box-border">
          <div className="self-stretch shadow-[5px_5px_4px_rgba(0,_0,_0,_0.25)] rounded-6xl [background:linear-gradient(151.13deg,_rgba(2,_182,_215,_0.41),_rgba(1,_96,_113,_0.25))] flex flex-col items-start justify-start pt-[2.687rem] px-[1.062rem] pb-[4.687rem] gap-[1.687rem] z-[1]">
            <div className="w-[14.063rem] h-[18.938rem] relative shadow-[5px_5px_4px_rgba(0,_0,_0,_0.25)] rounded-6xl [background:linear-gradient(151.13deg,_rgba(2,_182,_215,_0.41),_rgba(1,_96,_113,_0.25))] hidden" />
            <div className="flex flex-row items-start justify-start py-[0rem] px-[4rem]">
              <img
                className="h-[3.938rem] w-[3.938rem] relative object-cover z-[2]"
                loading="lazy"
                alt=""
                src="/timesavings-13063129-1@2x.png"
              />
            </div>
            <div className="self-stretch relative z-[2] mq450:text-[1rem]">
              Gagnez du temps. Concentrez vous sur votre métier et vos clients
            </div>
          </div>
        </div>
        <FrameComponent1
          feature2="/feature-2.svg"
          anticipezVosDpensesAmlior="Anticipez vos dépenses. Améliorez vos marges"
        />
        <FrameComponent1
          feature2="/feature-3.svg"
          anticipezVosDpensesAmlior="Gardez un oeil sur vos prix. Apprenez à les exploiter "
          propPadding="2.718rem 0.656rem 2.687rem 1.468rem"
          propGap="1.25rem"
          propHeight="18.938rem"
          propPadding1="0rem 4rem"
        />
      </div>
    </div>
  );
};

export default FrameComponent;
