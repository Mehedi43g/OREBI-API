import Container from './Container'
import lam2 from "../assets/lamtim.png"
import lam3 from "../assets/lamlam.png"
import lam1 from "../assets/lam.png"

const Banntw = () => {
  return (
   <section className='py-[100px]'>
     <Container>
        <div className="flex gap-3">
            <div className="w-6/12">
        <div className="w-full relative ">
            <img src={lam1} alt="" />
            <div className=" absolute top-[60%] left-[10%] ">

                <h3 className='text-[39px] font-bold font-dm'>Phones Sale</h3>
                <div className="flex items-center gap-2">
                    <p className='text-[14px] font-dm text-[#2626264d]'>Up to </p> <span className='text-[39px] font-bold font-dm text-[#262626]'>30%</span> <p className='text-[14px] font-dm text-[#2626264d]'>sale for all phones!</p>
                </div>
                    <div className="pt-10">
                        <button type='button' className=' border-2 py-[10px] px-[40px] text-white bg-[#262626] cursor-pointer'>Shop Now</button>
                    </div>
            </div>
        </div>
        </div>
        <div className="w-6/12">
        <div className=" relative">
            <img src={lam2} alt="" />
            <div className=" absolute top-[16%] left-[4%] ">

                <h3 className='text-[39px] font-bold font-dm'>Electronics Sale</h3>
                <div className="flex items-center gap-2 py-5">
                    <p className='text-[14px] font-dm text-[#2626264d]'>Up to </p> <span className='text-[39px] font-bold font-dm text-[#262626]'>70%</span> <p className='text-[14px] font-dm text-[#2626264d]'>sale for all electronics!</p>
                </div>
                <div className="">
                        <button type='button' className=' border-2 py-[10px] px-[40px] text-white bg-[#262626] cursor-pointer'>Shop Now</button>
                    </div>
            </div>
        </div>
        <div className="pt-[35px] relative">
            <img src={lam3} alt="" />
            <div className=" absolute top-[16%] left-[4%] ">

                <h3 className='text-[39px] font-bold font-dm'>Furniture Offer</h3>
                <div className="flex items-center gap-2 py-10">
                    <p className='text-[14px] font-dm text-[#2626264d]'>Up to </p> <span className='text-[39px] font-bold font-dm text-[#262626]'>50%</span> <p className='text-[14px] font-dm text-[#2626264d]'>sale for all furniture items!</p>
                </div>
                <div className="">
                        <button type='button' className=' border-2 py-[10px] px-[40px] text-white bg-[#262626] cursor-pointer'>Shop Now</button>
                    </div>
            </div>
        </div>
        </div>
        </div>
    </Container>
   </section>
  )
}

export default Banntw
