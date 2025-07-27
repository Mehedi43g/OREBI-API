import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import logo from '../assets/Logo.png'
import Container from './Container'
import { IoLogoInstagram } from 'react-icons/io'

const Footer = () => {
    return (
        <section className='py-[20px] bg-[#F5F5F3]'>
            <Container>
                <div className="flex">
                    <div className="w-2/12">
                        <div>
                            <h3 className='font-bold font-dm text-[#262626] text-[16px]'>MENU</h3>
                            <a href="#" className='text-[#6D6D6D] hover:text-[#262626] text-[14px] font-semibold py-[5px] block'>Home</a>
                            <a href="#" className='text-[#6D6D6D] hover:text-[#262626] text-[14px] font-semibold py-[5px] block'>Shop</a>
                            <a href="#" className='text-[#6D6D6D] hover:text-[#262626] text-[14px] font-semibold py-[5px] block'>About</a>
                            <a href="#" className='text-[#6D6D6D] hover:text-[#262626] text-[14px] font-semibold py-[5px] block'>Contact</a>
                            <a href="#" className='text-[#6D6D6D] hover:text-[#262626] text-[14px] font-semibold py-[5px] block'>Journal</a>
                        </div>
                    </div>

                    <div className="w-2/12">
                        <div>
                            <h3 className='font-bold font-dm text-[#262626] text-[16px]'>SHOP</h3>
                            <a href="#" className='text-[#6D6D6D] hover:text-[#262626] text-[14px] font-semibold py-[5px] block'>Category 1</a>
                            <a href="#" className='text-[#6D6D6D] hover:text-[#262626] text-[14px] font-semibold py-[5px] block'>Category 2</a>
                            <a href="#" className='text-[#6D6D6D] hover:text-[#262626] text-[14px] font-semibold py-[5px] block'>Category 3</a>
                            <a href="#" className='text-[#6D6D6D] hover:text-[#262626] text-[14px] font-semibold py-[5px] block'>Category 4</a>
                            <a href="#" className='text-[#6D6D6D] hover:text-[#262626] text-[14px] font-semibold py-[5px] block'>Category 5</a>
                        </div>
                    </div>

                    <div className="w-2/12">
                        <div>
                            <h3 className='font-bold font-dm text-[#262626] text-[16px]'>HELP</h3>
                            <a href="#" className='text-[#6D6D6D] hover:text-[#262626] text-[14px] font-semibold py-[5px] block'>Privacy Policy</a>
                            <a href="#" className='text-[#6D6D6D] hover:text-[#262626] text-[14px] font-semibold py-[5px] block'>Terms & Conditions</a>
                            <a href="#" className='text-[#6D6D6D] hover:text-[#262626] text-[14px] font-semibold py-[5px] block'>Special E-shop</a>
                            <a href="#" className='text-[#6D6D6D] hover:text-[#262626] text-[14px] font-semibold py-[5px] block'>Shipping</a>
                            <a href="#" className='text-[#6D6D6D] hover:text-[#262626] text-[14px] font-semibold py-[5px] block'>Secure Payments</a>
                        </div>
                    </div>
                    <div className="w-2/12">
                        <div>
                            <h3 className='font-bold font-dm text-[#262626] text-[16px]'>(052) 611-5711</h3>
                            <h3 className='font-bold font-dm text-[#262626] text-[16px]'>company@domain.com</h3>
                        </div>
                    </div>
                    <div className="w-3/12"></div>
                    <div className="w-3/12">
                        <div>
                            <a href="#"><img src={logo} alt="logo" /></a>
                        </div>
                    </div>

                </div>
                <div className="py-[20px] flex justify-between">
                    <div className="w-7/12">
                        <div className='flex items-center gap-5'>
                            <a href="#"> <FaFacebookF /></a>
                            <a href="#"><FaLinkedinIn /></a>
                            <a href="#"><IoLogoInstagram /></a>
                        </div>
                    </div>
                    <div className="w-5/12">
                        <div className="">
                            <p className=' font-dm text-[14px] text-[#6D6D6D]'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
                        </div>
                    </div>
                </div>

            </Container>
        </section>
    )
}

export default Footer
