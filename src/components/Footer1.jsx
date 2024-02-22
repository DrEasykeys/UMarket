import { PiCurrencyCircleDollar } from "react-icons/pi";
import { MdOutlinePayment } from "react-icons/md";
import { MdOutlineGppGood } from "react-icons/md";
import { FaPeopleLine } from "react-icons/fa6";

function Footer1() {
  return (
    <div className="w-full h-[26vh] flex items-center justify-around  bg-white">
      <div className="footer1Div2  ">
        <PiCurrencyCircleDollar className="text-3xl font-bold" />
        <span className="text-xl font-bold">Great value</span>
        <span className="h-[10vh] text-center font-medium">
          We offer competitive prices <br /> on over one thousand items.
        </span>
      </div>

      <div className="footer1Div2 ">
        <MdOutlinePayment className="text-3xl " />
        <span className="text-xl font-bold">Safe payment</span>
        <span className="h-[10vh] text-center font-medium">
          Pay with the world's most <br /> popular and secure payment <br />{" "}
          methods.
        </span>
      </div>

      <div className="footer1Div2">
        <MdOutlineGppGood className="text-3xl" />
        <span className="text-xl font-bold">Shop with confidence</span>
        <span className="h-[10vh]  text-center font-medium">
          Over Buyer Protection policy <br /> covers your entire purchase <br />{" "}
          journey
        </span>
      </div>

      <div className="footer1Div2 ">
        <FaPeopleLine className="text-3xl" />
        <span className="text-xl font-bold"> Help Center </span>

        <span className="h-[10vh]  text-center font-medium">
          Round-the-clock assistance <br /> for a smooth shopping <br />{" "}
          experince
        </span>
      </div>
    </div>
  );
}

export default Footer1;
