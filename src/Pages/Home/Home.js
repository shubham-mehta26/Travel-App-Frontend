import { Navbar , HotelCard } from "../../components"
import "./Home.css";
export const Home=()=>{
    return(
        <>
        <Navbar/>
        <main className="main">
            <HotelCard/>
        </main>
        </>
    )
}