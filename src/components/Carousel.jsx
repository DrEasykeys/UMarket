import React, { useState, useEffect } from "react";
import FemHangingslip from "../assets/FemHangingslip.webp";
import femaleSandals from "../assets/femaleSandals.webp";
import brownBelt from "../assets/brownBelt.webp";
import shoe1 from "../assets/shoe1.webp";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function Carousel() {
  const slides = [FemHangingslip, femaleSandals, brownBelt, shoe1];
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel relative w-[80%] h-[70vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-item absolute w-full h-full transition-transform transform ${
            index === currentSlide ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <img
            src={slide}
            className="w-full h-full object-cover"
            alt={`Slide ${index + 1}`}
          />
        </div>
      ))}
      <div className="absolute w-full flex items-center justify-between top-48">
        <button
          className="prev-btn bg-red-600 rounded-2xl bg-transparent "
          onClick={prevSlide}
        >
          <IoIosArrowBack className="text-black text-6xl" />
        </button>
        <button
          className="next-btn bg-red-600 rounded-2xl bg-transparent "
          onClick={nextSlide}
        >
          <IoIosArrowForward className="text-black text-6xl" />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
