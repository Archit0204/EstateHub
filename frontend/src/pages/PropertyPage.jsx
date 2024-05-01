import { useParams } from "react-router-dom";
import { Faq } from "../components/Faq";
import { Footer } from "../components/Footer";
import Property from "../components/Property";
import { useRecoilValue } from "recoil";
import { singlePropSelector } from "../store/atoms/properties";

export function PropertyPage() {

    const { id } = useParams();
    const property = useRecoilValue(singlePropSelector(id));
    console.log(property);

    // const [loading, setLoading] = useState(false);
    // const [property, setProperty] = useState(null);

    // useEffect(() => {
    //     console.log("Starting UE");
    //     async function fetchData() {
    //         setLoading(true);

    //         const token = localStorage.getItem("token");
    //         try {
    //             const response = await axios.get(`http://localhost:3000/api/v1/listings/getProp/${id}`, {
    //                 headers: {
    //                     'Content-Type': 'application/json', // Example header
    //                     'Authorization': `${token}`, // Example header
    //                 }
    //             });
    //             console.log(response);
    //             if (response.data.success) {
    //                 setProperty(response.data.property)
    //             }
    //             else {
    //                 toast.error("Error Occurred");
    //             }
    //         }
    //         catch (e) {
    //             toast.error("Unexprected Error Occurred");
    //         }
    //         setLoading(false);
    //         console.log(property);
    //     }

    //     fetchData();

    // }, [])

    return (
        <div>
            {
                console.log("Inside Return")
            }
            <Property property={property}/>
            <Faq />
            <Footer />
        </div>
    )

}