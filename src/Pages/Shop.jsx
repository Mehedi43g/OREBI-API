import { useContext, useEffect, useState } from 'react'
import { ApiData } from '../Components/ContextApi';

import { FaCaretDown, FaCaretUp, FaThLarge, FaThList } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';
import { FiPlus } from 'react-icons/fi';
import { LuMinus } from 'react-icons/lu';

import Posts from '../Components/Posts';
import Paginationg from '../Components/Paginationg';
import Container from '../Components/Container';

const Shop = () => {
  let [show, setshow] = useState(true)


  let [sshow, setsShow] = useState(true)
  let [Oon, seOShow] = useState(false)
  let [tOw, seOTShow] = useState(false)
  let [tHree, setHshow] = useState(false)
  let [Four, setfOshow] = useState(false)
  let [FiVee, setVShow] = useState(false)


  let [tshow, settshow] = useState(false)
  let [Oogn, seOgShow] = useState(false)
  let [tOgw, seOTgShow] = useState(false)
  let [tHgree, setgHshow] = useState(false)
  let [Fourg, setgfOshow] = useState(false)
  let [FiVeeg, setgVShow] = useState(false)


  let [rrshow, setRxShow] = useState(true)
  let [srshow, setsrShow] = useState(false)
  let [srsghow, setsgrShow] = useState(false)
  let [srsfhow, setsfrShow] = useState(false)
  let [srsffhow, setsffrShow] = useState(false)
  let [srsfffhow, setsfffrShow] = useState(false)

  let { info } = useContext(ApiData)
  let [perPage, setPerPage] = useState(6);
  let [currentPage, setCurrentPage] = useState(1);
  let lastPage = perPage * currentPage
  let firsPage = lastPage - perPage
  let allPage = info.slice(firsPage, lastPage)
  let [category, setCategory] = useState([])
  let [filterCategory, setFilterCategory] = useState([])

  let [active,setActive] =useState(true)

  let pageNumber = []
  for (let i = 1; i <= Math.ceil(info.length / perPage); i++) {
    pageNumber.push(i);

  }
  let paginate = (index) => {
    setCurrentPage(index + 1)

  }
  let next = () => {
    if (currentPage < pageNumber.length)
      setCurrentPage((state) => state + 1)
  }
  let previ = () => {
    if (currentPage > 1) {
      setCurrentPage((state) => state - 1);
    }


  }
  let handlepageNumber = (e) => {
    setPerPage(e.target.value);
  }
  useEffect(() => {
    setCategory([...new Set(info.map((item) => item.category))]);
  }, [info]);

  let handleCategory = (citem) => {
    let filterItem = info.filter((item) => item.category == citem);

    setFilterCategory(filterItem);

  }
  console.log(filterCategory);
  let handelAllProduct = () => {
    setFilterCategory('')
  }

  console.log(active);
  let handleGrid =()=>{
    setActive(true)
    
  }
  let handleList =()=>{
    setActive(false)
    
  }
  
  
  return (
    <>
      <Container>
        <div className="w-full">
          <h4 className="text-[40px] md:text-[49px] text-[#262626] font-dm font-bold mb-2">Products</h4>
          <p className="text-[12px] text-[#767676] font-dm pb-4"> Home &gt; Products</p>
        </div>

        <div className=" flex justify-between gap-3">
          <div className="w-3/12">
            <div onClick={() => setshow(!show)} className="flex items-center justify-between">
              <h3 className=' font-dm text-[#262626] text-[20px] font-bold'>Shop by Category</h3>
              {show ? <FaCaretUp /> : <FaCaretDown />}
            </div>
            {show &&
              <div className="py-5">
                <ul>
                  <li onClick={handelAllProduct} className='justify-between font-dm text-[#767676] text-[16px] items-center font-bold text-center border-b-[1px] border-[#767676] py-[10px] hover:bg-[#0e58f7] hover:text-white duration-300 first-letter:uppercase'>All page</li>
                  {category.map((item) => (

                    <>
                      <li onClick={() => handleCategory(item)} className='justify-between font-dm text-[#767676] text-[16px] items-center font-bold text-center border-b-[1px] border-[#767676] py-[10px] hover:bg-black duration-300 first-letter:uppercase'>{item}</li>

                    </>

                  ))}
                </ul>
              </div>

            }
            <div onClick={() => setsShow(!sshow)} className="flex items-center justify-between ">
              <h3 className=' font-dm text-[#262626] text-[20px] font-bold'>Shop by Color</h3>
              {sshow ? <FaCaretUp /> : <FaCaretDown />}
            </div>
            {sshow &&
              <ul className='py-3'>
                <div onClick={() => seOShow(!Oon)} className=" flex items-center gap-3 py-[10px]  font-dm border-b-[1px] border-[#767676]">
                  <GoDotFill className='text-black' />
                  <li className='text-[#767676] text-[16px]'>Color 1</li>
                </div>
                {Oon &&
                  <div className="">
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>Shirt</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>Jeans</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>Cap</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>Shoes</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>T-Shirt</li>
                  </div>

                }

                <div onClick={() => seOTShow(!tOw)} className=" flex items-center gap-3 py-[10px] font-dm border-b-[1px] border-[#767676]">
                  <GoDotFill className='text-[#FF8686]' />
                  <li className='text-[#767676]'>Color 2</li>
                </div>
                {tOw &&
                  <div className="">
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>Shirt</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>Jeans</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>Cap</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>Shoes</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>T-Shirt</li>
                  </div>

                }
                <div onClick={() => setHshow(!tHree)} className=" flex items-center gap-3 py-[10px] font-dm border-b-[1px] border-[#767676]">
                  <GoDotFill className='text-[#7ED321]' />
                  <li className='text-[#767676]'>Color 3</li>
                </div>
                {tHree &&
                  <div className="">
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>Shirt</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>Jeans</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>Cap</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>Shoes</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>T-Shirt</li>
                  </div>
                }

                <div onClick={() => setfOshow(!Four)} className=" flex items-center gap-3 py-[10px] font-dm border-b-[1px] border-[#767676]">
                  <GoDotFill className='text-[#767676]' />
                  <li className='text-[#767676]'>Color 4</li>
                </div>
                {Four &&
                  <div className="">
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>Shirt</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>Jeans</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>Cap</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>Shoes</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>T-Shirt</li>
                  </div>
                }
                <div onClick={() => setVShow(!FiVee)} className=" flex items-center gap-3 py-[10px] font-dm border-b-[1px] border-[#767676]">
                  <GoDotFill className='text-[#15CBA5]' />
                  <li className='text-[#767676]'>Color 5</li>
                </div>
                {FiVee &&
                  <div className="">
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>Shirt</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>Jeans</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>Cap</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>Shoes</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>T-Shirt</li>
                  </div>
                }
              </ul>
            }
            <div onClick={() => settshow(!tshow)} className="flex items-center justify-between ">
              <h3 className=' font-dm text-[#262626] text-[20px] font-bold'>Shop by Brand</h3>
              {tshow ? <FaCaretUp /> : <FaCaretDown />}
            </div>
            {tshow &&
              <ul className='py-3'>
                <div onClick={() => seOgShow(!Oogn)} className=" flex items-center gap-3 py-[10px]  font-dm border-b-[1px] border-[#767676]">
                  <li className='text-[#767676] text-[16px]'>Brand  1</li>
                </div>
                {Oogn &&
                  <div className="">
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>Crown & Glory</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>SilkStrand</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>LuxeLocks</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>Royal Tresses</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>Opulent Mane</li>
                  </div>

                }

                <div onClick={() => seOTgShow(!tOgw)} className=" flex items-center gap-3 py-[10px] font-dm border-b-[1px] border-[#767676]">
                  <li className='text-[#767676]'>Brand 2</li>
                </div>
                {tOgw &&
                  <div className="">
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>Crown & Glory</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>SilkStrand</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>LuxeLocks</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>Royal Tresses</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>Opulent Mane</li>
                  </div>

                }
                <div onClick={() => setgHshow(!tHgree)} className=" flex items-center gap-3 py-[10px] font-dm border-b-[1px] border-[#767676]">
                  <li className='text-[#767676]'>Brand 3</li>
                </div>
                {tHgree &&
                  <div className="">
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>Crown & Glory</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>SilkStrand</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>LuxeLocks</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>Royal Tresses</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>Opulent Mane</li>
                  </div>
                }

                <div onClick={() => setgfOshow(!Fourg)} className=" flex items-center gap-3 py-[10px] font-dm border-b-[1px] border-[#767676]">
                  <li className='text-[#767676]'>Brand 4</li>
                </div>
                {Fourg &&
                  <div className="">
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>Crown & Glory</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>SilkStrand</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>LuxeLocks</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>Royal Tresses</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>Opulent Mane</li>
                  </div>
                }
                <div onClick={() => setgVShow(!FiVeeg)} className=" flex items-center gap-3 py-[10px] font-dm border-b-[1px] border-[#767676]">
                  <li className='text-[#767676]'>Brand 5</li>
                </div>
                {FiVeeg &&
                  <div className="">
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>Crown & Glory</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>SilkStrand</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>LuxeLocks</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>Royal Tresses</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>Opulent Mane</li>
                  </div>
                }
              </ul>
            }
            <div onClick={() => setRxShow(!rrshow)} className="flex items-center justify-between ">
              <h3 className=' font-dm text-[#262626] text-[20px] font-bold'>Shop by Price</h3>
              {rrshow ? <FaCaretUp /> : <FaCaretDown />}
            </div>
            {rrshow &&
              <ul className='py-3'>
                <div onClick={() => setsrShow(!srshow)} className=" flex items-center gap-3 py-[10px]  font-dm border-b-[1px] border-[#767676]">
                  <li className='text-[#767676] text-[16px]'>$0.00 - $9.99</li>
                </div>
                {srshow &&
                  <div className="">
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>Crown & Glory</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>SilkStrand</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>LuxeLocks</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>Royal Tresses</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>Opulent Mane</li>
                  </div>

                }

                <div onClick={() => setsgrShow(!srsghow)} className=" flex items-center gap-3 py-[10px] font-dm border-b-[1px] border-[#767676]">
                  <li className='text-[#767676]'>$10.00 - $19.99</li>
                </div>
                {srsghow &&
                  <div className="">
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>Crown & Glory</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>SilkStrand</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>LuxeLocks</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>Royal Tresses</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>Opulent Mane</li>
                  </div>

                }
                <div onClick={() => setsfrShow(!srsfhow)} className=" flex items-center gap-3 py-[10px] font-dm border-b-[1px] border-[#767676]">
                  <li className='text-[#767676]'>$20.00 - $29.99</li>
                </div>
                {srsfhow &&
                  <div className="">
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>Crown & Glory</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>SilkStrand</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>LuxeLocks</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>Royal Tresses</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>Opulent Mane</li>
                  </div>
                }

                <div onClick={() => setsffrShow(!srsffhow)} className=" flex items-center gap-3 py-[10px] font-dm border-b-[1px] border-[#767676]">
                  <li className='text-[#767676]'>$30.00 - $39.99</li>
                </div>
                {srsffhow &&
                  <div className="">
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>Crown & Glory</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>SilkStrand</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>LuxeLocks</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>Royal Tresses</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>Opulent Mane</li>
                  </div>
                }
                <div onClick={() => setsfffrShow(!srsfffhow)} className=" flex items-center gap-3 py-[10px] font-dm border-b-[1px] border-[#767676]">
                  <li className='text-[#767676]'>$40.00 - $69.99</li>
                </div>
                {srsfffhow &&
                  <div className="">
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>Crown & Glory</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>SilkStrand</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>LuxeLocks</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>Royal Tresses</li>
                    <li className='text-[#767676] text-[16px] font-bold text-center py-[10px] border-b-[1px] border-[#767676]  hover:bg-black duration-300'>Opulent Mane</li>
                  </div>
                }
              </ul>
            }
          </div>

          <div className="w-9/12">
            <div className="flex justify-between">
              <div className="icons ">
                <div className="flex gap-3">
                  <div onClick={handleGrid} className={`${active ? "p-[5px] text-black bg-orange-400 border-[1px] border-[#737373]" : "p-[5px] text-black border-[1px] border-[#737373]"  } `}>
                    <FaThLarge  />
                  </div>
                  <div onClick={handleList} className={`${active ? "p-[5px] text-black border-[1px] border-[#737373]" : "p-[5px] text-black bg-orange-400 border-[1px] border-[#737373]"}`}>
                    <FaThList />
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="droupdown flex gap-2">
                  <div className="flex items-center gap-2">
                    <div className="text">
                      <p className='text-[#767676] text-[16px] font-dm'>Sort by:</p>
                    </div>
                    <div className="droup">
                      <div className="w-44">
                        <select
                          className=" w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm"
                        >
                          <option>Category 1</option>
                          <option>Category 2</option>
                          <option>Category 3</option>
                          <option>Category 4</option>
                          <option>Category 5</option>
                        </select>

                      </div>
                    </div>
                  </div>
                </div>
                 {!filterCategory.length && (
                <div className="flex gap-1 items-center">
                  <p className='text-[#767676] text-[16px] font-dm'>Show:</p>
                  <div className="  px-[10px] ">
                    <div className="w-24">
                     
                        <select onChange={handlepageNumber}
                        name="" id="" className='border-[1px] border-[#0059ff7c] py-2 roudned-[5px] pl-20 pr-1 shadow-md'  >
                        <option value="6">6</option>
                        <option value="12">12</option>
                        <option value="18">18</option>
                        <option value="24">24</option>
                        <option value="30">30</option>
                      </select>
                    </div>
                  </div>
                </div>

                      )}
              </div>
            </div>
            <div className="items pt-5">
              <Posts allPage={allPage} filterCategory={filterCategory} active={active} />
            </div>
            <div className="py-5">
              {!filterCategory.length && (
                <Paginationg
                  pageNumber={pageNumber}
                  paginate={paginate}
                  next={next}
                  previ={previ}
                  currentPage={currentPage}
                />
              )}

            </div>
          </div>
        </div>

      </Container>
    </>
  )
}

export default Shop