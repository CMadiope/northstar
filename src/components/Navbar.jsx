import Link from "next/link";
import React, { useState } from "react";
import {
  AiOutlineSearch,
  AiOutlineBell,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useRouter } from "next/router";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const router = useRouter();
  return (
    <nav className='relative flex justify-between items-center py-10  z-10'>
      <Link href='/' className='max-sm:absolute max-sm:left-[50%]'>
        <h1 className='text-2xl font-bold font-lato xl:text-3xl '>
          NorthStar
        </h1>
      </Link>
      <ul className='hidden sm:flex items-center gap-10  md:text-lg lg:text-2xl'>
        <Link
          href='/'
          className={`${router.pathname == "/" ? " text-[#024E82]" : ""}`}
        >
          Home
        </Link>
        <Link
          href='/about'
          className={`${router.pathname == "/about" ? "  text-[#024E82]" : ""}`}
        >
          About
        </Link>
        <Link
          href='/contact'
          className={`${
            router.pathname == "/contact" ? "  text-[#024E82]" : ""
          }`}
        >
          Contact Us
        </Link>
      </ul>

      <div className='flex items-center  '>
        <div className='flex gap-4 cursor-pointer text-lg lg:text-2xl max-sm:absolute max-sm:right-0'>
          <AiOutlineSearch className='' />
          <Link href='/cart'>
            <AiOutlineShoppingCart />
          </Link>
        </div>
      </div>
      <div
        onClick={handleNav}
        className=' z-30 sm:hidden absolute  top-15 left-0'
      >
        {nav ? (
          <RxCross1 size={20} className='mr-4 cursor-pointer text-white' />
        ) : (
          <FaBars size={20} className='mr-4 cursor-pointer' />
        )}
      </div>
      <div
        onClick={handleNav}
        className={
          nav
            ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col z-10"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
        }
      >
        <ul className='h-full w-full text-center pt-20 flex flex-col text-xl text-gay-300 gap-8 '>
          <Link href='/'>
            <h1 className='text-2xl md:text-2xl font-bold font-lato xl:text-3xl '>
              NorthStar
            </h1>
          </Link>
          <Link
            href='/'
            className={`${
              router.pathname == "/" ? " text-[#024E82]" : ""
            }'text-xl py-8'`}
          >
            Home
          </Link>
          <Link
            href='/about'
            className={`${
              router.pathname == "/about" ? "  text-[#024E82]" : ""
            }'text-xl py-8'`}
          >
            About
          </Link>
          <Link
            href='/contact'
            className={`${
              router.pathname == "/contact" ? "  text-[#024E82]" : ""
            }'text-xl py-8'`}
          >
            Contact Us
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
