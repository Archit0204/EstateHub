import { useNavigate } from "react-router-dom";
import homeImage from "../assets/Image.jpg";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { IoIosCash } from "react-icons/io";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { LuSun } from "react-icons/lu";
import { GoArrowUpRight } from "react-icons/go";


export function HomeBanner() {

    const navigate = useNavigate();

    return (
        <div className="flex flex-col gap-3 w-full">

            <div className="flex flex-col-reverse md:flex-row w-full gap-14">

                <div className="flex flex-col gap-14 w-full pt-16 pl-16">

                    <div className="flex flex-col gap-6">
                        <h1 className="text-myGrey-80 text-3xl md:text-6xl font-semibold">Discover Your Dream Property with EstateHub</h1>
                        <p className="text-myGrey-600 text-base font-medium">Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
                    </div>

                    <div className="flex gap-5 w-full flex-row justify-start items-center">
                        <button className="bg-myGrey-80 text-white px-6 py-3 rounded-lg">Learn More</button>
                        <button className="bg-myViolet-100 text-white px-6 py-3 rounded-lg" onClick={() => navigate("/property")}>Browse Properties</button>
                    </div>

                    <div className="grid grid-cols-2 justify-center pr-4 md:grid-cols-3 gap-5">

                        <div className="bg-myGrey-150 px-6 py-4 rounded-lg">
                            <h1 className="text-white text-3xl font-bold">200+</h1>
                            <p className="text-myGrey-600 text-base">Happy Customers</p>
                        </div>

                        <div className="bg-myGrey-150 px-6 py-4 rounded-lg">
                            <h1 className="text-white text-3xl font-bold">10k+</h1>
                            <p className="text-myGrey-600 text-base">Properties for Clients</p>
                        </div>

                        <div className="bg-myGrey-150 px-6 py-4 rounded-lg">
                            <h1 className="text-white text-3xl font-bold">16+</h1>
                            <p className="text-myGrey-600 text-base">Years of Experience</p>
                        </div>

                    </div>

                </div>

                <div className="w-full h-full">

                    <div className="w-full h-full bg-myGrey-80">
                        <img src={homeImage} alt="helo" />
                    </div>

                </div>

            </div>

            <div className="grid w-full grid-cols-2 gap-5 md:grid-cols-4 px-5">

                <div className="flex flex-col py-[40px] px-[15px] relative bg-myGrey-150 rounded-lg justify-between items-center">
                    <div className="flex flex-col gap-5">
                        <div className="flex justify-center">
                            <div className="border-2 border-myViolet-100 rounded-full p-3">
                                <SiHomeassistantcommunitystore className="text-myViolet-100 text-3xl"/>
                            </div>
                        </div>
                        <p className="text-white font-semibold text-lg">Find Your Dream Home</p>
                    </div>
                    <GoArrowUpRight className="text-myGrey-600 text-2xl absolute right-5 top-5"/>
                </div>

                <div className="flex flex-col py-[40px] px-[15px] relative bg-myGrey-150 rounded-lg justify-between items-center">
                    <div className="flex flex-col gap-5">
                        <div className="flex justify-center">
                            <div className="border-2 border-myViolet-100 rounded-full p-3">
                                <IoIosCash className="text-myViolet-100 text-3xl" />
                            </div>
                        </div>
                        <p className="text-white font-semibold text-lg">Unlock Property Value</p>
                    </div>
                    <GoArrowUpRight className="text-myGrey-600 text-2xl absolute right-5 top-5" />
                </div>

                <div className="flex flex-col py-[40px] px-[15px] relative bg-myGrey-150 rounded-lg justify-between items-center">
                    <div className="flex flex-col gap-5">
                        <div className="flex justify-center">
                            <div className="border-2 border-myViolet-100 rounded-full p-3">
                                <HiMiniBuildingOffice2 className="text-myViolet-100 text-3xl" />
                            </div>
                        </div>
                        <p className="text-white font-semibold text-lg">Effortless Property Management</p>
                    </div>
                    <GoArrowUpRight className="text-myGrey-600 text-2xl absolute right-5 top-5" />
                </div>

                <div className="flex flex-col py-[40px] px-[15px] relative bg-myGrey-150 rounded-lg justify-between items-center">
                    <div className="flex flex-col gap-5">
                        <div className="flex justify-center">
                            <div className="border-2 border-myViolet-100 rounded-full p-3">
                                <LuSun className="text-myViolet-100 text-3xl" />
                            </div>
                        </div>
                        <p className="text-white font-semibold text-lg">Smart Investments. Informed Decisions</p>
                    </div>
                    <GoArrowUpRight className="text-myGrey-600 text-2xl absolute right-5 top-5" />
                </div>

            </div>

        </div>
    )

}