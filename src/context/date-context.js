import {useContext, createContext, useReducer} from 'react';
import { dateReducer } from '../reducer';

const initialState = {
    guests: 0,
    destination: "",
    checkInDate: null,
    checkOutDate: null,
    isSearchModalOpen: false,
}

const DateContext = createContext(initialState);

const DateProvider = ({children}) =>{
    const [{guests, destination, checkInDate, checkOutDate, isSearchModalOpen},dateDispatch] = useReducer(dateReducer, initialState);
    
    
    return <DateContext.Provider value={{guests, destination, checkInDate, checkOutDate, isSearchModalOpen, dateDispatch}}
    >
        {children} 
    </DateContext.Provider>
    
}

const useDate = () => useContext(DateContext);

export {useDate, DateProvider};