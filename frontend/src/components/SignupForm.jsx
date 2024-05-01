import { useState } from "react";
import { FiUser } from "react-icons/fi";
import { MdLockOutline } from "react-icons/md";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import toast from "react-hot-toast";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { loginAtom } from "../store/atoms/login";
import { useNavigate } from "react-router-dom";

function SignupForm({setAuthType}) {

    const [formData, setFormData] = useState({
        firstName: "", lastName: "", email: "", password: "", confirmPassword: ""
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const setIsLoggedIn = useSetRecoilState(loginAtom);

    const navigate = useNavigate();

    function changeHandler(e) {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
        console.log(formData);
    }

    async function submitHandler(e) {
        e.preventDefault();

        try{
            const response = await axios.post("http://localhost:3000/api/v1/auth/signup", {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                password: formData.password,
                confirmPassword: formData.confirmPassword
            })

            if (response.data.success) {
                const token = response.data.token;
                localStorage.setItem("token", `Bearer ${token}`);
                setIsLoggedIn(true);
                toast.success("User Registered Successfully");
                navigate("/");
            }
            else {
                toast.error("Error Occurred");
            }   
        }
        catch(e) {
            toast.error("Unexpected Error Occurred");
        }
    }

    return (
        <div className="flex flex-col gap-8 p-8 border-2 border-myViolet-100 rounded-xl">
            <div className="w-full flex flex-col gap-3">
                <h1 className="text-center text-3xl text-myGrey-150 font-bold">Signup</h1>
                <p className="text-myGrey-600">Register now to access all the exclusive features</p>
            </div>

            <form className="flex flex-col gap-6" onSubmit={submitHandler}>
                <label>
                    <input type="text" placeholder="Firstname" name="firstName" onChange={changeHandler} value={formData.firstName}
                        className="w-full border-2 border-myViolet-100 px-4 py-2 rounded-lg focus:outline-none" />
                </label>

                <label>
                    <input type="text" placeholder="Lastname" name="lastName" onChange={changeHandler} value={formData.lastName}
                        className="w-full border-2 border-myViolet-100 px-4 py-2 rounded-lg focus:outline-none" />
                </label>

                <label className="relative">
                    {/* <FiUser className="absolute top-3 left-2" /> */}
                    <input type="email" placeholder="Email" name="email" onChange={changeHandler} value={formData.email}
                        className="w-full border-2 border-myViolet-100 px-4 py-2 rounded-lg focus:outline-none" />
                </label>

                <label className="relative">
                    {/* <MdLockOutline className="absolute top-3 left-2" /> */}
                    {showPassword ? <AiOutlineEye className="cursor-pointer absolute right-2 top-3" onClick={() => setShowPassword(prev => !prev)} /> : <AiOutlineEyeInvisible className="cursor-pointer absolute right-2 top-3" onClick={() => setShowPassword(prev => !prev)} />}
                    <input type={showPassword ? "text" : "password"} placeholder="Password" name="password" onChange={changeHandler} value={formData.password}
                        className="w-full border-2 border-myViolet-100 px-4 py-2 rounded-lg focus:outline-none" />
                </label>

                <label className="relative">
                    {/* <MdLockOutline className="absolute top-3 left-2" /> */}
                    {showConfirmPassword ? <AiOutlineEye className="cursor-pointer absolute right-2 top-3" onClick={() => setShowConfirmPassword(prev => !prev)} /> : <AiOutlineEyeInvisible className="cursor-pointer absolute right-2 top-3" onClick={() => setShowConfirmPassword(prev => !prev)} />}
                    <input type={showConfirmPassword ? "text" : "password"} placeholder="Confirm Password" name="confirmPassword" onChange={changeHandler} value={formData.confirmPassword}
                        className="w-full border-2 border-myViolet-100 px-4 py-2 rounded-lg focus:outline-none" />
                </label>

                <div className="flex flex-col gap-2 place-items-center">
                    <button className="bg-myViolet-100 w-[40%] max-w-[210px]  rounded-lg px-4 py-2 text-white">Signup</button>
                    <p onClick={() => setAuthType("signin")} className="text-myGrey-80 cursor-pointer hover:text-myViolet-100 transition font-medium">Already have an Account? Sign In</p>
                </div>
            </form>
        </div>
    )

}

export default SignupForm;