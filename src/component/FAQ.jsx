import { useState } from "react";
import faq from "../json/faq.json"
import { FaQCard } from "./FaqCard";
export const FAQ=()=>{
    const [show,setShow]=useState(false);




const handleClick=(id)=>{
    // console.log("Clicked",id);
    
    setShow((prev)=>{
        // console.log(prev);
        
        // console.log(prev?"false":id);
      
        
        return (prev==id?"false":id)})
}


    return(
        <>
 <div className="faq ">
 {faq.map((curr,idx)=>{
    const {id}=curr;
    return (
    <FaQCard curr={curr} onToggle={()=>handleClick(id)} isActive={show==id} key={idx}></FaQCard>
    )
 })}
 </div>
        </>
    )
}