import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { propertiesAtom } from "../store/atoms/properties";
import { PropertyCard } from "./PropertyCard";
import { Spinner } from "./Spinner";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

export function FeaturedPropertyCards() {

    // const properties = useRecoilValueLoadable(propertiesAtom);

    const [loading, setLoading] = useState(false);
    const [properties, setProperties] = useState([]);

    useEffect(() => {

        async function fetchData() {
            setLoading(true);

            const token = localStorage.getItem("token");
            try {
                const response = await axios.get(`${process.env.API_URL}/api/v1/listings/show`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `${token}`,
                    }
                });

                if (response.data.success) {
                    const threeProperties = response.data.properties.slice(0, 3);
                    setProperties(threeProperties);
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

    return (
        <div className="flex justify-center items-center">

            <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    loading ? (<Spinner />) : (
                        properties.length > 0 ?
                            properties.map(property => <PropertyCard key={property._id} property={property} />) :
                            <div className="w-full flex items-center justify-start font-semibold text-3xl">
                                No Properties Found
                            </div>
                    )
                }
            </div>

        </div>
    )
}