import { FiInstagram } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import EmailAndButton from "../components/EmailAndButton";
import Nav from "./Nav";
import { NavLink } from "react-router-dom";

function Footer2() {
  return (
    <div className="  w-full h-[50vh] bg-purple-900 text-white  flex flex-col items-center justify-around ">
      <div className=" w-[37.9%] h-[13vh] flex  items-center justify-start ">
        <div className=" h-[11vh] flex flex-col items-start justify-between  ">
          Subscribe to our newsletters to get updates on latest offers!
          <EmailAndButton />
        </div>
      </div>

      <div className="w-[90%] flex items-center justify-end">
        <div className="w-[85vw]  flex items-center justify-between">
          <div className="footer2SubDivs ">
            <span>NEED HELP? </span>
            <p className="footer2Para">
              <NavLink to="/chatwithus" /> Chat with us <NavLink /> <br />
              <NavLink to="/helpcenter" /> Help Center <NavLink /> <br />
              <NavLink to="/contactus" />
              Contact Us <NavLink />
            </p>
          </div>

          <div className="footer2SubDivs">
            <span>ABOUT UMARKET </span>
            <p className="footer2Para">
              About us <br />
              Terms and Conditions <br />
              Privacy Notice <br />
              Cookie Notice
            </p>
          </div>

          <div className="footer2SubDivs">
            <span>MAKE MONEY WITH UMARKET</span>
            <p className="footer2Para">
              Sell on AMFM <br />
              Become a sales consultant <br />
              Become a Logistics Service Partner <br />
            </p>
          </div>

          <div className="footer2SubDivs">
            <span>USEFUL LINKS </span>
            <p className="footer2Para">
              Service center <br />
              Return a product <br />
              Return Policy
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="w-[90%] h-[9vh] flex flex-col items-end justify-center ">
        <div className="w-[85vw] h-[9vh] flex flex-col items-start justify-between   ">
          JOIN US ON
          <span className=" w-[6.3vw] flex  items-center justify-between text-2xl  ">
            <Nav
              href="https://wa.link/i9nrun"
              navName={<FaWhatsapp />}
              className=""
            />

            <Nav
              href="https://www.instagram.com"
              navName={<FiInstagram />}
              className=""
            />

            <Nav
              href="https://www.facebook.com/dreasykeys100"
              navName={<FaYoutube />}
              className=""
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer2;
