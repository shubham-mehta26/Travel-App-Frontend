import "./Home.css";
import axios from "axios";
import { useEffect , useState } from "react";
import { useCategory } from "../../context";
import InfiniteScroll from "react-infinite-scroll-component";

import { Navbar , HotelCard , Categories} from "../../components";


export const Home=()=>{
    
    const [hasMore,setHasMore]=useState(true);
    const [hotels,setHotels]=useState([]);
    const [testData,setTestData]=useState([]);
    const [currIndex,setCurrIndex]=useState(16);
    const { hotelCategory } = useCategory();

    useEffect(()=>{
        ( async ()=>{
            try{
                const { data } = await axios.get(`https://travel-app-backend.cyclic.cloud/api/hotels
                ?category=${hotelCategory}`);
                setTestData(data);
                setHotels(data ? data.slice(0,16) : []);
            }
            catch(err){
                console.log(err);
            }
        })()
    },[hotelCategory])

    const fetchMoreData = () => {
        if(hotels.length >= testData.length){
            setHasMore(false);
            return;
        }
        setTimeout(()=>{
            if(hotels && hotels.length>0){
                setHotels(hotels.concat(testData.slice(currIndex,currIndex+16)));
                setCurrIndex(prev => prev+16);
            }else{
                setHotels([]);
            }
        },1000);
    }

    return(
        <>
        <Navbar/>
        <Categories/>
            {
                hotels && hotels.length>0 ? (
                    <InfiniteScroll
                        dataLength={hotels.length}
                        next={fetchMoreData}
                        hasMore={hasMore}
                        loader={hotels.length.length>0 && <h3 className="loading">Loading...</h3>}
                        endMessage={<p className="end-message">No more Hotels....</p>}
                    >
                        <main className="main">
                            {
                                hotels && hotels.map(hotel => <HotelCard key={hotel._id} hotel={hotel}/>)
                            }
                        </main>
                    </InfiniteScroll>

                ) : (<></>)
            }
        
        </>
    )
}