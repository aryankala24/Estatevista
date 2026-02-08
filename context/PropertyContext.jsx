import { createContext, useContext, useEffect, useState } from "react";
import data from "../data/properties.json";
const C=createContext();
export function useProperties(){return useContext(C);}
export function PropertyProvider({children}){
 const [properties,setProperties]=useState([]);
 useEffect(()=>{setProperties(data);},[]);
 return(<C.Provider value={{properties,setProperties}}>{children}</C.Provider>);
}
