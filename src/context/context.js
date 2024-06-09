import { createContext ,useEffect ,useState } from "react";
import { fetchData } from "../utils/Api";

const context =createContext();


function AppContext(props)
{
    
const[loading,setLoading]=useState(false)
const[searchResult,setSearchResult]=useState(false)
const[selectCategories,setSelectCategories]=useState("new")
const[mobileMenu,setMobileMenu]=useState(false)
useEffect(()=>{
    fetchSelectedCategoryData(selectCategories)
    
},[selectCategories])
const fetchSelectedCategoryData = (query)=>{
    setLoading(true)
    fetchData(`search/?q=${query}`).then((res)=>{
        console.log(res);
    })
}
return(
    <>
    <context.Provider value={{
        loading,
        setLoading,
        searchResult,
        setSearchResult,
        selectCategories,
        setSelectCategories,
        mobileMenu,
        setMobileMenu,
        apiKey: process.env.REACT_APP_YOU_TUBE_API_KEY,
    }}>
        {props.children}
        </context.Provider>
        </>
)
}
export default AppContext;