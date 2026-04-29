// components/Hero.jsx
import { useEffect, useState } from "react";
import gym1 from "../assets/images/gym1.webp";
import gym2 from "../assets/images/gym2.jpg";
import gym3 from "../assets/images/gym3.webp";
import { FaAngleLeft,FaAngleRight } from "react-icons/fa";

const images = [{gym : gym1, title : 1, desc : 1}, 
  {gym : gym2, title : 2, desc : 2}, 
  {gym : gym3, title : 3, desc : 3}];
console.log(images);
export default function Hero() {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className="min-h-[calc(100vh-4rem)] bg-cover bg-center flex items-center justify-center text-white relative transition-all duration-700"
      style={{
        backgroundImage: `url("${images[index].gym}")`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="z-10 text-center">
        <h1 className="text-5xl font-bold mb-4">{images[index].title}</h1>
        <p className="text-xl mb-6">{images[index].desc}</p>
        <button className="bg-red-500 px-6 py-3 rounded-lg hover:bg-red-600 hover:cursor-pointer">
          Get Started
        </button>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-5 text-3xl bg-black/50 px-3 py-2 rounded-full"
      >
        <FaAngleLeft />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-5 text-3xl bg-black/50 px-3 py-2 rounded-full"
      >
        <FaAngleRight />
      </button>
    </div>
  );
}
