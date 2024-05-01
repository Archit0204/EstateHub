import { FaStar } from "react-icons/fa";

export function Testimonials() {

    return (
        <div className="mx-5 p-6 mt-10 border-2 border-myGrey-80 rounded-xl">
            <div className="flex flex-col gap-8 px-5">

                <div className="flex justify-between items-end">

                    <div className="flex flex-col gap-3">
                        <h1 className="text-myGrey-80 text-3xl font-bold">What Our Clients Say</h1>
                        <p className="text-myGrey-150 text-base font-normal max-w-[80%]">Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.</p>
                    </div>

                    <div>
                        <div>
                            <button className="bg-myGrey-150 px-[20px] py-[12px] rounded-lg text-white">View All Testimonials</button>
                        </div>
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    <div className="flex flex-col gap-5 p-8 bg-myGrey-80 rounded-lg">
                        <div className="flex gap-2">
                            <FaStar color="yellow"/>
                            <FaStar color="yellow"/>
                            <FaStar color="yellow"/>
                            <FaStar color="yellow"/>
                            <FaStar color="yellow"/>
                        </div>
                        <h1 className="text-white text-xl font-medium">Exceptional Service!</h1>
                        <p className="text-myGrey-600 text-sm">Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!</p>
                        <button className="bg-myGrey-150 px-[20px] py-[12px] max-w-[40%] rounded-lg text-white">Read More</button>
                    </div>

                    <div className="flex flex-col gap-5 p-8 bg-myGrey-80 rounded-lg">
                        <div className="flex gap-2">
                            <FaStar color="yellow"/>
                            <FaStar color="yellow"/>
                            <FaStar color="yellow"/>
                            <FaStar color="yellow"/>
                            <FaStar color="yellow"/>
                        </div>
                        <h1 className="text-white text-xl font-medium">Efficient and Reliable</h1>
                        <p className="text-myGrey-600 text-sm">Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.</p>
                        <button className="bg-myGrey-150 px-[20px] py-[12px] max-w-[40%] rounded-lg text-white">Read More</button>
                    </div>

                    <div className="flex flex-col gap-5 p-8 bg-myGrey-80 rounded-lg">
                        <div className="flex gap-2">
                            <FaStar color="yellow"/>
                            <FaStar color="yellow" />
                            <FaStar color="yellow" />
                            <FaStar color="yellow" />
                            <FaStar color="yellow" />
                        </div>
                        <h1 className="text-white text-xl font-medium">Trusted Advisors</h1>
                        <p className="text-myGrey-600 text-sm">The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!</p>
                        <button className="bg-myGrey-150 px-[20px] py-[12px] max-w-[40%] rounded-lg text-white">Read More</button>
                    </div>

                </div>

            </div>
        </div>
    )

}