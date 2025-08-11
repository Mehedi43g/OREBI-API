import Slider from "react-slick";
import banimg from "../assets/banimg.png"
import Container from "./Container";
import { FaCarSide } from "react-icons/fa";
import { SlReload } from "react-icons/sl";

const Banner = () => {
  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    appendDots: dots => (
      <div className="orange"
        style={{
          borderRadius: "10px",
          padding: "10px",
          position: "absolute",
          left: "10%",
          top:"50%",
          transform:"translateY(-50%)"
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div 
        style={{
          width: "30px",
          color: "transparent",
          borderRight: "3px solid white",
          padding:"0px 0"
        }}
      >
        0{i + 1}
      </div>
    )
  };
  return (
    <>
    <section className="">
      <Slider {...settings}>
        <div className="w-full">
          <img src={banimg} alt="" />
      </div>
      <div className="w-full">
          <img src={banimg} alt="" />
      </div>
      <div className="w-full">
          <img src={banimg} alt="" />
      </div>
      <div className="w-full">
          <img src={banimg} alt="" />
      </div>
      </Slider>
    </section>

    <section className="border-b-[1px] border-[#F0F0F0]">
      <Container>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-[20px] font-bold font-dm">2</h2>
            <p className="text-[16px] font-dm">Return policy in 30 days</p>
          </div>
          <div className="flex items-center gap-2">
            <FaCarSide className="text-[20px] font-bold font-dm" />
            <p>Free shipping</p>
          </div>
          <div className="flex items-center gap-2 ">
            <SlReload className="text-[20px] font-bold font-dm"/>
            <p className="text-[16px] font-dm">Return policy in 30 days</p>
          </div>
        </div>
      </Container>
    </section>
    
    </>
    
  )
}

export default Banner
