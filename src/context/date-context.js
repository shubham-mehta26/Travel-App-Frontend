import {useContext, createContext, useReducer} from 'react';
import { dateReducer } from '../reducer';

const initialState = {
    checkInDate: "23",
    checkOutDate: "24",
    isSearchModalOpen: false,
}

const DateContext = createContext(initialState);

const DateProvider = ({children}) =>{
    const [{checkInDate, checkOutDate, isSearchModalOpen},dateDispatch] = useReducer(dateReducer, initialState);
    
    
    return <DateContext.Provider value={{checkInDate, checkOutDate, isSearchModalOpen, dateDispatch}}
    >
        {children} 
    </DateContext.Provider>
    
}

const useDate = () => useContext(DateContext);

export {useDate, DateProvider};