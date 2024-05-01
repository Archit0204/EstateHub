import { Faq } from "../components/Faq";
import Featured from "../components/Featured";
import { Footer } from "../components/Footer";
import { HomeBanner } from "../components/HomeBanner";
import { Testimonials } from "../components/Testimonials";

function Home() {
    return (
        <div className="flex flex-col">
            <HomeBanner/>
            <Featured/>
            <Testimonials/>
            <Faq/>
            <Footer/>
        </div>
    )
}

export default Home;