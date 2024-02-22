import React, { useContext } from "react";
import MyContext from "../components/MyContext";
function Faqs() {
  const contextValue = useContext(MyContext);
  return <div>{contextValue}</div>;
}

export default Faqs;

// JUST AN EXPRESSION OF HOW TO CONFIRM IF A CODE IS WORKING
// function Faqs() {
//   console.log("FAQS component rendered");
//   return <div className="border-black border-[1px] w-5 h-5">nnm nmnmnm</div>;
// }

// export default Faqs;
