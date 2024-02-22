import { useState } from "react";

import { RiShoppingCart2Line } from "react-icons/ri";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { NavLink } from "react-router-dom";
import SearchInputAndBtn from "./SearchInputAndBtn";
import HelpModal from "../components/HelpModal";
import Backdrop from "./Backdrop";
import AccountModal from "./AccountModal";
import SearchComponent from "./SearchComponent";

import SearchResultPage from "../pages/SearchResultPage";
import MySearchSuggestion from "./MySearchSuggestion";

function Header2() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [acctModalIsOpen, setAcctModalIsOpen] = useState(false);

  function accountHandler() {
    if (acctModalIsOpen == false) {
      setAcctModalIsOpen(true);
    } else {
      setAcctModalIsOpen(false);
      // ON CLCIK, IF accountHandler IS TRUE, SET IT TO FALSE, ELSE (OR IF accountHandler IS FALSE, SET IT TO TRUE)
    }
  }

  function helpHandler() {
    if (modalIsOpen == false) {
      setModalIsOpen(true);
    } else {
      setModalIsOpen(false);
    }
  }

  return (
    <header className="h-[10vh] w-[100%]  flex items-center justify-around border-b shadow-inner ">
      <div className="w-[85%] h-[10vh] flex items-center justify-end  ">
        <div className="w-[62vw] h-10 flex items-center justify-between  relative ">
          <MySearchSuggestion />

          <div className="w-[22vw] flex items-center  justify-around   ">
            <div
              onClick={accountHandler}
              className="h-[33px] w-[100px] flex items-center justify-center  cursor-pointer hover:bg-gray-400 hover:text-white rounded-[4px]"
            >
              <RiAccountCircleFill /> Account <IoMdArrowDropdown />
              {acctModalIsOpen && <AccountModal />}
            </div>

            <div
              className=" h-[33px] w-[75px] flex items-center justify-center  cursor-pointer  hover:bg-gray-400 hover:text-white rounded-[4px]"
              onClick={helpHandler}
            >
              <IoMdHelpCircleOutline /> Help <IoMdArrowDropdown />
              {modalIsOpen && <HelpModal />}
            </div>

            <div className=" h-[33px] w-[60px]   hover:bg-gray-400  hover:text-white rounded-[4px] flex items-center justify-center">
              <NavLink
                to="/cart"
                className="navCart flex items-center justify-center"
              >
                <RiShoppingCart2Line /> Cart
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* {modalIsOpen && <Backdrop onClose={closeModalHandler} />} */}
    </header>
  );
}

export default Header2;
