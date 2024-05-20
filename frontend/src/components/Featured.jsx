import { useNavigate } from "react-router-dom";
import { FeaturedPropertyCards } from "./FeaturedPropertyCards";

export default function Featured() {

    const navigate = useNavigate(); 

    return (
        <div className="mx-5 p-6 mt-10 border-2 border-myGrey-80 rounded-xl">

            <div className="flex flex-col gap-8 px-5">

                <div className="flex justify-between items-end">

                    <div className="flex flex-col gap-3">
                        <h1 className="text-myGrey-80 text-3xl font-bold">Featured Properties</h1>
                        <p className="text-myGrey-150 text-base font-normal max-w-[80%]">Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.</p>
                    </div>

                    <div>
                        <div>
                            <button className="bg-myGrey-150 px-[20px] py-[12px] rounded-lg text-white" onClick={() => navigate("/property")}>View All Properties</button>
                        </div>
                    </div>

                </div>

                <FeaturedPropertyCards useCase="featured"/>

            </div>

        </div>
    )
}