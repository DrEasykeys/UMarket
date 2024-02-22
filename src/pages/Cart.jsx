import { RiShoppingCart2Line } from "react-icons/ri";
import bags from "../assets/bags.png";
import belts from "../assets/belts.jpg";
import fabrics from "../assets/fabrics.jpg";
import shoes from "../assets/shoes.webp";
import jewelryNecklace from "../assets/jewelryNecklace.jpg";
import FemHangingslip from "../assets/FemHangingslip.webp";
import { NavLink } from "react-router-dom";

function Cart() {
  return (
    <div className="Cart h-[100vh] w-full  flex flex-col items-center justify-around ">
      <div className="h-[45vh] w-[80%]  flex items-center justify-center bg-white ">
        <div className="h-[35vh] w-[30vw]  flex flex-col items-center justify-between bg-white ">
          <div className="smallCartDiv h-[10vh] w-[5vw] rounded-full  flex items-center justify-center">
            <RiShoppingCart2Line className="text-5xl" />
          </div>
          <p className="font-bold">Your cart is empty!</p>
          <p>Browse our categories and discover our best deals!</p>

          <NavLink to="/allproducts">
            <button className=" bg-orange-400 w-[130px] h-[42px] rounded-[5px] text-l text-white text-sm ">
              START SHOPPING
            </button>
          </NavLink>
        </div>
      </div>

      <div className="h-[42vh] w-[80%]  flex flex-col items-center justify-center bg-white ">
        <p className="w-[75vw] h-[7vh]   text-lg font-medium flex items-center justify-start">
          Top Selling Items
        </p>

        <div className="h-[40vh] w-full flex items-center justify-between  ">
          <figure className="w-[19vw] h-[38vh]  border flex flex-col items-center  relative ">
            <img
              src={FemHangingslip}
              alt=""
              className="w-[210px] h-[192px] object-cover absolute rounded-xl border"
            />
            <figcaption className="CartFigCaption w-[15.5vw]  bg-white relative ">
              <p> NGN699.92</p>
              <p> Mini heat bag</p>
            </figcaption>
          </figure>

          <figure className="w-[19vw] h-[38vh]   border flex flex-col items-center  relative ">
            <img
              src={FemHangingslip}
              alt=""
              className="w-[210px] h-[192px] object-cover absolute rounded-xl border"
            />
            <figcaption className="CartFigCaption w-[15.5vw]  bg-white relative ">
              <p> NGN699.92</p>
              <p> Mini heat bag</p>
            </figcaption>
          </figure>

          <figure className="w-[19vw] h-[38vh]   border flex flex-col items-center  relative ">
            <img
              src={FemHangingslip}
              alt=""
              className="w-[210px] h-[192px] object-cover absolute rounded-xl border"
            />
            <figcaption className="CartFigCaption w-[15.5vw]  bg-white relative ">
              <p> NGN699.92</p>
              <p> Mini heat bag</p>
            </figcaption>
          </figure>

          <figure className="w-[19vw] h-[38vh]   border flex flex-col items-center  relative ">
            <img
              src={FemHangingslip}
              alt=""
              className="w-[210px] h-[192px] object-cover absolute rounded-xl border"
            />
            <figcaption className="CartFigCaption w-[15.5vw]  bg-white relative ">
              <p> NGN699.92</p>
              <p> Mini heat bag</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default Cart;
