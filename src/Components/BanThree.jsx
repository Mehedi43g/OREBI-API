import Slider from "react-slick";
import Container from "./Container";
import ls1 from '../assets/ls1.png';
import ls2 from '../assets/ls2.png';
import ls3 from '../assets/ls3.png';
import ls4 from '../assets/ls4.png';
import { FaChevronLeft, FaChevronRight, FaShoppingCart } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { TfiReload } from "react-icons/tfi";
import { useContext } from "react";
import { ApiData } from "./ContextApi";
import { Link } from "react-router-dom";

const BanThree = () => {
    let { info, loading } = useContext(ApiData)


    const PrevArrow = ({ onClick }) => (
        <button
            onClick={onClick}
            className=" absolute top-1/2 -left-5 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 z-20"
        >
            <FaChevronLeft className="text-xl text-black" />
        </button>
    );
    const NextArrow = ({ onClick }) => (
        <button
            onClick={onClick}
            className=" absolute top-1/2 -right-5 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 z-20"
        >
            <FaChevronRight className="text-xl text-black" />
        </button>
    );
    const settings = {
        dots: false,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 390,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };
if (loading) {
    return (
        <Container>
            <div className="flex flex-col items-center justify-center w-full h-[564px] ">
                       <div className=" w-16 h-16 border-6 border-[#767676] border-t-transparent rounded-full animate-spin"></div>
                <h1 className="text-center text-[40px] md:text-[60px] font-semibold  text-[#767676] animate-pulse tracking-wide drop-shadow-sm">
                    Preparing Your Experience...
                </h1>
            </div>
        </Container>
    );
}

    return (

        <>
            <section>
                <Container>
                    <h3 className="font-dm font-bold text-[39px] text-[#262626]">New Arrivals</h3>
                </Container>
            </section>

            <section className=" relative  py-[50px]">
                <Container>
                    <div>
                        <Slider {...settings}>
                            {info.map((item) => (

                                <Link to="/shop">
                                    <div className="w-full h-[400px]">
                                        <div className=" relative h-full overflow-hidden  shadow-md  group">
                                            <img className="w-full  hover:bg-[#f0f8ff] object-cover" src={item.thumbnail} alt="" />
                                            <div className=" absolute top-4 left-3 z-5 " >
                                                <p className=" py-[5px] px-[20px] border-[1px]  bg-[black] text-white font-bold text-[14px] font-dm ">{item.discountPercentage}%</p>
                                            </div>
                                            <div className=" absolute right-0 bottom-20 w-[350px] bg-white hidden group-hover:block ">
                                                <div className="">
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
                                            <div className="flex justify-between pl-[20px] pr-[20px] pt-2 ">
                                                <div className="">
                                                    <p className="font-bold font-dm text-[16px] text-[#262626]">{item.title}</p>
                                                    <p className="font-bold font-dm text-[16px] text-[#8a8686]">{item.category}</p>
                                                </div>
                                                <div className="">
                                                    <p className="font-dm text-[#767676]">${item.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </Slider>

                    </div>
                </Container>
            </section>
            <section className="py-[100px]">
                <Container>
                    <div className="flex gap-3">
                        <div className=" ">
                            <div className="relative  group">
                                <img src={ls1} alt="" />
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
                        <div className=" ">
                            <div className="relative  group">
                                <img src={ls2} alt="" />
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
                        <div className=" ">
                            <div className="relative  group">
                                <img src={ls3} alt="" />
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
                        <div className=" ">
                            <div className="relative  group">
                                <img src={ls4} alt="" />
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
                </Container>
            </section>
        </>
    )
}

export default BanThree
