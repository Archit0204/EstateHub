import axios from "axios";
import { useState } from "react";
import { FiUser } from "react-icons/fi";
import { MdLockOutline } from "react-icons/md";
import { useRecoilState } from "recoil";
import { loginAtom } from "../store/atoms/login";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"


function SigninForm({setAuthType}) {

    const [loggedIn, setLoggedIn] = useRecoilState(loginAtom);

    if (loggedIn) {
        navigate("/");
    }

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "", password: ""
    });

    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(e) {
        setFormData(prev => ({...prev, [e.target.name]: e.target.value}));
    }

    async function submitHandler(e) {

        e.preventDefault();

        try{
            // const newFormData = JSON.stringify(formData);
            const response = await axios.post(`${process.env.API_URL}/api/v1/auth/signin`, {
                email: formData.email,
                password: formData.password
            });

            if (response.data.success) {
                const token = response.data.token;
                localStorage.setItem("token", `Bearer ${token}`);
                setLoggedIn(true);
                toast.success("User Signed In");
                navigate("/");
            }
            else {
                toast.error("Error Occurred");
            }
        }
        catch(e) {
            toast.error("Unexpected Error Occurred");
            console.log(e);
        }


    }  

    return (
        <div className="flex flex-col gap-8 p-8 border-2 border-myViolet-100 rounded-xl">
            <div className="w-full flex flex-col gap-3">
                <h1 className="text-center text-3xl text-myGrey-150 font-bold">Login</h1>
                <p className="text-myGrey-600">Welcome back! Sign in to unlock exclusive features and manage your listings.</p>
            </div>

            <form className="flex flex-col gap-6" onSubmit={submitHandler}>
                <label className="relative">
                    <FiUser className="absolute top-3 left-2" />
                    <input type="email" placeholder="Email" name="email" onChange={changeHandler} value={formData.email} 
                    className="w-full border-2 border-myViolet-100 px-8 py-2 rounded-lg focus:outline-none"/>
                </label>

                <label className="relative">
                    <MdLockOutline className="absolute top-3 left-2"/>
                    {showPassword ? <AiOutlineEye className="cursor-pointer absolute right-2 top-3" onClick={() => setShowPassword(prev => !prev)} /> : <AiOutlineEyeInvisible className="cursor-pointer absolute right-2 top-3" onClick={() => setShowPassword(prev => !prev)} />}
                    <input type={showPassword ? "text" : "password"} placeholder="Password" name="password" onChange={changeHandler} value={formData.password}
                    className="w-full border-2 border-myViolet-100 px-8 py-2 rounded-lg focus:outline-none"/>
                </label>

                <div className="flex flex-col gap-2 place-items-center">
                    <button className="bg-myViolet-100 w-[40%] max-w-[210px]  rounded-lg px-8 py-2 text-white">Login</button>
                    <p onClick={() => setAuthType("signup")} className="text-myGrey-80 cursor-pointer hover:text-myViolet-100 transition font-medium">Or sign up for a new account</p>
                </div>
            </form>
        </div>
    )

}

export default SigninForm;