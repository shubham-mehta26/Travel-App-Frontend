import axios from "axios";
import { useEffect , useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar , HotelImages } from "../../components"

export const SingleHotel = ()=>{

    const { id } = useParams();
    const [ singleHotel , setSingleHotel ] = useState({});

    useEffect(()=>{
        (async ()=>{
            try{
                const  { data } = await axios.get(`https://travel-app-backend.cyclic.cloud/api/hotels/${id}`);
                setSingleHotel(data);
            }
            catch(err){
                console.log(err);
            }
        })()
    },[id])
    
    return(
        <>
        <Navbar />
        <main className="single-hotel-page">
            <HotelImages singleHotel={singleHotel}/>
        </main>
        </>
    )
}