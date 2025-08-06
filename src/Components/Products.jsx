import React from 'react';
import Container from './Container';
import { GrFormAdd } from 'react-icons/gr';
import { FaCaretUp } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';
import { IoGrid } from 'react-icons/io5';
import { FaRectangleList } from 'react-icons/fa6';

const Products = () => {
  return (
    <div className="py-10">
      <Container>
        <div className="w-full">
          <h4 className="text-[40px] md:text-[49px] text-[#262626] font-dm font-bold mb-2">Products</h4>
          <p className="text-[12px] text-[#767676] font-dm pb-4"> Home &gt; Products</p>
        </div>
        <div className="flex gap-3 ">
          <div className="w-2/12">
            <div className="">
              <h4 className='text-[20px] font-dm font-bold text-[#262626] pb-4'>Shop by Category</h4>
              <div className="flex items-center justify-between text-[#767676] text-[16px] font-dm py-2 border-b-[1px] border-[#F0F0F0]">
                <p className='' >Category 1</p>
                <GrFormAdd />
              </div>
              <div className="flex items-center justify-between text-[#767676] text-[16px] font-dm py-2 border-b-[1px] border-[#F0F0F0]">
                <p className='' >Category 2</p>
                <GrFormAdd />
              </div>
              <div className="flex items-center justify-between text-[#767676] text-[16px] font-dm py-2 border-b-[1px] border-[#F0F0F0]">
                <p className='' >Category 3</p>
                <GrFormAdd />
              </div>
              <div className="flex items-center justify-between text-[#767676] text-[16px] font-dm py-2 border-b-[1px] border-[#F0F0F0]">
                <p className='' >Category 4</p>
                <GrFormAdd />
              </div>
              <div className="flex items-center justify-between text-[#767676] text-[16px] font-dm py-2 border-b-[1px] border-[#F0F0F0]">
                <p className='' >Category 5</p>
                <GrFormAdd />
              </div>
            </div>
            <div className="">
              <div className="flex justify-between items-center text-[20px] text-[#262626] font-dm font-bold py-5">
                <p>Shop by Color</p>
                <FaCaretUp />
              </div>
              <div className="flex items-center gap-3 py-2 border-b-[1px] border-[#F0F0F0]">
                <GoDotFill />
                <p className='text-[16px] text-[#767676] font-dm  '>Color 1</p>
              </div>
              <div className="flex items-center gap-3 py-2 border-b-[1px] border-[#F0F0F0]">
                <GoDotFill className='text-[#FF8686]' />
                <p className='text-[16px] text-[#767676] font-dm '>Color 2</p>
              </div>
              <div className="flex items-center gap-3 py-2 border-b-[1px] border-[#F0F0F0]">
                <GoDotFill className='text-[#7ED321]' />
                <p className='text-[16px] text-[#767676] font-dm '>Color 3</p>
              </div>
              <div className="flex items-center gap-3 py-2 border-b-[1px] border-[#F0F0F0]">
                <GoDotFill className='text-[#B6B6B6]' />
                <p className='text-[16px] text-[#767676] font-dm '>Color 4</p>
              </div>
              <div className="flex items-center gap-3 py-2 border-b-[1px] border-[#F0F0F0]">
                <GoDotFill className='text-[#15CBA5]' />
                <p className='text-[16px] text-[#767676] font-dm '>Color 5</p>
              </div>
            </div>
            <div className="">
              <div className="flex justify-between items-center text-[20px] text-[#262626] font-dm font-bold py-5">
                <p>Shop by Brand</p>
                <FaCaretUp />
              </div>
              <div className=" py-2 border-b-[1px] border-[#F0F0F0]">
                <p className='text-[16px] text-[#767676] font-dm  '>Brand 1</p>
              </div>
              <div className=" py-2 border-b-[1px] border-[#F0F0F0]">
                <p className='text-[16px] text-[#767676] font-dm '>Brand 2</p>
              </div>
              <div className=" py-2 border-b-[1px] border-[#F0F0F0]">
                <p className='text-[16px] text-[#767676] font-dm '>Brand 3</p>
              </div>
              <div className="  py-2 border-b-[1px] border-[#F0F0F0]">
                <p className='text-[16px] text-[#767676] font-dm '>Brand 4</p>
              </div>
              <div className="  py-2 border-b-[1px] border-[#F0F0F0]">
                <p className='text-[16px] text-[#767676] font-dm '>Brand 5</p>
              </div>
            </div>
            <div className="">
              <div className=" text-[20px] text-[#262626] font-dm font-bold py-5">
                <p>Shop by Price</p>
              </div>
              <div className=" py-2 border-b-[1px] border-[#F0F0F0]">
                <p className='text-[16px] text-[#767676] font-dm  '>$0.00 - $9.99</p>
              </div>
              <div className=" py-2 border-b-[1px] border-[#F0F0F0]">
                <p className='text-[16px] text-[#767676] font-dm '>$10.00 - $19.99</p>
              </div>
              <div className=" py-2 border-b-[1px] border-[#F0F0F0]">
                <p className='text-[16px] text-[#767676] font-dm '>$20.00 - $29.99</p>
              </div>
              <div className="  py-2 border-b-[1px] border-[#F0F0F0]">
                <p className='text-[16px] text-[#767676] font-dm '>$30.00 - $39.99</p>
              </div>
              <div className="  py-2 border-b-[1px] border-[#F0F0F0]">
                <p className='text-[16px] text-[#767676] font-dm '>$40.00 - $69.99</p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="w-10/12 mx-auto">
              <div className="flex gap-4  justify-between">
                <div className=" text-[20px] items-center">
                  <div className="flex items-center gap-3">

                    <IoGrid className='text-[#262626]' />
                    <FaRectangleList className='text-[25px] text-[#737373]' />
                  </div>
                </div>
                <div className="">
                  <div className="">

                    <el-dropdown class="">
                      <button class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50">
                        Sort by:
                        <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="-mr-1 size-5 text-gray-400">
                          <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                        </svg>
                      </button>

                      <el-menu anchor="bottom end" popover class="w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition transition-discrete [--anchor-gap:--spacing(2)] focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
                        <div class="py-1">
                          <a href="#" class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-hidden">Account settings</a>
                          <a href="#" class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-hidden">Support</a>
                          <a href="#" class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-hidden">License</a>
                          <form action="#" method="POST">
                            <button type="submit" class="block w-full px-4 py-2 text-left text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-hidden">Sign out</button>
                          </form>
                        </div>
                      </el-menu>
                    </el-dropdown>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Products;
