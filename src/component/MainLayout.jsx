import { Outlet } from "react-router"
import { Footer } from "./Footer"
import { Header } from "./Header"

export const MainLayout=()=>{
    return(
        <>
     <Header></Header>
     <Outlet></Outlet>
        <Footer></Footer>
        </>
    )
}