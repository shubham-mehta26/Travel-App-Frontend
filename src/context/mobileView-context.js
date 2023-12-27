import {useContext, createContext, useState } from "react";

const mobileViewContext = createContext();

const MobileViewProvider = ({children}) =>{

    const [ mobileView , setMobileView ] = useState(false);

    return <mobileViewContext.Provider 
    value={{mobileView, setMobileView}}>
        {children}
    </mobileViewContext.Provider>
}

const useMobileView = () => useContext(mobileViewContext);

export { useMobileView , MobileViewProvider};