import React from "react";
import Footer from "../components/Footer";
import hero from "../../public/contact-hero.jpg";
import Image from "next/image";

const contact = () => {
  return (
    <div>
      <div className='relative'>
        <Image src={hero} alt='/' className='w-full' />
        <h1 className='uppercase text-white absolute max-sm:top-20 top-[70%] md:text-3xl left-5'>
          Contact us
        </h1>
      </div>
      <div className='flex flex-col md:flex-row gap-12 py-16 px-8'>
        <div>
          <h3 className='text-lg font-bold'>We would love to hear from you.</h3>
          <p className='text-sm text-gray-600 py-6'>
            If you have any query or any type of suggestion, you can contact us
            here. We would love to hear from you.
          </p>
          <div className='flex flex-col md:flex-row gap-6 '>
            <div className='flex flex-col md:w-1/2'>
              <label className='pb-2 text-gray-500'>Name</label>
              <input type='text' className='border py-4 px-8' />
            </div>
            <div className='flex flex-col md:w-1/2'>
              <label className='pb-2 text-gray-500'>Email</label>
              <input type='email' className='border py-4 px-8' />
            </div>
          </div>
          <div className='flex flex-col py-4'>
            <label className='pb-2 text-gray-500'>Message</label>
            <textarea
              name=''
              id=''
              cols='30'
              rows='10'
              className='border'
            ></textarea>
          </div>
          <button className='uppercase py-4 px-8 bg-[#024E82] text-white my-4 hover:opacity-80'>
            send message
          </button>
        </div>
        <div className='flex flex-col'>
          <h1 className='text-xl font-semibold pb-4'>Visit Us</h1>
          <p className='text-sm text-gray-500'>Johannesburg, South Africa</p>
          <p className='text-sm text-gray-500'>Phone: +2784 234 5979</p>
          <h1 className='text-xl font-semibold pt-6'>Get In Touch</h1>
          <p className="text-sm text-gray-500">
            You can get in touch with us on this provided email:
          </p>
          <p className="text-sm text-gray-500 py-2">
            northstar@gmail.com
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default contact;
