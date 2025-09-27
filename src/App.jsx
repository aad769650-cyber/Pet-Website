import { createBrowserRouter, RouterProvider } from "react-router";
import { MainLayout } from "./component/MainLayout";
import { Home } from "./component/Home";
import { About } from "./component/About";
import { FAQ } from "./component/FAQ";
import { Pets } from "./component/Pets";
import { Contact } from "./component/Contact";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App=()=>{
  const router=createBrowserRouter([{
    path:"/",
    element:<MainLayout/>,
    children:([{
      path:"/",
      element:<Home/>
    },
{
path:"/about",
      element:<About/>
}
,
{
path:"/faq",
      element:<FAQ/>
}
,
{
path:"/pets",
      element:<Pets/>
}

,
{
path:"/contact",
      element:<Contact/>
}

      
    ])
  }])
    const client=new QueryClient;
    
  return (
    

    <>
    
   <QueryClientProvider client={client}>
    
   <RouterProvider router={router}></RouterProvider>
   

   </QueryClientProvider>
   
   </>


  )
}


export default App;