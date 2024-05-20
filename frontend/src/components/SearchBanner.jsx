import { useEffect, useState } from "react"
import { CiLocationOn } from "react-icons/ci";
import { FaHouseChimney } from "react-icons/fa6";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { useRecoilState, useRecoilValue } from "recoil";
import { search } from "../store/atoms/search";
import { PropertyCards } from "./PropertyCards";
import { useNavigate } from "react-router-dom";
import { loginAtom } from "../store/atoms/login";
import toast from "react-hot-toast";
import axios from "axios";

export function SearchBanner() {

    const loggedIn = useRecoilValue(loginAtom);
    const [data, setData] = useRecoilState(search); 
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [properties, setProperties] = useState([]);

    useEffect(() => {

        async function fetchData() {
            setLoading(true);

            const token = localStorage.getItem("token");
            try {
                const response = await axios.get("http://localhost:3000/api/v1/listings/show", {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `${token}`,
                    }
                });

                if (response.data.success) {
                    setProperties(response.data.properties);
                }
                else {
                    toast.error("Error Occurred");
                }
            }
            catch (e) {
                toast.error("Unexpected Error Occurred");
                console.log(e.message);
            }
            setLoading(false);
        }

        fetchData();
    }, [])

    function changeHandler(event) {
        setData(prev => (
            {...prev, [event.target.name]: event.target.value}
        ))
        console.log(data);
    };

    function handleSearch() {
        setLoading(true);
        const filteredProperties = properties.filter((property) => {
            let match = true;

            if (data.name) {
                match = match && property.name.toLowerCase().includes(data.name.toLowerCase());
            }

            if (data.address) {
                match = match && property.address.toLowerCase().includes(data.address.toLowerCase());
            }

            if (data.propertyType) {
                match = match && property.propertyType === data.propertyType;
            }

            if (data.priceRange) {
                match = match && property.price <= parseInt(data.priceRange)
            }

            return match;
        });

        setProperties(filteredProperties);
        setLoading(false);
        console.log(properties);
    }

    function handleClear() {
        async function fetchData() {
            setLoading(true);

            const token = localStorage.getItem("token");
            try {
                const response = await axios.get("http://localhost:3000/api/v1/listings/show", {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `${token}`,
                    }
                });

                if (response.data.success) {
                    setProperties(response.data.properties);
                }
                else {
                    toast.error("Error Occurred");
                }
            }
            catch (e) {
                toast.error("Unexprected Error Occurred");
                console.log(e.message);
            }
            setLoading(false);
        }

        fetchData();
    }

    return (
        <>
            <div className="flex flex-col gap-12 p-8 bg-myGrey-150">

                <div className="flex flex-col p-5 gap-3">
                    <h1 className="text-4xl font-semibold text-white">Find Your Dream Property</h1>
                    <p className="text-base text-myGrey-600">Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey </p>
                </div>

                <div className="flex flex-col gap-5">

                    <div className="flex justify-between items-center mx-60">
                        <input type="text" value={data.name} name="name" placeholder="Search for a Property" onChange={changeHandler}
                        className="px-6 py-2 rounded-xl text-white bg-myGrey-80 placeholder:text-myGrey-600 w-[70%] focus:outline-none"/>
                        <button onClick={handleSearch} className="bg-myViolet-100 px-6 py-3 text-white font-medium rounded-xl">Find Property</button>
                        <button onClick={handleClear} className="bg-red-600 px-6 py-3 text-white font-medium rounded-xl">Clear Filter</button>
                    </div>

                    <div className="flex justify-around items-center">

                        <div className="relative">
                            <span className="absolute top-3 left-1 text-myGrey-600"><CiLocationOn /></span>
                            <select name="address" value={data.address} defaultValue="Address" onChange={changeHandler}
                                className="px-5 py-2 rounded-lg bg-myGrey-80 text-white focus:outline-none">
                                <option value="">Address</option>
                                <option value="India">India</option>
                                <option value="USA">USA</option>
                                <option value="Dubai">Dubai</option>
                                <option value="Spain">Spain</option>
                                <option value="France">France</option>
                            </select>
                        </div>

                        <div className="relative">
                            <span className="absolute top-3 left-1 text-myGrey-600"><FaHouseChimney /></span>
                            <select name="propertyType" value={data.propertyType} defaultValue="Property Type" onChange={changeHandler}
                                className="px-5 py-2 rounded-lg bg-myGrey-80 text-white focus:outline-none">
                                <option value="">Property Type</option>
                                <option value="Appartment">Appartment</option>
                                <option value="Villa">Villa</option>
                                <option value="Mansion">Mansion</option>
                                <option value="Penthouse">Penthouse</option>
                            </select>
                        </div>

                        <div className="relative">
                            <span className="absolute top-3 left-1 text-myGrey-600"><AiOutlineDollarCircle /></span>
                            <select name="priceRange" value={data.priceRange} defaultValue="Price Range" onChange={changeHandler}
                                className="px-5 py-2 rounded-lg bg-myGrey-80 text-white focus:outline-none">
                                <option value="">Price Range</option>
                                <option value="10000">Under 10000</option>
                                <option value="20000">Under 20000</option>
                                <option value="30000">Under 30000</option>
                                <option value="50000">Under 50000</option>
                            </select>
                        </div>

                    </div>

                </div>
            </div>

            <button className="bg-myViolet-100 px-6 ml-8 mt-8 py-3 text-white font-medium rounded-xl" onClick={() => {
                if (loggedIn) {
                    navigate("/add");
                }
                else {
                    toast.error("Sign In to List a Property");
                }
            }}>List a Property</button>

            <div className="mx-8 p-8 border-myGrey-150 rounded-3xl">
                <PropertyCards properties={properties} loading={loading}/>
            </div>
        </>
    )

}