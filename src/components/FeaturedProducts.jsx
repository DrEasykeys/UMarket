import bags from "../assets/bags.png";
import belts from "../assets/belts.jpg";
import fabrics from "../assets/fabrics.jpg";
import shoes from "../assets/shoes.webp";
import jewelryNecklace from "../assets/jewelryNecklace.jpg";

function FeaturedProducts() {
  return (
    <div className="w-[80%] h-[44vh]   flex flex-col justify-between ">
      <div className="w-full h-[5vh]  flex items-center justify-center bg-white  ">
        FEATURED PRODUCTS
      </div>
      <div className="h-[35vh] w-full flex justify-between   ">
        <figure className="w-[14vw] h-[25vh] border-white border-[5px] flex flex-col items-center justify-center relative ">
          <img
            src={bags}
            alt=""
            className="w-[182px] h-[152px] object-cover absolute"
          />
          <figcaption className="figcaptionDiv w-[14vw]  border-white border-[5px] bg-white relative ">
            <p> NGN699.92</p>
            <p> Mini heat bag</p>
          </figcaption>
        </figure>

        <figure className="w-[14vw] h-[25vh] border-white border-[5px] flex flex-col items-center justify-center relative ">
          <img
            src={belts}
            alt=""
            className="w-[182px] h-[152px] object-cover absolute"
          />
          <figcaption className="figcaptionDiv w-[14vw]  border-white border-[5px] bg-white relative ">
            <p> NGN699.92</p>
            <p> Mini heat bag</p>
          </figcaption>
        </figure>

        <figure className="w-[14vw] h-[25vh] border-white border-[5px] flex flex-col items-center justify-center relative ">
          <img
            src={shoes}
            alt=""
            className="w-[182px] h-[152px] object-cover absolute"
          />
          <figcaption className="figcaptionDiv w-[14vw]  border-white border-[5px] bg-white relative ">
            <p> NGN699.92</p>
            <p> Mini heat bag</p>
          </figcaption>
        </figure>

        <figure className="w-[14vw] h-[25vh] border-white border-[5px] flex flex-col items-center justify-center relative ">
          <img
            src={jewelryNecklace}
            alt=""
            className="w-[182px] h-[152px] object-cover absolute"
          />
          <figcaption className="figcaptionDiv w-[14vw]  border-white border-[5px] bg-white relative ">
            <p> NGN699.92</p>
            <p> Mini heat bag</p>
          </figcaption>
        </figure>

        <figure className="w-[14vw] h-[25vh] border-white border-[5px] flex flex-col items-center justify-center relative ">
          <img
            src={fabrics}
            alt=""
            className="w-[182px] h-[152px] object-cover absolute"
          />
          <figcaption className="figcaptionDiv w-[14vw]  border-white border-[5px] bg-white relative ">
            <p> NGN699.92</p>
            <p> Mini heat bag</p>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default FeaturedProducts;
