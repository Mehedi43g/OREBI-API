import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

const ApiData = createContext();
const ContextApi = ({children}) => {
  let [info, setInfo] = useState([])
  let [loading,setloading] = useState(true)
  let getData =()=>{
    axios.get("https://dummyjson.com/products").then((response)=>{
      setInfo(response.data.products);
      setloading(false)
    })
  }
  useEffect(()=>{
    getData();
  },[])
  return (
    <ApiData.Provider value={{info,loading}}>{children}</ApiData.Provider>
  )
}

export {ApiData , ContextApi};
