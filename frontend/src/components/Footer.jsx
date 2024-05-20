import { MdOutlineMail } from "react-icons/md";
import { BsSendFill } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


export function Footer() {

    const navigate = useNavigate();

    return (
        <div className="bg-myGrey-80 w-full flex flex-col mt-10 gap-8 px-24 pt-24">
            
            <div className="flex justify-between">

                <div className="flex flex-col gap-5 max-w-[70%]">
                    <h1 className="text-white text-4xl font-semibold">Start Your Real Estate Journey Today</h1>
                    <p className="text-myGrey-600">Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.</p>
                </div>

                <div>
                    <button onClick={() => navigate("/property")} className="bg-myViolet-100 text-white font-medium px-5 py-3 rounded-md">Explore Properties</button>
                </div>

            </div>

            <div className="flex flex-col">

                <div className="flex justify-between">

                    <div className="flex flex-col gap-3">
                        <div className="text-3xl text-white font-semibold">EstateHub</div>
                        <div>
                            <input className="absolute bg-myGrey-150 rounded-md pl-8 pr-12 text-white py-3" type="email" placeholder="Enter your email"/>
                            <MdOutlineMail className="relative left-2 top-4 text-xl text-myGrey-600"/>
                            <BsSendFill className="relative left-56 text-myGrey-600"/>
                        </div>
                    </div>

                    <div className="text-white flex gap-16">

                        <div className="flex flex-col gap-3">
                            <h3 className="text-myGrey-600">Home</h3>

                            <div>
                                <p>Hero Section</p>
                                <p>Features</p>
                                <p>Properties</p>
                                <p>Testimonials</p>
                                <p>FAQ's</p>
                            </div>

                        </div>

                        <div className="flex flex-col gap-3">
                            <h3 className="text-myGrey-600">About Us</h3>

                            <div>
                                <p>Our Story</p>
                                <p>Our Works</p>
                                <p>How it Works</p>
                                <p>Our Team</p>
                                <p>Our Clients</p>
                            </div>

                        </div>

                        <div className="flex flex-col gap-3">
                            <h3 className="text-myGrey-600">Properties</h3>

                            <div>
                                <p>Portfolio</p>
                                <p>Categories</p>
                            </div>

                        </div>

                        <div className="flex flex-col gap-3">
                            <h3 className="text-myGrey-600">Services</h3>

                            <div>
                                <p>Valuation Mastery</p>
                                <p>Strategic Marketing</p>
                                <p>Negotiation Wizadry</p>
                                <p>Closing Success</p>
                                <p>Property Management</p>
                            </div>

                        </div>

                        <div className="flex flex-col gap-3">
                            <h3 className="text-myGrey-600">Contact Us</h3>

                            <div>
                                <p>Contact Form</p>
                                <p>Our Offices</p>
                            </div>

                        </div>

                    </div>

                </div>

                <div>

                    <div>
                        <p>@2023 Estatein. All Rights Reserved.</p>
                        <p>Terms & Conditions</p>
                    </div>

                    <div>
                        <div><FaFacebookF /></div>
                        <div><FaLinkedinIn /></div>
                        <div><FaTwitter/></div>
                        <div><FaYoutube/></div>
                    </div>

                </div>

            </div>
        </div>
    )

}