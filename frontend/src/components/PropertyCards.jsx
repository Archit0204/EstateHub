import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { propertiesAtom } from "../store/atoms/properties";
import { PropertyCard } from "./PropertyCard";
import { Spinner } from "./Spinner";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

export function PropertyCards() {
    
    // const properties = useRecoilValueLoadable(propertiesAtom);

    const [loading, setLoading] = useState(false);
    const [properties, setProperties] = useState([]);

    useEffect(() => {

        async function fetchData() {
            setLoading(true);

            const token = localStorage.getItem("token");
            try {
                const response = await axios.get("http://localhost:3000/api/v1/listings/show", {
                    headers: {
                        'Content-Type': 'application/json', // Example header
                        'Authorization': `${token}`, // Example header
                    }
                });
                
                if (response.data.success) {
                    setProperties(response.data.properties)
                }
                else {
                    toast.error("Error Occurred");
                }
            }
            catch (e) {
                toast.error("Unexprected Error Occurred");
            }
            setLoading(false);
        }
        
        fetchData();

    }, [])

    console.log(properties);

    return(
        <div className="flex justify-center items-center">
            {/* <PropertyCard property={properties[0]} />  */}
            {/* {
                properties.length > 0 ?
                properties.map(property => <PropertyCard property={property}/>) :
                <div className="w-full flex items-center justify-start font-semibold text-3xl">
                    No Properties Found
                </div>
            } */}
            <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    loading ? (<Spinner/>) : (
                        properties.length > 0 ?
                        properties.map(property => <PropertyCard key={property._id} property={property} />) :
                        <div className="w-full flex items-center justify-start font-semibold text-3xl">
                            No Properties Found
                        </div>
                    )
                }
            </div>  
            {/* {
                properties.state === "loading" ? (<Spinner/>) : (
                    properties.contents.length > 0 ?
                    properties.contents.map(property => <PropertyCard key={property._id} property={property} />) :
                    <div className="w-full flex items-center justify-start font-semibold text-3xl">
                        No Properties Found
                    </div>
                )
            } */}
        </div>
    )
}