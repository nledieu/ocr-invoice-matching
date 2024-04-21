import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponent1Type = {
  feature2?: string;
  anticipezVosDpensesAmlior?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propGap?: CSSProperties["gap"];
  propHeight?: CSSProperties["height"];
  propPadding1?: CSSProperties["padding"];
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({
  feature2,
  anticipezVosDpensesAmlior,
  propPadding,
  propGap,
  propHeight,
  propPadding1,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      gap: propGap,
      height: propHeight,
    };
  }, [propPadding, propGap, propHeight]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div
      className="w-[14.063rem] shadow-[5px_5px_4px_rgba(0,_0,_0,_0.25)] rounded-6xl [background:linear-gradient(151.13deg,_rgba(2,_182,_215,_0.41),_rgba(1,_96,_113,_0.25))] flex flex-col items-start justify-start pt-[2.687rem] px-[1.062rem] pb-[4.687rem] box-border gap-[1.687rem] z-[1] text-center text-[1.25rem] text-black font-inter"
      style={frameDivStyle}
    >
      <img
        className="w-[14.063rem] h-[18.938rem] relative rounded-6xl hidden"
        alt=""
        src={feature2}
      />
      <div
        className="flex flex-row items-start justify-start py-[0rem] px-[3.625rem]"
        style={frameDiv1Style}
      >
        <img
          className="h-[3.938rem] w-[3.938rem] relative object-cover z-[2]"
          loading="lazy"
          alt=""
          src="/timesavings-13063129-1@2x.png"
        />
      </div>
      <div className="self-stretch relative z-[2] mq450:text-[1rem]">
        {anticipezVosDpensesAmlior}
      </div>
    </div>
  );
};

export default FrameComponent1;
