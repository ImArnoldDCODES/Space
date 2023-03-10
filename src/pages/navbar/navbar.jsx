import React from "react";
import Logo from "../../assets/shared/logo.svg";

export default function Navbar() {
  const navtext = [
    {
      title: "00 HOME",
    },
    {
      title: "01 DESTINATION",
    },
    {
      title: "02 CREW",
    },
    {
      title: "03 TECHNOLOGY",
    },
  ];

  return (
    <div className="absolute flex w-[100%] justify-between items-center mt-10">
      <div>
        <img src={Logo} alt="logo" className="w-[3rem] h-[3rem] ml-12" />
      </div>
      <span className="h-[2px] w-[35rem] left-[14rem] opacity-[0.25] bg-[#fff] absolute content-none z-[1]"></span>
      <div
        className="w-[38rem] h-[100%]"
        style={{
          background: "rgba(11, 13, 23, 0.5)",
          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(3.1px)",
          WebkitBackdropFilter: "blur(3.1px)",
        }}
      >
        <ul className="flex px-5 py-8 gap-10 ml-10 text-[#fff]">
          {navtext.map((list) => {
            return <li>{list.title}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
