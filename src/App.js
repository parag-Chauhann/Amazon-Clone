
import "./App.css";
import { RouterProvider, createBrowserRouter} from "react-router-dom"
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login/Login"
import TermsAndCondition from "./Components/Login/Terms&Condition";




function App(){
   const router = createBrowserRouter([
      {path:"/", element:<Navbar />, children:[
         {path:"/", element:<Home />},
         {path:"/checkout", element:<Checkout />}
      ]},
      {path:"/login", element:<Login />},
      {path:"/terms&condition", element:<TermsAndCondition />}

      
   ]);
   
  
 return(
    <>
    <RouterProvider router={router}/>

    </>
   )
}

export default App ;





