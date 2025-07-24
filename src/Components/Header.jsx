import logo from "../assets/Logo.png"
import Container from '../Components/Container'
import { GiCrossMark } from "react-icons/gi";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
const Header = () => {
    let [menu, setMenu] = useState(false)
  return (
        <section className="py-[20px]">
            <Container>
                <div className="lg:flex justify-between items-center">
                    <div className="w-2/12 ">
                        <img src={logo} alt="" />
                    </div>
                    <div className="lg:w-8/12 w-full relative ">
                        <ul className={` h-[110px] lg:h-[0px] font-dm text-[14px] text-[#767676] justify mx-auto lg:flex gap-3 flex-wrap justify-start  ${menu ? "h-0 opacity-0" : " bg-[#3a3a13] lg:bg-[#fff] h-[100px] opacity-100"} lg:h-auto lg:opacity-100 duration-300 overflow-hidden }`} >
                            <li className="hover:font-bold hover:text-[#262626] lg:w-[80px] duration-200 cursor-pointer text-center esay-in-out">Home</li>
                            <li className="hover:font-bold hover:text-[#262626] lg:w-[80px] duration-200 cursor-pointer text-center esay-in-out">Shop</li>
                            <li className="hover:font-bold hover:text-[#262626] lg:w-[80px] duration-200 cursor-pointer text-center esay-in-out">About</li>
                            <li className="hover:font-bold hover:text-[#262626] lg:w-[80px] duration-200 cursor-pointer text-center esay-in-out">Contacts</li>
                            <li className="hover:font-bold hover:text-[#262626] lg:w-[80px] duration-200 cursor-pointer text-center esay-in-out">Journal</li>
                        </ul>
                    </div>
                    <div className="w-1/12 lg:hidden absolute top-0 right-0 pt-[20px]" onClick={() => setMenu(!menu)}>
                        {menu
                            ?
                             
                            <FaBars />
                            :
                            <GiCrossMark />
                             }


                    </div>
                </div>
            </Container>
        </section>
  )
}

export default Header
