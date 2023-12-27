import {useContext, createContext, useState, useEffect } from "react";

const mobileViewContext = createContext();

const MobileViewProvider = ({children}) =>{

    const [ mobileView , setMobileView ] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth <= 660) {
            setMobileView(true);
          } else {
            setMobileView(false);
          }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, [mobileView, setMobileView]);

    return <mobileViewContext.Provider 
    value={{mobileView, setMobileView}}>
        {children}
    </mobileViewContext.Provider>
}

const useMobileView = () => useContext(mobileViewContext);

export { useMobileView , MobileViewProvider};