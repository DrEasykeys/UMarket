import { NavLink } from "react-router-dom";

function HelpModal() {
  return (
    <div className="h-[43vh] w-[16vw] flex flex-col items-center justify-around border absolute top-[35px] right-30 z-10 bg-white">
      <div className="h-[25vh] w-[12vw] bg-white flex flex-col items-start justify-around text-md text-black  ">
        <NavLink
          to="/helpcenter"
          className="  w-[100%] hover:font-medium  hover:bg-gray-400 hover:text-lg "
        >
          Help Center
        </NavLink>
        <NavLink
          to="/placeoption"
          className=" w-[100%] hover:font-medium hover:text-lg  hover:bg-gray-400"
        >
          Place an option
        </NavLink>
        <NavLink
          to="/paymentoptions"
          className="  w-[100%] hover:font-medium hover:text-lg  hover:bg-gray-400"
        >
          Payment options
        </NavLink>
        <NavLink
          to="/trackorder"
          className="  w-[100%] hover:font-medium hover:text-lg  hover:bg-gray-400 "
        >
          Track an order
        </NavLink>
        <NavLink
          to="/cancelorder"
          className="  w-[100%] hover:font-medium hover:text-lg  hover:bg-gray-400 "
        >
          Cancel an order
        </NavLink>
        <NavLink
          to="/returnandrefunds"
          className="  w-[100%] hover:font-medium hover:text-lg  hover:bg-gray-400"
        >
          Return and Refunds
        </NavLink>
      </div>
      <div className="h-[12vh] w-[100%]  flex items-center justify-center border-gray-100 border-t-[3px] ">
        <button className=" bg-orange-400 w-[160px] h-[36px] rounded-[5px] text-l  text-white shadow-md hover:opacity-75">
          LIVE CHAT
        </button>
      </div>
    </div>
  );
}

export default HelpModal;
