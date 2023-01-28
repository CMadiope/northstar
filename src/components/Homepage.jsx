import Image from "next/image";
import React from "react";
import hero from "../../public/hero.avif";
import ProductCard from "./ProductCard";
import { FaShippingFast, FaFingerprint } from "react-icons/fa";
import { HiSupport } from "react-icons/hi";
import { GiReturnArrow } from "react-icons/gi";

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
      </div>
    </div>
  );
};

export default Homepage;
