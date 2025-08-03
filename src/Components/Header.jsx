import logo from "../assets/Logo.png"
import Container from '../Components/Container'
import { GiCrossMark } from "react-icons/gi";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
    let [menu, setMenu] = useState(false)
  return (
        <section className="py-[10px]">
            <Container>
                <div className="lg:flex justify-between items-center">
                    <div className="w-2/12 ">
                        <img src={logo} alt="" />
                    </div>
                    <div className="lg:w-8/12 w-full relative ">
                        <ul className={` h-[110px] lg:h-[0px] font-dm text-[14px] text-[#767676] justify mx-auto lg:flex gap-3 flex-wrap justify-start  ${menu ? "h-0 hidden" : " bg-[#3a3a13] lg:bg-[#fff] h-[100px] block"} lg:h-auto lg:opacity-100 duration-300 overflow-hidden }`} >
                            <Link to="/"><li className="hover:font-bold hover:text-[#262626] lg:w-[80px] duration-200 cursor-pointer text-center esay-in-out">Home</li></Link>
                            <Link to="/shop"><li className="hover:font-bold hover:text-[#262626] lg:w-[80px] duration-200 cursor-pointer text-center esay-in-out">Shop</li></Link>
                            <Link to="/about"><li className="hover:font-bold hover:text-[#262626] lg:w-[80px] duration-200 cursor-pointer text-center esay-in-out">About</li></Link>
                            <Link to="/contacts"><li className="hover:font-bold hover:text-[#262626] lg:w-[80px] duration-200 cursor-pointer text-center esay-in-out">Contacts</li></Link>
                            <Link to="/journal"><li className="hover:font-bold hover:text-[#262626] lg:w-[80px] duration-200 cursor-pointer text-center esay-in-out">Journal</li></Link>
                             
                            
                            
                            
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
