import { NavLink } from "react-router-dom";

function AccountModal() {
  return (
    <div className="h-[25vh] w-[16vw] flex flex-col items-center justify-around  absolute top-[35px] right-30 z-10 bg-white">
      <div className="h-[9vh] w-[100%]  flex items-center justify-center border-gray-100 border-b-[3px]  ">
        <NavLink to="/login">
          <button className=" bg-orange-400 w-[160px] h-[36px] rounded-[5px] text-l  text-white shadow-md hover:opacity-75">
            SIGN IN
          </button>
        </NavLink>
      </div>
      <div className="h-[14vh] w-[12vw] bg-white flex flex-col items-start justify-between text-md  text-black  ">
        <NavLink
          to="/myaccount"
          className="  w-[100%] hover:font-medium hover:text-lg  hover:bg-gray-400 "
        >
          My Account
        </NavLink>
        <NavLink
          to="/orders"
          className=" w-[100%] hover:font-medium hover:text-lg  hover:bg-gray-400"
        >
          Orders
        </NavLink>
        <NavLink
          to="/saveditems"
          className="  w-[100%] hover:font-medium hover:text-lg  hover:bg-gray-400"
        >
          Saved items
        </NavLink>
      </div>
    </div>
  );
}

export default AccountModal;
