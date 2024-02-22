import React from "react";
import canvasForBig from "../assets/canvasForBig.png";
import canvasForSmall from "../assets/canvasForSmall.png";
import { ImCross } from "react-icons/im";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { NavLink } from "react-router-dom";

function CaroSlide1() {
  return (
    <div className="div2">
      <div className="divCone"></div>
      <span className="x1">
        <ImCross />
        <ImCross />
        <ImCross />
      </span>
      <span className="x2">
        <ImCross />
        <ImCross />
        <ImCross />
      </span>
      <div className=" h-[50vh] w-[53vw]">
        <div className="  leading-10 italic ">
          <span className="text-[60px] font-bold">NEW COLLECTION</span>
          <p className="text-[40px] ">QUALITY SHOES</p>
        </div>
        <div className="subDiv2 h-[24vh]  text-xl font-bold  flex flex-col items-start justify-center ">
          <p>Made to the highest standards of craftmanship. </p>
          <p> Discover this sofisticated collection.</p>
        </div>
        <NavLink to="/allproducts">
          <button className="btnShopNow  bg-transparent h-[60px] w-[300px] flex items-center  justify-center text-3xl font-extrabold">
            SHOP NOW <IoMdArrowDroprightCircle className="shopArrow text-5xl" />
          </button>
        </NavLink>
      </div>
      <div className="plusDiv text-center text-sm/3 font-black">
        +++++ +++++ +++++ +++++ +++++
      </div>
      <div className="divCircle shadow-2xl rounded-full">
        <img src={canvasForSmall} className="imgSmallCan" alt="" />
      </div>
      <div className="square"></div>
      <div className="shape">
        <img src={canvasForBig} className="imgBigCan" alt="" />
      </div>
    </div>
  );
}

export default CaroSlide1;
