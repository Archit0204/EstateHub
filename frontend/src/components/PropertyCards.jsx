import { PropertyCard } from "./PropertyCard";
import { Spinner } from "./Spinner";

export function PropertyCards({loading, properties}) {

    return(
        <div className="flex justify-center items-center">

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
            
        </div>
    )
}