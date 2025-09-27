export const FaQCard=({isActive,curr,onToggle})=>{
const { id,question,answer}=curr;
// console.log(isActive);

    return(
        <>
         <>
        
        <div className="faq-section">
            <div className="question ">{question}<button className={` ${!isActive?"faq-btn":"closeBtn"}`} onClick={()=>onToggle(id)}>{!isActive?"Show":"Close"}</button></div>
        
        <div className={`${isActive?"show":"hide"}`}>{answer}</div></div>
        

        
        </>
        
        </>
    )
}