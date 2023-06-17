import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import firstSlide from './assets/Images/desktop-image-hero-1.jpg'
import secondSlide from './assets/Images/desktop-image-hero-2.jpg'
import thirdSlide from './assets/Images/desktop-image-hero-3.jpg'
import bgDark from "./assets/Images/image-about-dark.jpg"
import bgLight from "./assets/Images/image-about-light.jpg"
import slide1 from './assets/Images/mobile-image-hero-1.jpg'
import slide2 from './assets/Images/mobile-image-hero-2.jpg'
import slide3 from './assets/Images/mobile-image-hero-3.jpg'
const svgArrow = 'data:image/svg+xml;utf8,%3Csvg width="40" height="12" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="%23000" fill-rule="nonzero"%3E%3C/path%3E%3C/svg%3E';
const leftSlide = 'data:image/svg+xml;utf8,<svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 0L1 12l12 12" stroke="%23FFF" fill="none" fill-rule="evenodd"/></svg>';
const rightSlide = 'data:image/svg+xml;utf8,<svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M1 0l12 12L1 24" stroke="%23FFF" fill="none" fill-rule="evenodd"/></svg>';
const images = [
  firstSlide,
  secondSlide,
  thirdSlide,
];
const imageMobile = [
  slide1,
  slide2,
  slide3,
];
const texts = [
  <div>
    <h1 className="mb-4 text-3xl font-bold  ">
      Discover innovative ways to decorate
    </h1>
    <p className="text-neutral-coolgray text-justify ">
      We provide unmatched quality, comfort and style for property owners across the country.
      Our experts combine form and fuction in bringing your vision to life. Create a room in your
      own style with our collection and make your property a refection of you and what you love.
    </p>
  </div>,
  <div>
    <h1 className="mb-4 text-3xl font-bold ">
      We are available all across the globe
    </h1>
    <p className="text-neutral-coolgray text-justify">
      With stores all over the world, it's easy for you to find furniture for your home or place or business.
      Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator.
      Any questions? Don't hesitate to contact us today.
    </p>
  </div>,
  <div>
    <h1 className="mb-4 text-3xl font-bold ">
      Manufactured with the best materials
    </h1>
    <p className="text-neutral-coolgray text-justify">
      Our modern furniture stores provide a high level of quality. Our company has invested in advanced technology to ensure that
      every product is made as perfect and as consistent as possible, with three decades of experience in this industry, we understand
      what customers want for their homes and offices.
    </p>
  </div>,
];
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="overflow-x-hidden">
      <div className="flex lg:flex-row sm:flex-col w-screen lg:h-[75vh]">
        <div className=" relative w-7/12 m-0 p-0 ">
          <img src={images[currentIndex]} className="shrink-0 w-[100%] h-[100%] lg:flex sm:hidden" />
          <button
            className="block lg:hidden fixed top-0 left-0 m-4 p-2 text-white"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className="hidden lg:flex absolute top-5 text-white">
            <ul className="flex font-semibold mx-3 " >
              <li className="mx-7">room</li>
              <li className="mx-3 hover:pb-2 hover:border-b-4">home</li>
              <li className="mx-3 hover:pb-2 hover:border-b-4">shop</li>
              <li className="mx-3 hover:pb-2 hover:border-b-4">about</li>
              <li className="mx-3 hover:pb-2 hover:border-b-4">contact</li>
            </ul>
          </div>
          {isMenuOpen && (
            <div className="fixed top-0 left-0 h-full w-full  text-black p-4">
              <div className="w-full h-[155px] bg-white fixed  top-0 left-0 pt-5 ">
                <button
                  className="absolute top-0 left-0 m-4 mt-7 p-2 "
                  onClick={toggleMenu}
                >
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <ul className="flex ml-20 mt-3 font-semibold text-lg ">
                  <li className="mx-4 ">home</li>
                  <li className="mx-4">shop</li>
                  <li className="mx-4">about</li>
                  <li className="mx-4">contact</li>
                </ul>
              </div>
            </div>
          )}
        </div>
        <div>
          <img src={imageMobile[currentIndex]} className="shrink-0 w-full h-96 lg:hidden" />
          <h1 className="absolute top-7 left-[45%] lg:hidden font-semibold text-lg text-white"> room</h1>
          <div className="h-16 flex absolute lg:hidden right-0 top-[33.8%] cursor-pointer ">
            <div onClick={prevSlide} className=" w-20 pl-7 py-5 bg-black active:bg-neutral-coolgray   ">
              <img src={leftSlide} alt="Left Slide" />
            </div>
            <div onClick={nextSlide} className=" w-20 pl-5 py-5  bg-black active:bg-neutral-coolgray ">
              <img src={rightSlide} alt="Right Slide" />
            </div>
          </div>
        </div>
        <div className=" lg:w-2/5 sm:w-screen relative "  data-aos="flip-up">
          <div className=" lg:pt-20 sm:pt-9 lg:mx-9 sm:px-14 shrink-0 ">
            {texts[currentIndex]}
            <div className=" flex my-3 sm:my-11  hover:text-neutral-coolgray ">
              <h1 className=" tracking-widest font-semibold">
                <a href="#" > SHOP NOW </a>
              </h1>
              <img src={svgArrow} alt="Arrow Image" className="ml-3" />
            </div>
          </div>
          <div className="h-16 lg:flex absolute bottom-0 sm:hidden cursor-pointer ">
            <div onClick={prevSlide} className=" w-20 pl-7 py-5 bg-black active:bg-neutral-coolgray   ">
              <img src={leftSlide} alt="Left Slide" />
            </div>
            <div onClick={nextSlide} className=" w-20 pl-5 py-5  bg-black active:bg-neutral-coolgray ">
              <img src={rightSlide} alt="Right Slide" />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-screen lg:h-[25vh] flex lg:flex-row sm:flex-col">
        <div className="lg:w-[30%] h-full">
          <img src={bgDark} className=" h-full sm:w-full " data-aos="zoom-in-right"/>
        </div>
        <div className="lg:w-3/6 py-5 mx-auto " data-aos="zoom-in-up">
          <h1 className="text-lg font-bold text-left mb-1 sm:text-center">
            ABOUT OUR FURNITURE
          </h1>
          <p className="text-neutral-coolgray text-justify sm:mx-7">
            Our multifunctional collection blends design and function to suit your
            individual taste. Make each room unique, or pick a cohesive theme that best
            express your interest and what inspires you. Find the furniture pieces you need, from traditiona to
            contemporary styles or anything in between. Product specialists
            are available to help you create your dream space.
          </p>
        </div>
        <div >
          <img src={bgLight} className="h-full sm:w-full"  />
        </div>
      </div>
    </div>
  );
}


