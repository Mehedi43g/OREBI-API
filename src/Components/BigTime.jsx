import ktim from '../assets/ktimes.png'
import Container from './Container'

const BigTime = () => {
  return (
    <>
      <section className='pb-[100px]'>
        <Container>
          <div className="flex gap-5 bg-[#F3F3F3] items-center">
            <div className="w-4/12">
              <img src={ktim} alt="" />
            </div>
            <div className="w-8/12">
              <h3 className=' font-bold font-dm text-[#262626] text-[39px]'>Phone of the year</h3>
              <p className=' font-semibold font-dm text-[#262626] text-[16px] py-[20px]'>Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry orem Ipsum..</p>
              <button className=' font-bold font-dm text-[14px] text-[#FFFFFF] py-[10px] px-[30px] bg-black shadow-md cursor-pointer' >Shop Now</button>
            </div>
          </div>

        </Container>
      </section>
    </>
  )
}

export default BigTime
