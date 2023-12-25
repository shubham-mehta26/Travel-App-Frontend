import "./HotelDetails.css";
export const HotelDetails = ({ singleHotel }) => {
  const {
    hostName,
    propertyType,
    city,
    state,
    numberOfBathrooms,
    numberOfBeds,
    numberOfguest,
    numberOfBedrooms,
    ameneties,
    healthAndSafety,
    houseRules,
  } = singleHotel;
  return (
    <>
      <div className="hotel-details-contailer">
        <div className="host-details">
          <p className="host-name">
            {propertyType} by {hostName} in {city}, {state}
          </p>
          <span className="span">
            {numberOfguest} guests. {numberOfBedrooms} bedroom. {numberOfBeds}{" "}
            bed. {numberOfBathrooms} bathroom
          </span>
        </div>
        <div className="key-features ">
          <div className="description">
            <span>
              <ion-icon name="checkmark-done-outline"></ion-icon>
            </span>
            Self check-in
            <div className="sub-description">
              You can check in with the building staff.
            </div>
          </div>

          <div className="description">
            <ion-icon name="medal-outline"></ion-icon> {hostName} is a Superhost
            <div className="sub-description">
              Superhosts are experienced, highly rated Hosts.
            </div>
          </div>

          <div className="description">
            <ion-icon name="bed-outline"></ion-icon>Ease with comfort
            <div className="sub-description">
              Highly rated in comfort, cleanliness for best experience.
            </div>
          </div>
        </div>
        <div className="ameneties-and-health">
          <div className="ameneties">
            {ameneties &&
              ameneties.map((item, index) => {
                return (
                  <div className="points" key={index}>
                    <ion-icon name="apps-outline"></ion-icon>
                    <div>{item}</div>
                  </div>
                );
              })}
          </div>
          <div className="health">
            {healthAndSafety &&
              healthAndSafety.map((item, index) => {
                return (
                  <div className="points" key={index}>
                    <ion-icon name="apps-outline"></ion-icon>
                    <div>{item}</div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="house-rules">
          {houseRules &&
            houseRules.map((item, index) => {
              return (
                <div className="points">
                  <ion-icon name="caret-forward-outline"></ion-icon>
                  <div>{item}</div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
