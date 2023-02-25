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
      <div className="flex border-2 border-[#000]">
        <div className=""></div>
        <div className=""></div>
      </div>
    </div>
  );
}
