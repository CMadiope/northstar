import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://fakestoreapi.com/products/${context.params.id}/`
  );
  const data = await res.json();
  return {
    props: { data },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  const ids = data.map((item) => item.id);

  const paths = ids.map((item) => ({ params: { id: item.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

const Product = ({ data }) => {
  return (
    <div className='flex flex-col md:flex-row gap-8 max-md:items-center'>
      <div className='w-1/2'>
        <Image
          src={data.image}
          alt={data.title}
          width={400}
          height={300}
          className='object-contain'
        />
      </div>
      <div className='pl-6 pr-8 md:pr-16 md:w-1/2'>
        <h3 className='text-2xl font-bold '>{data.title}</h3>
        <div className='flex py-4 items-center'>
          <AiFillStar className='text-orange-500' />
          <AiFillStar className='text-orange-500' />
          <AiFillStar className='text-orange-500' />
          <AiFillStar className='text-orange-500' />
          <AiFillStar className='text-orange-300' />
          <p className='pl-2 text-gray-500 text-sm'>(15)</p>
        </div>
        <p className='text-xl text-[#024E82] py-4'>${data.price}</p>
        <p className='text-xs text-gray-500 pb-8'>{data.description}</p>

        <select className='py-2 bg-[#EBEBEB] px-8 outline-none'>
          <option>Select Size</option>
          <option>S</option>
          <option>M</option>
          <option>L</option>
        </select>
        <div className='py-6'>
          <button className='uppercase py-3 px-8 bg-[#024E82] text-white/90 text-sm hover:scale-110'>
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
