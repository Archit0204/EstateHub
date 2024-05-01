
export function Faq() {

    return (
        <div className="mx-5 p-6 mt-10 border-2 border-myGrey-80 rounded-xl">
            <div className="flex flex-col gap-8 px-5">

                <div className="flex justify-between items-end">

                    <div className="flex flex-col gap-3">
                        <h1 className="text-myGrey-80 text-3xl font-bold">Frequently Asked Questions</h1>
                        <p className="text-myGrey-150 text-base font-normal max-w-[80%]">Find answers to common questions about EstateHub services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.</p>
                    </div>

                    <div>
                        <div>
                            <button className="bg-myGrey-150 px-[20px] py-[12px] rounded-lg text-white">View All FAQs</button>
                        </div>
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    <div className="flex flex-col gap-5 p-8 bg-myGrey-80 rounded-lg">
                        <h1 className="text-white text-xl font-medium">How do I search for properties on EstateHub?</h1>
                        <p className="text-myGrey-600 text-sm">Learn how to use our user-friendly search tools to find properties that match your criteria.</p>
                        <button className="bg-myGrey-150 px-[20px] py-[12px] max-w-[40%] rounded-lg text-white">Read More</button>
                    </div>

                    <div className="flex flex-col gap-5 p-8 bg-myGrey-80 rounded-lg">
                        <h1 className="text-white text-xl font-medium">What documents do I need to sell my property through EstateHub?</h1>
                        <p className="text-myGrey-600 text-sm">Find out about the necessary documentation for listing your property with us.</p>
                        <button className="bg-myGrey-150 px-[20px] py-[12px] max-w-[40%] rounded-lg text-white">Read More</button>
                    </div>

                    <div className="flex flex-col gap-5 p-8 bg-myGrey-80 rounded-lg">
                        <h1 className="text-white text-xl font-medium">How can I contact an EstateHub agent?</h1>
                        <p className="text-myGrey-600 text-sm">Discover the different ways you can get in touch with our experienced agents.</p>
                        <button className="bg-myGrey-150 px-[20px] py-[12px] max-w-[40%] rounded-lg text-white">Read More</button>
                    </div>

                </div>

            </div>
        </div>
        
    )

}