
import { FaArrowRightLong } from "react-icons/fa6"
import "../App.css" 
import { NavLink } from "react-router"
export const About=()=>{
    return(
        <>
        
       
<div className="about">About Us</div>
        <section className="homeBox">
            <div className="Card flex1"><div className="services">Our Services</div> <div className="about-para">Discover a wide variety of mouth-watering recipes — from quick weeknight dinners to indulgent desserts. Whether you're a beginner or a seasoned cook, our step-by-step guides make cooking easy and fun.</div></div>
            <div className="Card flex1"><div className="services">Why Choose Us</div><div className="about-para">We blend passion with precision. Every recipe is tested, easy to follow, and packed with flavor. With over 30 happy home cooks and 4.5 five-star ratings, we’re your go-to kitchen companion.</div></div>
            <div className="Card flex1"><div className="services">Get in Touch</div><div className="para">  We love hearing from our food-loving community! Reach out with questions, suggestions, or just to say hi. Have a recipe idea or want to collaborate? Let’s talk!            <button className="homeBtn flex-center"><NavLink to={"/contact"}>Join Us</NavLink> <FaArrowRightLong className="homeIcon"/></button></div></div>
        </section>
        </>
    )
}