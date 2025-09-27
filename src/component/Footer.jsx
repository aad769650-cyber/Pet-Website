import { CiLocationOn } from "react-icons/ci"
import contact from "../json/contact.json"
import { RiContactsFill } from "react-icons/ri"
import { IoMailOutline } from "react-icons/io5"
import { NavLink } from "react-router"
export const Footer=()=>{

const icons={
    CiLocationOn:<CiLocationOn/>,
    RiContactsFill:<RiContactsFill></RiContactsFill>,
    IoMailOutline:<IoMailOutline/>
}


    return(
        <>
       <footer className="footer-section">
        <ul className="contact-info ">
            {
contact.map((curr)=>{
    console.log(curr.icon);
    
const {icon}=curr;

    return (
        <>
        <li className="contactList">
            <div className="icon">{icons[icon]}</div>
            <div className="info">
                <div className="location">{curr.location}</div>
                <div className="footer-contact">{curr.contact}</div>
            </div>
            
            </li>
        </>
    )
})
            }
        </ul>
        <hr />

<div className="footer">
<div className="grid">
    <div className="grid_box flex1">Welcome To Mahar Pet Website</div>
    <div className="grid_box flex2"><div>
        We are passionate about pets. From healthy food to fun toys, we offer everything to keep tails wagging and purrs going.</div>
        <div className="links"><span><NavLink to={"/about"}>About</NavLink>|</span> <span><NavLink to={"/contact"}>Contact</NavLink>|</span><NavLink to={"/pet"}>Pets</NavLink><span></span></div></div>





    <div className="grid_box flex1"><div className="work">Check Our Work</div>
    <div className="social_Links">
    
    <a href="/"><img src="linkedin.jpg" alt="Social_Link" /></a>
   <a href="/"> <img src="instagram.jpg" alt="Social_Link" /></a>
    <a href="https://github.com/aad769650-cyber"><img src="github.png" alt="Social_Link" /></a>
    </div>
    </div>
    <div className="grid_box flex3">
        <div className="NewsLetter">NewsLetter</div>
        <div className="update">Subscribe For Latest Updates</div>
       <form action="">
         <input type="email" required className="footer-input" placeholder="Enter Your Email..."/>
         <button className="subscribe_btn">Subscribe</button>
       </form>
    </div>
</div>
</div>
<div className="copyright">Copyright 2025 ©.All rights reserved.</div>
       </footer>
        </>
    )
}