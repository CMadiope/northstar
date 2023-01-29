import React from "react";
import Footer from "../components/Footer";
import Image from "next/image";
import hero from "../../public/about-hero.jpg";
import denim_jacket from "../../public/about/denim-jacket.png";
import blue_shirt from "../../public/about/blue-shirt.png";
import hm from "../../public/about/hm.png";
import abid from "../../public/about/abid.png";
import ah from "../../public/about/ah.png";
import khan from "../../public/about/khan.png";
import {RiDoubleQuotesL} from 'react-icons/ri'
import testimonial1 from '../../public/about/testimonial1.png'
import testimonial2 from '../../public/about/testimonial2.png'
import testimonial3 from '../../public/about/testimonial3.png'

const about = () => {
  return (
    <div>
      <div className='relative'>
        <Image src={hero} alt='/' className='w-full' />
        <h1 className='uppercase text-white absolute max-sm:top-20 top-[70%] md:text-3xl left-5'>
          About NorthStar
        </h1>
      </div>
      <div className='flex flex-col items-center md:flex-row max-md:gap-12 pt-10 px-8 md:justify-evenly'>
        <div className='relative'>
          <Image src={denim_jacket} alt='/' />
          <button className='uppercase py-2 px-6 rounded-lg bg-white text-[#14517B] absolute bottom-5 left-[38%]'>
            Buy Now
          </button>
        </div>
        <div className='relative'>
          <Image src={blue_shirt} alt='/' />
          <button className='uppercase py-2 px-6 rounded-lg bg-white text-[#14517B] absolute bottom-5 left-[38%]'>
            Buy Now
          </button>
        </div>
      </div>
      <div className='bg-[#FBFBFB]'>
        <h1 className='text-center text-2xl font-semibold py-10'>
          The Founders
        </h1>
        <div className='pb-16 flex flex-col items-center px-8 gap-8 md:flex-row'>
          <div>
            <Image src={hm} alt='/' />
            <p className='pt-2 font-bold'>HM Jaward</p>
          </div>
          <div>
            <Image src={abid} alt='/' />
            <p className='pt-2 font-bold'>Furqan abid</p>
          </div>
          <div>
            <Image src={ah} alt='/' />
            <p className='pt-2 font-bold'>Abdullah Ah</p>
          </div>
          <div>
            <Image src={khan} alt='/' />
            <p className='pt-2 font-bold'>Abrar</p>
          </div>
        </div>
      </div>
      <div className='bg-white'>
        <h1 className='text-center text-2xl font-semibold py-12'>
          Testimonials
        </h1>
        <div className='flex flex-col items-center gap-16 px-10 py-20 '>
          <div className='flex flex-col md:flex-row md:pr-24 gap-8 md:items-center'>
            <Image src={testimonial1} alt='/' />
            <div>
              <RiDoubleQuotesL size={30} />
              <p className='text-sm md:text-base pt-2 text-gray-700'>
                Once we ordered some accessories items and we got the products
                delivered in our doorstep, the customer support was super
                helpful and they answered all my queries.
              </p>
              <p className='text-sm md:text-base font-bold pt-4'>Stacy</p>
            </div>
          </div>
          <div className='flex flex-col md:flex-row md:pr-24 gap-8 md:items-center'>
            <Image src={testimonial2} alt='/' />
            <div>
              <RiDoubleQuotesL size={30} />
              <p className='text-sm md:text-base pt-2 text-gray-700'>
                Once we ordered some accessories items and we got the products
                delivered in our doorstep, the customer support was super
                helpful and they answered all my queries.
              </p>
              <p className='text-sm md:text-base font-bold pt-4'>Tiffany</p>
            </div>
          </div>
          <div className='flex flex-col md:flex-row md:pr-24 gap-8 md:items-center'>
            <Image src={testimonial3} alt='/' />
            <div>
              <RiDoubleQuotesL size={30} />
              <p className='text-sm md:text-base pt-2 text-gray-700'>
                Once we ordered some accessories items and we got the products
                delivered in our doorstep, the customer support was super
                helpful and they answered all my queries.
              </p>
              <p className='text-sm md:text-base font-bold pt-4'>James</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default about;
