import { HiMiniXMark, HiOutlineBars3BottomLeft } from "react-icons/hi2"
import Container from "./Container"
import { FaBars, FaCaretRight, FaSortDown, FaUser } from "react-icons/fa"
import { useEffect, useRef, useState } from "react"
import { MdSearch } from "react-icons/md"
import { FaCartShopping } from "react-icons/fa6"
import bag from "../assets/bagg.png"


const Nav = () => {
   let cateRaf = useRef()
   let cateRof = useRef()
   let cateRoff = useRef()
   let [show, setShow] = useState(false)
   let [accShow, setAccShow] = useState(false)
   let [roffShow, setroffShow] = useState(false)
   useEffect(() => {
      document.addEventListener("click", (e) => {
         console.log(cateRaf.current.contains(e.target) == true);
         if (cateRaf.current.contains(e.target) == true) {
            setShow(!show)
         } else {
            setShow(false)
         }
         if (cateRof.current.contains(e.target) == true) {
            setAccShow(!accShow)
         } else {
            setAccShow(false)
         }
         if (cateRoff.current.contains(e.target) == true) {
            setroffShow(!roffShow)
         } else {
            setroffShow(false)
         }
      })

   })

   return (
      <section className="bg-[#F5F5F3]">
         <Container>
            <div className="flex py-[10px] items-center ">
               <div className="w-3/12 relative">
                  <div ref={cateRaf} className="flex items-center gap-2 cursor-pointer">
                     <FaBars className="text-black font-dm font-bold text-[14px] sm:text-[10px] md:text-[20px] lg:text-[20px]" />
                     <h2 className="text-black font-dm font-bold text-[14px] sm:text-[10px] md:text-[20px] lg:text-[24px] ">Shop by Category</h2>
                  </div>
                  {show &&

                     <div className="py-3 absolute left-0 top-[30px] w-full z-20">
                        <ul className="bg-[#262626] text-[#ffffff70]  pl-[10px] relative shadow-xl">
                           <li className=" group hover:text-[#FFFFFF] pl-[20px] duration-200 ease-in-out hover:pl-[30px] py-2 border-b-[1px] border-[#2D2D2D] flex items-center justify-between pr-[10px] cursor-pointer">Accesories <FaCaretRight />

                              <div className=" absolute top-0 right-[-550px] z-10 bg-white px-[20px] shadow-xl PY-2 invisible group-hover:visible w-[550px] flex justify-between ">
                                 <ul className="pt-[5px]">
                                    <li className=" font-bold font-dm text-[16px] text-black">Accesories</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">ONE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">TWO</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">THREE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">FOUR</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">FIVE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">SIX</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">SEVEN</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">EIGHT</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">NINE</li>

                                 </ul>
                                 <ul className="pt-[5px]">
                                    <li className=" font-bold font-dm text-[16px] text-black">Accesories</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">ONE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">TWO</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">THREE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">FOUR</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">FIVE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">SIX</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">SEVEN</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">EIGHT</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">NINE</li>

                                 </ul>
                                 <ul className="pt-[5px]">
                                    <li className=" font-bold font-dm text-[16px] text-black">Accesories</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">ONE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">TWO</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">THREE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">FOUR</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">FIVE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">SIX</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">SEVEN</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">EIGHT</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">NINE</li>

                                 </ul>
                                 <ul className="pt-[5px]">
                                    <li className=" font-bold font-dm text-[16px] text-black">Accesories</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">ONE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">TWO</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">THREE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">FOUR</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">FIVE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">SIX</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">SEVEN</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">EIGHT</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">NINE</li>

                                 </ul>
                              </div>

                           </li>
                           <li className=" group hover:text-[#FFFFFF] pl-[20px] duration-200 ease-in-out hover:pl-[30px] py-2 border-b-[1px] border-[#2D2D2D] flex items-center justify-between pr-[10px] cursor-pointer">Furniture <FaCaretRight />
                              <div className=" absolute top-0 right-[-550px] z-10 bg-white px-[20px] shadow-xl PY-2 invisible group-hover:visible w-[550px] flex justify-between ">
                                 <ul className="pt-[5px]">
                                    <li className=" font-bold font-dm text-[16px] text-black">Furniture</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">ONE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">TWO</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">THREE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">FOUR</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">FIVE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">SIX</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">SEVEN</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">EIGHT</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">NINE</li>

                                 </ul>
                                 <ul className="pt-[5px]">
                                    <li className=" font-bold font-dm text-[16px] text-black">Furniture</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">ONE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">TWO</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">THREE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">FOUR</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">FIVE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">SIX</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">SEVEN</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">EIGHT</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">NINE</li>

                                 </ul>
                                 <ul className="pt-[5px]">
                                    <li className=" font-bold font-dm text-[16px] text-black">Furniture</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">ONE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">TWO</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">THREE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">FOUR</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">FIVE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">SIX</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">SEVEN</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">EIGHT</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">NINE</li>

                                 </ul>
                                 <ul className="pt-[5px]">
                                    <li className=" font-bold font-dm text-[16px] text-black">Furniture</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">ONE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">TWO</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">THREE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">FOUR</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">FIVE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">SIX</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">SEVEN</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">EIGHT</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">NINE</li>

                                 </ul>
                              </div>

                           </li>
                           <li className=" group hover:text-[#FFFFFF] pl-[20px] duration-200 ease-in-out hover:pl-[30px] py-2 border-b-[1px] border-[#2D2D2D] flex items-center justify-between pr-[10px] cursor-pointer">Electronics <FaCaretRight />
                              <div className=" absolute top-0 right-[-550px] z-10 bg-white px-[20px] shadow-xl PY-2 invisible group-hover:visible w-[550px] flex justify-between ">
                                 <ul className="pt-[5px]">
                                    <li className=" font-bold font-dm text-[16px] text-black">Electronics</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">ONE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">TWO</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">THREE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">FOUR</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">FIVE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">SIX</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">SEVEN</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">EIGHT</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">NINE</li>

                                 </ul>
                                 <ul className="pt-[5px]">
                                    <li className=" font-bold font-dm text-[16px] text-black">Electronics</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">ONE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">TWO</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">THREE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">FOUR</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">FIVE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">SIX</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">SEVEN</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">EIGHT</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">NINE</li>

                                 </ul>
                                 <ul className="pt-[5px]">
                                    <li className=" font-bold font-dm text-[16px] text-black">Electronics</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">ONE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">TWO</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">THREE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">FOUR</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">FIVE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">SIX</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">SEVEN</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">EIGHT</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">NINE</li>

                                 </ul>
                                 <ul className="pt-[5px]">
                                    <li className=" font-bold font-dm text-[16px] text-black">Electronics</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">ONE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">TWO</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">THREE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">FOUR</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">FIVE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">SIX</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">SEVEN</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">EIGHT</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">NINE</li>

                                 </ul>
                              </div>
                           </li>
                           <li className=" group hover:text-[#FFFFFF] pl-[20px] duration-200 ease-in-out hover:pl-[30px] py-2 border-b-[1px] border-[#2D2D2D] flex items-center justify-between pr-[10px] cursor-pointer">Clothes <FaCaretRight />
                           <div className=" absolute top-0 right-[-550px] z-10 bg-white px-[20px] shadow-xl PY-2 invisible group-hover:visible w-[550px] flex justify-between ">
                                 <ul className="pt-[5px]">
                                    <li className=" font-bold font-dm text-[16px] text-black">Clothes</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">ONE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">TWO</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">THREE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">FOUR</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">FIVE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">SIX</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">SEVEN</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">EIGHT</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">NINE</li>

                                 </ul>
                                 <ul className="pt-[5px]">
                                    <li className=" font-bold font-dm text-[16px] text-black">Clothes</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">ONE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">TWO</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">THREE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">FOUR</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">FIVE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">SIX</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">SEVEN</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">EIGHT</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">NINE</li>

                                 </ul>
                                 <ul className="pt-[5px]">
                                    <li className=" font-bold font-dm text-[16px] text-black">Clothes</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">ONE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">TWO</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">THREE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">FOUR</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">FIVE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">SIX</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">SEVEN</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">EIGHT</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">NINE</li>

                                 </ul>
                                 <ul className="pt-[5px]">
                                    <li className=" font-bold font-dm text-[16px] text-black">Clothes</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">ONE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">TWO</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">THREE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">FOUR</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">FIVE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">SIX</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">SEVEN</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">EIGHT</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">NINE</li>

                                 </ul>
                              </div>
                              
                           </li>
                           <li className=" group hover:text-[#FFFFFF] pl-[20px] duration-200 ease-in-out hover:pl-[30px] py-2 border-b-[1px] border-[#2D2D2D] flex items-center justify-between pr-[10px] cursor-pointer">Bags <FaCaretRight />

                              <div className=" absolute top-0 right-[-550px] z-10 bg-white px-[20px] shadow-xl PY-2 invisible group-hover:visible w-[550px] flex justify-between ">
                                 <ul className="pt-[5px]">
                                    <li className=" font-bold font-dm text-[16px] text-black">Bags</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">ONE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">TWO</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">THREE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">FOUR</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">FIVE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">SIX</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">SEVEN</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">EIGHT</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">NINE</li>

                                 </ul>
                                 <ul className="pt-[5px]">
                                    <li className=" font-bold font-dm text-[16px] text-black">Bags</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">ONE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">TWO</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">THREE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">FOUR</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">FIVE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">SIX</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">SEVEN</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">EIGHT</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">NINE</li>

                                 </ul>
                                 <ul className="pt-[5px]">
                                    <li className=" font-bold font-dm text-[16px] text-black">Bags</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">ONE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">TWO</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">THREE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">FOUR</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">FIVE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">SIX</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">SEVEN</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">EIGHT</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">NINE</li>

                                 </ul>
                                 <ul className="pt-[5px]">
                                    <li className=" font-bold font-dm text-[16px] text-black">Bags</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">ONE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">TWO</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">THREE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">FOUR</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">FIVE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">SIX</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">SEVEN</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">EIGHT</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">NINE</li>

                                 </ul>
                              </div>
                           </li>
                           <li className=" group hover:text-[#FFFFFF] pl-[20px] duration-200 ease-in-out hover:pl-[30px] py-2 flex items-center justify-between pr-[10px] cursor-pointer">Home appliances <FaCaretRight />
                              <div className=" absolute top-0 right-[-650px] z-10 bg-white px-[20px] shadow-xl PY-2 invisible group-hover:visible w-[650px] flex justify-between ">
                                 <ul className="pt-[5px]">
                                    <li className=" font-bold font-dm text-[16px] text-black">Home appliances</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">ONE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">TWO</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">THREE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">FOUR</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">FIVE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">SIX</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">SEVEN</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">EIGHT</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">NINE</li>

                                 </ul>
                                 <ul className="pt-[5px]">
                                    <li className=" font-bold font-dm text-[16px] text-black">Home appliances</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">ONE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">TWO</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">THREE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">FOUR</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">FIVE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">SIX</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">SEVEN</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">EIGHT</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">NINE</li>

                                 </ul>
                                 <ul className="pt-[5px]">
                                    <li className=" font-bold font-dm text-[16px] text-black">Home appliances</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">ONE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">TWO</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">THREE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">FOUR</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">FIVE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">SIX</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">SEVEN</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">EIGHT</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">NINE</li>

                                 </ul>
                                 <ul className="pt-[5px]">
                                    <li className=" font-bold font-dm text-[16px] text-black">Home appliances</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">ONE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">TWO</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">THREE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">FOUR</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">FIVE</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">SIX</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">SEVEN</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">EIGHT</li>
                                    <li className=" text-[#767676] hover:text-black duration-300 ease-in-out font-dm text-[16px] ">NINE</li>

                                 </ul>
                              </div>
                           </li>
                        </ul>
                     </div>


                  }



               </div>
               <div className="w-6/12">
                  <div className="flex relative">
                     <input type="text" placeholder="Search Products" className="w-full bg-[#FFFFFF]  py-3 pl-4 outline-0" />
                     <div className=" absolute top-[50%] right-0 translate-y-[-50%] pr-[20px]">
                        <MdSearch />
                     </div>
                  </div>
               </div>
               <div className="w-2/12 z-20">
                  <div className="flex justify-end gap-5 relative ">
                     <div ref={cateRof} className="flex">
                        <FaUser />
                        <FaSortDown />
                     </div>
                     {accShow &&

                        <div className=" absolute  left-0 mt-[30px] w-full bg-[#FFFFFF]  ">
                           <ul className="text-center shadow-xl ">
                              <li className="hover:bg-[#2B2B2B] py-3 hover:text-[#FFFFFF]  duration-200 border-b-[1px] border-b-gray-300">My Account</li>
                              <li className="hover:bg-[#2B2B2B] py-3 hover:text-[#FFFFFF] duration-200">Log Out</li>
                           </ul>
                        </div>

                     }
                     <div className=" relative " ref={cateRoff}>
                        <FaCartShopping />
                     </div>
                     {roffShow &&


                        <div className="absolute top-[57px] right-0  gap-3 w-[300px] shadow-md z-20">
                           <div className="flex bg-[#F5F5F3] items-center  justify-between p-[10px]">
                              <div className="bg-[#F5F5F3] ">
                                 <img className="w-20 bg-[#D8D8D8]" src={bag} alt="" />
                              </div>
                              <div className="text-black">
                                 <p>Black Smart Watch</p>
                                 <p>$44.00</p>
                              </div>
                              <div className="icon cursor-pointer">
                                 <HiMiniXMark />
                              </div>
                           </div>
                           <div className="p-[10px] bg-white">
                              <p className="pl-[14px] pb-[10px] text-[#767676]">Subtotal: <span className=" font-semibold text-black">$44.00</span></p>
                              <div className=" justify-around flex">
                                 <div className="">
                                    <button className=" py-[10px] px-[20px] border-[1px] border-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-white duration-300 ease-in-out cursor-pointer ">View Cart</button>
                                 </div>
                                 <div className="">
                                    <button className="py-[10px] px-[20px]  border-[1px] border-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-white duration-300 ease-in-out cursor-pointer">Checkout</button>
                                 </div>
                              </div>

                           </div>
                        </div>

                     }

                  </div>
               </div>
            </div>
         </Container>
      </section>
   )
}

export default Nav