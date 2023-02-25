import React from "react";
import DesktopBg from "../../assets/home/background-home-desktop.jpg";

export default function Home() {
  return (
    <div className="border-[2px] border-[#000] h-[100vh] w-[100vw] overflow-hidden">
      <img
        src={DesktopBg}
        alt=""
        width={100}
        height={100}
        className="h-[100%] w-[100%]"
      />
      <div className="flex h-[100%]">
        <div className="basis-[50%] m-auto text-start">
          <h4 className="text-[#D0D6F9] text-[28px] font-[400] leading-normal tracking-wide">SO, YOU WANT TO TRAVEL TO</h4>
          <h2 className="text-[#000] text-[150px] font-[400] leading-normal">SPACE</h2>
          <p className="w-[20rem] text-[#D0D6F9] text-[18px] font-[400] leading-normal">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="basis-[50%] m-auto text-start">
            <div>
                <div className="bg-[#000] h-[10rem] w-[10rem] text-[#fff]"
                style={{
                    borderRadius: '50%'
                }}
                >
                EXPLORE
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
