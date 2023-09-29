// import * as React from 'react';
import { useEffect , useState } from "react"
import axios from "axios";
import {Tabs , Tab , Box} from '@mui/material';
import { useCategory } from "../../context";
import "./Categories.css"

export const Categories = ()=>{
    const [value, setValue] = useState(0);
    const [categories,setCategories] = useState([]);
    const { setHotelCategory} = useCategory();
    
    
    


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleCategoryClick = (category)=>{
        setHotelCategory(category.category);
    }

    // console.log({ "hotel category" : hotelCategory});

    useEffect(()=>{
         (async ()=>{
            try{
                const {data} = await axios.get("https://travel-app-backend.cyclic.cloud/api/category");
                setCategories(data);
            }catch(err){
                console.log(err);
            }
         })()
    },[])

    return(
        <div className="categories">    
            <Box sx={{ maxWidth: { xs: 320, sm: "80%" }, bgcolor: 'white' , color:"text.secondary"}}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="scrollable force tabs example"
                    sx={{ color: '#363030', fontFamily: 'Poppins'}}
                >
                    {
                        categories.map((category)=>(
                            <Tab onClick={()=>handleCategoryClick(category)} label={category.category} key={category._id}/>
                        ))
                    }
                </Tabs>
            </Box>
        </div>
        
        
    )
}