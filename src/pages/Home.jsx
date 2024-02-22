import AllProducts from "../components/AllProducts";
import CaroSlide1 from "../components/CaroSlide1";
import Carousel from "../components/Carousel";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer1 from "../components/Footer1";
import AllProducts2 from "./AllProducts2";
// import FooterWrap from "../components/Footer1&2Wrap";

function Home() {
  return (
    <div className=" h-[436vh] w-full   ">
      <div className=" h-[410vh] w-full  flex flex-col items-center justify-around   ">
        <CaroSlide1 />
        <Carousel />
        <FeaturedProducts />
        <AllProducts />
        {/* <AllProducts2 /> */}
      </div>
      <Footer1 />
    </div>
  );
}

export default Home;
