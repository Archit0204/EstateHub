import { useState } from "react";
import Image from "../assets/Image.jpg"
import SigninForm from "../components/SigninForm";
import SignupForm from "../components/SignupForm";

function Authentication() {

    const [authType, setAuthType] = useState("signin");

    return (
        <div className="flex">
            <div className="w-[50vw] h-[90.8vh] flex justify-center items-center">
                {
                    authType === "signin" ? <SigninForm setAuthType={setAuthType}/> : <SignupForm setAuthType={setAuthType}/>
                }
            </div>

            <div className="w-[50vw] h-[90.8vh] max-h-full flex items-center justify-center bg-myViolet-100">
                <div className="w-[70%]">
                    <img className="rounded-3xl" src={Image} alt="Image"/>
                </div>
            </div>

        </div>
    )

}

export default Authentication;