
import Container from './Container'
import cl1 from "../assets/c1.png"
import cl2 from "../assets/c2.png"
import cl3 from "../assets/c3.png"
import cl4 from "../assets/c4.png"

const BanTxt = () => {
    return (
        <>
            <section className='pb-[100px]'>
                <Container>
                    <div className=" pb-[50px]">
                        <h4 className=' font-bold font-dm text-[39px] text-[#262626]'>Special Offers</h4>
                    </div>
                    <div className="flex gap-3">
                        <div className="">
                            <div className=" ">
                                <div className="relative  group">
                                    <img src={cl1} alt="" />
                                    <div className=" absolute top-4 left-3 z-5 " >
                                        <p className=" py-[10px] px-[30px] border-[1px] border-black bg-[#262626] text-white font-bold text-[14px] font-dm ">10%</p>
                                    </div>

                                </div>
                                <div className="flex gap-16 pt-5 ">
                                    <p className="font-bold font-dm text-[18px] text-[#262626]">Basic Crew  Neck Tee</p>
                                    <p className="font-dm text-[#767676]">$44.00</p>
                                </div>
                                <div className="">
                                    <p className="font-dm text-[#767676]">Black</p>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className=" ">
                                <div className="relative  group">
                                    <img src={cl2} alt="" />
                                    <div className=" absolute top-4 left-3 z-5 " >
                                        <p className=" py-[10px] px-[30px] border-[1px] border-black bg-[#262626] text-white font-bold text-[14px] font-dm ">10%</p>
                                    </div>

                                </div>
                                <div className="flex gap-16 pt-5 ">
                                    <p className="font-bold font-dm text-[18px] text-[#262626]">Basic Crew  Neck Tee</p>
                                    <p className="font-dm text-[#767676]">$44.00</p>
                                </div>
                                <div className="">
                                    <p className="font-dm text-[#767676]">Black</p>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className=" ">
                                <div className="relative  group">
                                    <img src={cl3} alt="" />
                                    <div className=" absolute top-4 left-3 z-5 " >
                                        <p className=" py-[10px] px-[30px] border-[1px] border-black bg-[#262626] text-white font-bold text-[14px] font-dm ">10%</p>
                                    </div>

                                </div>
                                <div className="flex gap-16 pt-5 ">
                                    <p className="font-bold font-dm text-[18px] text-[#262626]">Basic Crew  Neck Tee</p>
                                    <p className="font-dm text-[#767676]">$44.00</p>
                                </div>
                                <div className="">
                                    <p className="font-dm text-[#767676]">Black</p>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className=" ">
                                <div className="relative  group">
                                    <img src={cl4} alt="" />
                                    <div className=" absolute top-4 left-3 z-5 " >
                                        <p className=" py-[10px] px-[30px] border-[1px] border-black bg-[#262626] text-white font-bold text-[14px] font-dm ">10%</p>
                                    </div>

                                </div>
                                <div className="flex gap-16 pt-5 ">
                                    <p className="font-bold font-dm text-[18px] text-[#262626]">Basic Crew  Neck Tee</p>
                                    <p className="font-dm text-[#767676]">$44.00</p>
                                </div>
                                <div className="">
                                    <p className="font-dm text-[#767676]">Black</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default BanTxt
