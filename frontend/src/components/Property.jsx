import { IoIosBed } from "react-icons/io";
import { FaBath } from "react-icons/fa";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";

function Property({property}) {

    return (
        <div className="w-full px-20 mt-10">

            <div className="w-full flex flex-col gap-8">

                <div className="w-full flex flex-col p-8 gap-4 rounded-3xl bg-myGrey-150">

                    <div className="flex justify-between">

                        <div className="flex items-center px-10 justify-between gap-5">
                            <h1 className="text-white text-5xl font-semibold">{property.name}</h1>
                            <p className="text-sm font-medium text-myGrey-600">{property.propertyType}</p>
                        </div>

                        <div className="flex flex-col px-10 justify-center items-start">
                            <h2 className="text-white text-lg font-medium">Price</h2>
                            <p className="text-myViolet-100 text-4xl font-bold">${property.price}</p>
                        </div>
                    </div>

                    <p className="text-white font-medium mx-10 text-xl">{property.address}</p>

                    <div>
                        <div className="bg-myGrey-150 p-10 rounded-3xl">
                            <img className="rounded-xl" src={property.imageUrl} alt="img" />
                        </div>
                    </div>
    
                </div>

                <div className="w-[50%] flex flex-col gap-4 p-8 rounded-3xl bg-myGrey-150">

                    <div className="flex flex-col gap-1">
                        <h1 className="text-white text-3xl font-medium">Description</h1>
                        <p className="text-myGrey-600 text-base font-normal">{property.description}</p>
                    </div>

                    <div>

                        <div className="flex gap-5">
                            <div className="flex gap-2 items-center bg-myGrey-150 px-2 py-1 rounded-2xl">
                                <IoIosBed className="text-white" />
                                <span className="text-white">{property.bedrooms}-Bedrooms</span>
                            </div>

                            <div className="flex gap-2 items-center bg-myGrey-150 px-2 py-1 rounded-2xl">
                                <FaBath className="text-white" />
                                <span className="text-white">{property.bathrooms}-Bathrooms</span>
                            </div>

                            <div className="flex gap-2 items-center bg-myGrey-150 px-2 py-1 rounded-2xl">
                                <HiMiniBuildingOffice2 className="text-white" />
                                <span className="text-white">{property.propertyType}</span>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )

}  

export default Property;