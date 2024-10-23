// import React from 'react'
// import {BsSearch} from 'react-icons/bs';
// import { BiUser } from 'react-icons/bi';
// import { FiHeart } from 'react-icons/fi';
// import { HiOutlineShoppingBag } from 'react-icons/hi';
// const HeaderMain = () => {
//   return (
//     <div className='border-b border-gray-300 py-6'>
//      <div className='container sm:flex justify-between items-center'>
//       <div className='font-bold text-4x1 text-center pb-4 sm:pb-0 text-blackish'>
//         NehaMark

//       </div>

//       <div className='w-full sm:w-[300px] md:w-[70%] relative' >
//         <input className='border-gray-300 border p-2 px-4 rounded-lg w-full' type="text" placeholder='Enter Any product name.....'/>
//     <BsSearch  className='absolute right-0 top-0 mr-3 mt-4 text-gray-600' size={20}/>
//       </div>
//       <div className='hidden lg:flex gap-4 text-gray-500 text-[30px]'>
//         <BiUser />
//         <div className='relative'>
//             <FiHeart />
//             <div className='bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center'>
//               3
//             </div>
//         </div>
//         <div className='relative'>
//             <HiOutlineShoppingBag />
//             <div className='bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center'>
//                 2
                      
//             </div>
//         </div>
//       </div>
//      </div>
//     </div>
//   )
// }

// export default HeaderMain
// headermain.tsx
// headermain.tsx
// HeaderMain.tsx
"use client";

import React, { useState, ChangeEvent, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { FiHeart } from 'react-icons/fi';
import { HiOutlineShoppingBag } from 'react-icons/hi';

const HeaderMain: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredProducts, setFilteredProducts] = useState<string[]>([]);

  useEffect(() => {
    if (searchTerm) {
      // API call code here
    }
  }, [searchTerm]);

  const handleSearch = async (event: ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);

    if (term) {
      const response = await fetch(`/api/products?search=${term}`);
      const products = await response.json();
      setFilteredProducts(products);
    } else {
      setFilteredProducts([]);
    }
  };

  return (
    <div className='border-b border-gray-300 py-6'>
      <div className='container sm:flex justify-between items-center'>
        <div className='font-bold text-4xl text-center pb-4 sm:pb-0 text-black'>
          NehaMark
        </div>
        <div className='w-full sm:w-[300px] md:w-[70%] relative'>
          <input
            className='border-gray-300 border p-2 px-4 rounded-lg w-full'
            type="text"
            placeholder='Enter Any product name...'
            value={searchTerm}
            onChange={handleSearch}
          />
          <BsSearch className='absolute right-0 top-0 mr-3 mt-4 text-gray-600' size={20} />
          {filteredProducts.length > 0 && (
            <div className='absolute mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg'>
              {filteredProducts.map((product, index) => (
                <div key={index} className='p-2 hover:bg-gray-100'>
                  {product}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className='hidden lg:flex gap-4 text-gray-500 text-[30px]'>
          <BiUser />
          <div className='relative'>
            <FiHeart />
            <div className='bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center'>
              3
            </div>
          </div>
          <div className='relative'>
            <HiOutlineShoppingBag />
            <div className='bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center'>
              2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
