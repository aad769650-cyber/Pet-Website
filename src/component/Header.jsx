import { NavLink } from "react-router"
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
export const Header=()=>{
    const [clicked,setClicked]=useState(false)
   const [showMenu,setShowMenu]=useState(false)
   const handleClick=()=>{
    setClicked(!clicked)
    setShowMenu(!showMenu)
   }
   
   
   
   
    return(
        <>
<div className="navbar flex-between">

    
    <div className="pets">
<img src="logo.jpg" alt="pets logo" className="logo-img"/>



        </div> 

<ul className="header flex-evenly">
<li className="header_lists"><NavLink to={"/"}>Home</NavLink></li>
<li className="header_lists"><NavLink to={"/about"}>About</NavLink></li>
<li className="header_lists"><NavLink to={"/faq"}>FAQ</NavLink></li>
<li className="header_lists"><NavLink to={"/pets"}>Pets</NavLink></li>
<li className="header_lists"><NavLink to={"/contact"}>Contact</NavLink></li>



</ul>
<li className="header_lists menu" onClick={handleClick}>{clicked?<RxCross2 />:<IoMenu />}</li>

</div>
{showMenu&&<div className="menubar flex-center">
    <ul className="menuUl ">
<li className="menu_list"><NavLink to={"/"}>Home</NavLink></li>
<li className="menu_list"><NavLink to={"/about"}>About</NavLink></li>
<li className="menu_list"><NavLink to={"/faq"}>FAQ</NavLink></li>
<li className="header_lists"><NavLink to={"/pets"}>Pets</NavLink></li>
<li className="menu_list"><NavLink to={"/contact"}>Contact</NavLink></li>
</ul>
</div>


}

        </>
    )
}