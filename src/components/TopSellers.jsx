import React from 'react'
import { topSellers } from './productInfo';
import Image from 'next/image';

const TopSellers = () => {
  return (
    <div className='grid grid-cols-fluid gap-16 px-16'>
      {topSellers &&
        topSellers.map((item) => (
          <div key={item.id}>
            <Image
              src={item.cover}
              width={600}
              height={600}
              className='object-contain'
              alt='/'
            />
            <p className='text-lg font-bold text-center pt-2'>{item.title}</p>
            <p className='text-[#024E82] text-center pt-2'>${item.price}</p>
          </div>
        ))}
    </div>
  );
}

export default TopSellers