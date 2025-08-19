import React, { useContext } from 'react'


import { FaShoppingCart } from 'react-icons/fa';
import { GiSelfLove } from 'react-icons/gi';
import { TfiReload } from 'react-icons/tfi';
import { ApiData } from './ContextApi';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Posts = ({ allPage, filterCategory }) => {

  let { loading } = useContext(ApiData)

  if (loading) {
    return (
      <>
        <Container>
          <div className="flex flex-col items-center justify-center w-full h-[564px] ">
            <div className=" w-16 h-16 border-6 border-[#767676] border-t-transparent rounded-full animate-spin"></div>
            <h1 className="text-center text-[40px] md:text-[60px] font-semibold  text-[#767676] animate-pulse tracking-wide drop-shadow-sm">
              Preparing Your Experience...
            </h1>
          </div>
        </Container>

      </>
    )
  }

  return (
    <div className="grid  md:grid-cols-3  gap-4">
      {filterCategory.length > 0 ? (
        filterCategory.map((item) => (
          <div className="h-[400px]" key={item.id}>
            <div className="relative h-full overflow-hidden shadow-md group ">
              <Link to ={`/Shop/${item.id}`}> 
              
              <img className="w-full cursor-pointer object-cover hover:bg-[#f0f8ff]" src={item.thumbnail} alt=""/>
              </Link>
              <div className="absolute top-4 left-3 z-5">
                <p className="py-[5px] px-[20px] border bg-black text-white font-bold text-[14px] font-dm">
                  {item.discountPercentage}%
                </p>
              </div>
              <div className="absolute right-0 bottom-25 w-[350px] bg-white hidden group-hover:block">
                <div>
                  <div className="flex items-center gap-2 justify-end py-[10px] pr-[10px] cursor-pointer">
                    <p>Add to Wish List</p>
                    <GiSelfLove />
                  </div>
                  <div className="flex items-center gap-2 justify-end py-[10px] pr-[10px] cursor-pointer">
                    <TfiReload />
                  </div>
                  <div className="flex items-center gap-2 justify-end py-[10px] pr-[10px] cursor-pointer">
                    <p>Add to Cart</p>
                    <FaShoppingCart />
                  </div>
                </div>
              </div>
              <div className="flex justify-between pl-[20px] pr-[20px] pt-2">
                <div>
                  <p className="font-bold font-dm text-[16px] text-[#262626]">{item.title}</p>
                  <p className="font-bold font-dm text-[16px] text-[#8a8686]">{item.category}</p>
                </div>
                <div>
                  <p className="font-dm text-[#767676]">${item.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        allPage.map((item) => (
          <div className="h-[400px]" key={item.id}>
            <div className="relative h-full overflow-hidden shadow-md group">
              <Link to ={`/Shop/${item.id}`}> 
              
              <img className="w-full cursor-pointer object-cover hover:bg-[#f0f8ff]" src={item.thumbnail} alt=""/>
              </Link>
              <div className="absolute top-4 left-3 z-5">
                <p className="py-[5px] px-[20px] border bg-black text-white font-bold text-[14px] font-dm">
                  {item.discountPercentage}%
                </p>
              </div>
              <div className="absolute right-0 bottom-25 w-[350px] bg-white hidden group-hover:block">
                <div>
                  <div className="flex items-center gap-2 justify-end py-[10px] pr-[10px] cursor-pointer">
                    <p>Add to Wish List</p>
                    <GiSelfLove />
                  </div>
                  <div className="flex items-center gap-2 justify-end py-[10px] pr-[10px] cursor-pointer">
                    <TfiReload />
                  </div>
                  <div className="flex items-center gap-2 justify-end py-[10px] pr-[10px] cursor-pointer">
                    <p>Add to Cart</p>
                    <FaShoppingCart />
                  </div>
                </div>
              </div>
              <div className="flex justify-between pl-[20px] pr-[20px] pt-2">
                <div>
                  <p className="font-bold font-dm text-[16px] text-[#262626]">{item.title}</p>
                  <p className="font-bold font-dm text-[16px] text-[#8a8686]">{item.category}</p>
                </div>
                <div>
                  <p className="font-dm text-[#767676]">${item.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))
      )}




    </div>

  )
}

export default Posts
