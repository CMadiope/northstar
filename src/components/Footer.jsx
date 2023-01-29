import Link from "next/link";
import React from "react";
import { RiVisaLine } from "react-icons/ri";
import { FaCcMastercard, FaCcPaypal } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='pt-[50px] flex flex-col items-center bg-[#FBFBFB]'>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 border-b-2 pb-16'>
        <div>
          <h3 className='font-bold text-sm uppercase'>Company info</h3>
          <ul className='flex flex-col mt-2 gap-2 font-light text-sm'>
            <Link href='/about'>About us</Link>
            <Link href='#'>Latest Posts</Link>
            <Link href='/contact'>Contact us</Link>
            <Link href='/'>Shop</Link>
          </ul>
        </div>
        <div>
          <h3 className='font-bold text-sm uppercase'>Help links</h3>
          <ul className='flex flex-col mt-2 gap-2 font-light text-sm'>
            <Link href='#'>Tracking</Link>
            <Link href='#'>Order Status</Link>
            <Link href='#'>Delivery</Link>
            <Link href='#'>Shipping Info</Link>
            <Link href='#'>FAQ</Link>
          </ul>
        </div>
        <div>
          <h3 className='font-bold text-sm uppercase'>Useful links</h3>
          <ul className='flex flex-col mt-2 gap-2 font-light text-sm'>
            <Link href='#'>Special Offers</Link>
            <Link href='#'>gift Cards</Link>
            <Link href='#'>Advertising</Link>
            <Link href='#'>Terms of use</Link>
          </ul>
        </div>
        <div>
          <h3 className='font-bold text-sm uppercase'>Get in the know</h3>
          <input
            type='email'
            placeholder='Enter email'
            className='p-4 bg-transparent border-b-4 outline-none'
          />
        </div>
      </div>
      <div className='py-20  flex flex-col md:flex-row md:justify-between gap-16'>
        <div className='font-light text-sm pb-8'>
          <p>&copy; 2023 NorthStar eCommerce</p>
          <div className='flex gap-2'>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row gap-6 '>
          <RiVisaLine size={30} />
          <FaCcMastercard size={30} />
          <FaCcPaypal size={30} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
