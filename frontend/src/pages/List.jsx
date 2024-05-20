import axios from "axios";
import { useState } from "react"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


export function List() {

    const navigate = useNavigate();

    const [data, setData] = useState({
        name: "",
        address: "",
        description: "",
        price: "",
        bedrooms: "",
        bathrooms: "",
        propertyType: "",
        featured: "",
        imageFile: null
    });

    function changeHandler(event) {
        if (event.target.name === "imageFile") {
            setData(prev => (
                { ...prev, [event.target.name]: event.target.files[0] }
            ));
        }
        else {
            setData(prev => (
                {...prev, [event.target.name]: event.target.value}
            ))
        }
    }

    async function handleSubmit(e) {

        e.preventDefault();
        // Create a new FormData object
        const formData = new FormData();

        // Append all form data to FormData
        for (const key in data) {
            formData.append(key, data[key]);
        }
        
        // console.log(data);
        // console.log(formData);

        const token = localStorage.getItem("token");

        try {
            const response = await axios.post("http://localhost:3000/api/v1/listings/post", data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    'Authorization': `${token}`,
                },
            });

            // console.log(response.data); // Handle successful response from backend

            if (response.data.success) {
                toast.success("Property Listed Successfully"); 
                navigate("/property");
            }
        } catch (error) {
            console.error("Error uploading image:", error); // Handle errors
        }
    }

    return (
        <div className="h-full mt-10 flex justify-center items-center">
            <div className="border-2 border-myGrey-150 rounded-xl flex flex-col gap-6 p-8">
                <h1 className="text-center text-3xl font-semibold">List a Property</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <div className="flex gap-2">
                        <label className="font-medium" htmlFor="name">Name:</label>
                        <input
                            className="focus:outline-none border border-myGrey-600 rounded-lg px-3 py-1"
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Property Name"
                            value={data.name}
                            onChange={changeHandler}
                        />
                    </div>

                    <div className="flex gap-2">
                        <label className="font-medium" htmlFor="price">Price:</label>
                        <input
                            className="focus:outline-none border border-myGrey-600 rounded-lg px-3 py-1"
                            type="number"
                            id="price"
                            name="price"
                            placeholder="Property Price"
                            value={data.price}
                            onChange={changeHandler}
                        />
                    </div>

                    <div className="flex gap-2">
                        <label className="font-medium" htmlFor="desc">Description:</label>
                        <textarea
                            className="focus:outline-none border border-myGrey-600 rounded-lg px-3 py-1"
                            type="text"
                            id="desc"
                            placeholder="Property Description"
                            name="description"
                            value={data.description}
                            onChange={changeHandler}
                        />
                    </div>

                    <div className="flex gap-2">
                        <label className="font-medium" htmlFor="propertyType">Property Type:</label>
                        <select
                            id="propertyType"
                            name="propertyType"
                            value={data.propertyType}
                            onChange={changeHandler}
                        >
                            <option value="">Property Type</option>
                            <option value="Villa">Villa</option>
                            <option value="Mansion">Mansion</option>
                            <option value="Appartment">Appartment</option>
                            <option value="Penthouse">Penthouse</option>
                        </select>
                    </div>

                    <div className="flex gap-2">
                        <label className="font-medium" htmlFor="address">Address:</label>
                        <select
                            id="address"
                            name="address"
                            value={data.address}
                            onChange={changeHandler}
                        >
                            <option value="">Select Address</option>
                            <option value="India">India</option>
                            <option value="Dubai">Dubai</option>
                            <option value="USA">USA</option>
                            <option value="Spain">Spain</option>
                            <option value="France">France</option>
                        </select>
                    </div>

                    <div className="flex gap-2">
                        <label className="font-medium" htmlFor="bedrooms">Bedrooms:</label>
                        <select
                            id="bedrooms"
                            name="bedrooms"
                            value={data.bedrooms}
                            onChange={changeHandler}
                        >
                            <option value="">Select Bedrooms</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>

                    <div className="flex gap-2">
                        <label className="font-medium" htmlFor="bathrooms">Bathrooms:</label>
                        <select
                            id="bathrooms"
                            name="bathrooms"
                            value={data.bathrooms}
                            onChange={changeHandler}
                        >
                            <option value="">Select Bathrooms</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>

                    
                    <div className="flex gap-2">
                        <label className="font-medium" htmlFor="featured">Featured:</label>
                        <select
                            id="featured"
                            name="featured"
                            value={data.featured}
                            onChange={changeHandler}
                        >
                            <option value="">Select Featured</option>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </div> 

                    <div className="flex gap-2">
                        <label className="font-medium" htmlFor="image">Image:</label>
                        <input type="file" name="imageFile" id="image" onChange={changeHandler}/>
                    </div>   

                    <button className="bg-myViolet-100 px-6 py-2 rounded-xl text-white font-medium" type="submit">Submit</button>
                </form>
            </div> 
        </div>
    )

}