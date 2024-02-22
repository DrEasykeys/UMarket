import React from "react";

function LanguageModal() {
  return (
    <div
      className="w-[15vw] h-[45vh] flex flex-col items-center justify-center   absolute top-[29px] cursor-pointer 
    right-30 z-10 bg-white text-black "
    >
      <select className=" w-[11vw] h-[40vh] flex flex-col items-start justify-between   ">
        <option className=" w-[100%]  hover:bg-gray-400 hover:font-medium hover:text-lg ">
          FRANCAIS
        </option>
        <option className=" w-[100%]  hover:bg-gray-400 hover:font-medium hover:text-lg ">
          DUTCH
        </option>
        <option className=" w-[100%]  hover:bg-gray-400 hover:font-medium hover:text-lg ">
          CHINESE
        </option>
        <option className=" w-[100%]  hover:bg-gray-400 hover:font-medium hover:text-lg ">
          JAPANESE
        </option>
        <option className=" w-[100%]  hover:bg-gray-400 hover:font-medium hover:text-lg ">
          ?
        </option>
        <option className=" w-[100%]  hover:bg-gray-400 hover:font-medium hover:text-lg ">
          ?
        </option>
        <option className=" w-[100%]  hover:bg-gray-400 hover:font-medium hover:text-lg ">
          ?
        </option>
        <option className=" w-[100%]  hover:bg-gray-400 hover:font-medium hover:text-lg ">
          ?
        </option>
        <p className=" w-[100%]  hover:bg-gray-400 hover:font-medium hover:text-lg ">
          ?
        </p>
        <p className=" w-[100%]  hover:bg-gray-400 hover:font-medium hover:text-lg ">
          ?
        </p>
      </select>
    </div>
  );
}

export default LanguageModal;
