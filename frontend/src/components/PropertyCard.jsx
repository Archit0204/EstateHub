import { IoIosBed } from "react-icons/io";
import { FaBath } from "react-icons/fa";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { loginAtom } from "../store/atoms/login";
import toast from "react-hot-toast";

export function PropertyCard({property}) {

    const navigate = useNavigate();
    const loggedIn = useRecoilValue(loginAtom);

    function viewDetailHandler() {
            navigate(`/property/${property._id}`);
    }
    
    return(
        <div className="p-5 flex flex-col mb-8 gap-3 border border-myGrey-150 rounded-lg">
            <img className="rounded-md" src={property.imageUrl} alt="img" />

            <div>
                <h1 className="text-2xl font-semibold">{property.name}</h1>
                <p className="text-base font-normal">{property.description}</p>
            </div>

            <div className="flex justify-evenly">
                <div className="flex gap-2 items-center bg-myGrey-150 px-2 py-1 rounded-2xl">
                    <IoIosBed className="text-white"/>
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

            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-base font-semibold">Price</h2>
                    <p className="text-2xl font-semibold">${property.price}</p>
                </div>

                <button onClick={viewDetailHandler} className="bg-myViolet-100 px-4 py-2 rounded-lg text-white">View Property Details</button>
            </div>
        </div>
    )

}