import type { NextPage } from "next";

const Navbar: NextPage = () => {
  return (
    <header className="self-stretch [backdrop-filter:blur(4px)] bg-skyblue-100 flex flex-row items-start justify-between py-[1.312rem] pr-[0.625rem] pl-[1.437rem] box-border top-[0] z-[99] sticky max-w-full gap-[1.25rem] text-left text-[1.5rem] text-black font-inter">
      <div className="h-[4.438rem] w-[90rem] relative [backdrop-filter:blur(4px)] bg-skyblue-100 hidden max-w-full" />
      <div className="w-[12rem] relative inline-block shrink-0 whitespace-nowrap z-[1]">
        Invoice Scanner
      </div>
      <nav className="m-0 w-[19.938rem] flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem] box-border mq700:hidden">
        <nav className="m-0 self-stretch flex flex-row items-start justify-start gap-[2rem] text-left text-[1.5rem] text-black font-inter mq450:gap-[1rem]">
          <div className="relative leading-[1.375rem] inline-block min-w-[4.688rem] z-[1]">
            About
          </div>
          <div className="flex-1 flex flex-row items-start justify-start">
            <div className="flex-1 relative leading-[1.375rem] z-[1]">
              Pricing
            </div>
            <div className="flex-1 relative leading-[1.375rem] z-[1]">
              Sign-in
            </div>
          </div>
        </nav>
      </nav>
    </header>
  );
};

export default Navbar;
