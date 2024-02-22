import { FiInstagram } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { RiTelegramLine } from "react-icons/ri";
import Nav from "./Nav";
// import EnglishSubtitle from "./EngSubtitleModal";
import { useState } from "react";

import { NavLink, Link } from "react-router-dom";
import LanguageModal from "./LanguageModal";

function Header1() {
  // const [langModalIsOpen, setLangModalIsOpen] = useState(false);

  // function openLangModal() {
  //   setLangModalIsOpen(true);
  // }

  // function closeLangModal() {
  //   setLangModalIsOpen(false);
  // }

  return (
    <header className="bg-purple-900 h-[5vh] w-[100%] flex  justify-around  ">
      <div className="  h-[5vh] w-[80vw] flex items-center justify-end shadow-inner ">
        <div className="  w-[27vw] text-white   flex items-center  justify-end shadow-inner">
          <div className="  flex  relative ">
            <div className="w-[15vw] h-[5vh] flex justify-around items-center text-2xl ">
              <Nav
                href="https://www.instagram.com"
                navName={<FiInstagram />}
                className=""
                // i wont add any className cos i already edited the icon in the last div holding this icon
              />
              <Nav
                href="https://www.facebook.com/dreasykeys100"
                navName={<FaYoutube />}
                className=""
                // i wont add any className cos i already edited the icon in the last div holding this icon
              />
              <Nav
                href="https://wa.link/i9nrun"
                navName={<FaWhatsapp />}
                className=""
                // i wont add any className cos i already edited the icon in the last div holding this icon
              />
              <Nav
                href="https://wa.link/i9nrun"
                navName={<RiTelegramLine />}
                className=""
                // i wont add any className cos i already edited the icon in the last div holding this icon
              />
            </div>
            <div className="w-[12vw]  flex items-center  justify-end text-sm border-l-2 ">
              {/* <div
                // onClick={<EnglishSubtitle />}
                className=" border-l-white border-[2px] border-purple-900 h-8 w-[7vw] flex justify-center
                 cursor-pointer  items-center  hover:bg-gray-400"
                onMouseOver={openLangModal}
                onMouseOut={closeLangModal}
              >
                ENGLISH
                {langModalIsOpen && <LanguageModal />}
              </div> */}

              {/* <div
                className="w-[15vw] h-[45vh] flex flex-col items-center justify-center   absolute top-[29px] cursor-pointer 
    right-30 z-10 bg-white text-black "
              > */}
              <select className="h-8 w-[7vw]  bg-purple-900  ">
                <option className="LanguageModal w-[100%]  hover:bg-gray-400 hover:font-medium hover:text-lg ">
                  ENGLISH
                </option>
                <option className="LanguageModal w-[100%]  hover:bg-gray-400 hover:font-medium hover:text-lg ">
                  FRENCH
                </option>
                <option className="LanguageModal w-[100%]  hover:bg-gray-400 hover:font-medium hover:text-lg ">
                  PORTUGUESE
                </option>
                <option className="LanguageModal w-[100%]  hover:bg-gray-400 hover:font-medium hover:text-lg ">
                  DUTCH
                </option>
                <option className="LanguageModal w-[100%]  hover:bg-gray-400 hover:font-medium hover:text-lg ">
                  CHINESE
                </option>
                <option className="LanguageModal w-[100%]  hover:bg-gray-400 hover:font-medium hover:text-lg ">
                  JAPANESE
                </option>
                <option className="LanguageModal w-[100%]  hover:bg-gray-400 hover:font-medium hover:text-lg ">
                  SPANISH
                </option>
                <option className="LanguageModal w-[100%]  hover:bg-gray-400 hover:font-medium hover:text-lg ">
                  GERMAN
                </option>
                <option className="LanguageModal w-[100%]  hover:bg-gray-400 hover:font-medium hover:text-lg ">
                  IRISH
                </option>
                <option className="LanguageModal w-[100%]  hover:bg-gray-400 hover:font-medium hover:text-lg ">
                  ITALIAN
                </option>

                {/* SEARCH ABND GET DOTTED
        LIST,,,,,,,,,,,,==================================== */}
              </select>
              {/* </div> */}

              <div className=" border-x-2 h-8 w-[5vw] flex justify-center items-center  hover:bg-gray-400">
                <NavLink to="/faqs" className="navfaqs">
                  FAQS
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header1;
