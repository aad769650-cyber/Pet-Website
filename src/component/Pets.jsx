import { useEffect, useState } from "react"
import { getData } from "../api/getApiData";
import { NavLink } from "react-router";

export const Pets=()=>{
    const [data,setData]=useState([])
    const getApiData=async()=>{
const res=await getData();
// console.log(res.data);
setData(res.data)
    }
    
    console.log(data);
    
    
    
    useEffect(()=>{
getApiData()
    },[])
    
    return(
        <>
        
        <div className="pets">
            <ul className="petUl">
                {
                    data?.map((curr)=>{
                        return(
                            <>
                            
                            <li className="petList"><img src={curr.url} alt="dog images" /> <button className="submit_btn"><NavLink to={"/contact"}>Adopt Me</NavLink></button></li>
                           
                            </>
                        )
                    })
                }
            </ul>
        </div>
        
        </>
    )
}