import "./HotelImages.css"

export const HotelImages = ({ singleHotel }) =>{
    
    const {name, image , imageArr } = singleHotel;
    console.log(singleHotel);
    return(
        <>
        <div className="images">
            <div className="hotel-name1">
                {name}
            </div>
            <div className="main-img">
                <img src={image} alt="hotel-img" />
            </div>
            <div className="secondary-img">
                {
                    imageArr && imageArr.map((image , index) => <img key={index} src={image} alt="hotel-img" />)
                }
            </div>
        </div>
        </>
    )
}