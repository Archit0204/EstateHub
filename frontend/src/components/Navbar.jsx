import React from "react";
import { useRecoilState } from "recoil";
import { loginAtom } from "../store/atoms/login";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { EstateHub } from "./EstateHub";

function Navbar() {

    const [loggedIn, setLoggedIn] = useRecoilState(loginAtom);
    const navigate = useNavigate();


    function logoutHandler() {

        setLoggedIn(prev => !prev);
        localStorage.removeItem("token");
        toast.success("Logged Out");
        navigate("/");
    }

    return (
        <div className="w-full flex px-10 py-5 items-center justify-around bg-myGrey-150 text-white">
            <div className="cursor-pointer" onClick={() => navigate("/")}><EstateHub/></div>
            <div className="flex px-2 gap-8">
                <div className="cursor-pointer">Properties</div>
                <div className="cursor-pointer">About Us</div>
                <div className="cursor-pointer">Contact Us</div>
            </div>
            <div>
                {
                    !loggedIn && <Link to="/auth">Login | Register</Link> 
                }
                {
                    loggedIn && <button onClick={logoutHandler}>Logout</button>
                }
            </div>
        </div>
    )

}

export default Navbar;