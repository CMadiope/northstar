import Image from "next/image";
import React from "react";
import hero from "../../public/hero.avif";
import ProductCard from "./ProductCard";
import { FaShippingFast, FaFingerprint } from "react-icons/fa";
import { HiSupport } from "react-icons/hi";
import { GiReturnArrow } from "react-icons/gi";
import TopSellers from "./TopSellers";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <div className=' w-full h-[100vh]'>
      <div className='relative w-full'>
        <Image className='w-full h-full object-cover' src={hero} alt='/' />
        <div className='absolute top-[50%] text-white right-5 md:right-[10%] max-w-[500px] flex flex-col items-center'>
          <h1 className='uppercase text-2xl font-lato font-semibold md:text-4xl text-'>
            stylist picks beat the heat
          </h1>
          <button className='uppercase py-3 px-6 border-2 font-semibold hover:bg-white/20'>
            shop now
          </button>
        </div>
      </div>
      <h1 className='text-lg md:text-2xl text-center pt-8 font-bold'>
        Discover New Arrivals
      </h1>
      <p className='text-gray-500 text-center py-4'>Recently added shirts</p>
      <div className=''>
        <ProductCard />

        <div className='flex flex-col md:flex-row gap-8 max-sm:items-center py-16 px-10'>
          <div className='flex gap-2 items-center'>
            <FaShippingFast size={20} className='text-[024E82]' />
            <div>
              <h4 className='font-bold  uppercase text-sm'>Free shipping</h4>
              <p className='text-gray-600 text-xs'>
                Enjoy free shipping on orders above $100
              </p>
            </div>
          </div>
          <div className='flex gap-2 items-center'>
            <HiSupport size={20} className='text-[024E82]' />
            <div>
              <h4 className='font-bold  uppercase text-sm'>Support 24/7</h4>
              <p className='text-gray-600 text-xs'>
                Our support team is there to help you with any queries
              </p>
            </div>
          </div>
          <div className='flex gap-2 items-center'>
            <GiReturnArrow size={20} className='text-[024E82]' />
            <div>
              <h4 className='font-bold  uppercase text-sm'>Returns</h4>
              <p className='text-gray-600 text-xs'>
                Simply return it withing 30 days for an exchange
              </p>
            </div>
          </div>
          <div className='flex gap-2 items-center'>
            <FaFingerprint size={20} className='text-[024E82]' />
            <div>
              <h4 className='font-bold  uppercase text-sm'>
                100% payment secure
              </h4>
              <p className='text-gray-600 text-xs'>
                Simply return it withing 30 days for an exchange
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row py-12 items-center gap-12 px-16'>
          <div className='bg-black text-white text-center py-12 px-12'>
            <h2 className='uppercase text-3xl font-light'>Peace of mind</h2>
            <p className='text-sm py-4'>
              A one-step platform for all your fashion needs, hassle-free. Buy
              with a peace of mind
            </p>
            <button className='uppercase text-[#024E82] bg-white py-2 px-6 my-4'>
              Buy now
            </button>
          </div>
          <div className='bg-black text-white text-center py-12 px-16'>
            <h2 className='uppercase text-3xl font-light'>Buy 2 get 1 free</h2>
            <p className='text-sm py-4'>
              End of season sale. Buy any 2 items of your choice and get 1 free
            </p>
            <button className='uppercase text-[#024E82] bg-white py-2 px-6 my-4'>
              Learn more
            </button>
          </div>
        </div>
        <TopSellers />
        <div className='flex justify-center py-8'>
          <button className='uppercase py-4 px-8 bg-[#024E82] text-white'>
            Shop now
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
