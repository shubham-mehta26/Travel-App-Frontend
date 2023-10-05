export const HotelImages = ({ singleHotel }) =>{
    
    const { _id, image , imageArr } = singleHotel;
    return(
        <>
        <div className="images">
            <div className="main-img">
                <img src={image} alt="hotel-img" />
            </div>
            <div className="secondary-img">
                {
                    imageArr && imageArr.map(image => <img src={image} alt="hotel-img" />)
                }
            </div>
        </div>
        </>
    )
}