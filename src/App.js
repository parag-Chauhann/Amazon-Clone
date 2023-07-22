
import "./App.css";
import { Outlet, RouterProvider, createBrowserRouter} from "react-router-dom"
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login/Login"
import TermsAndCondition from "./Components/Login/Terms&Condition";
import { useStateValue } from "./Components/ContextAPI/StateProvidert";
import { useEffect } from "react";
import {auth} from "./firebase";
import SignUp from "./Components/SignUp/Signup";




function App(){

   const [{user}, dispatch] = useStateValue();

   useEffect(() => {
      const unsunscribe = auth.onAuthStateChanged((authUser) => {
         if(authUser) {
            // the user is logged in...

            dispatch({
               type:"SET_USER",
               user: authUser
            })
         } else {

            dispatch({
               type:"SET_USER",
               user: null,
            })

         }
      });

      return () => {
         unsunscribe ();
      } 
   },[dispatch])

   console.log(user);

   const router = createBrowserRouter([
      {path:"/", element:<Navbar />, children:[
         {path:"/", element:<Home />},
         {path:"/checkout", element:<Checkout />}
      ]},
      {path:"/login", element:<Login />},
      {path:"/signup", element:<SignUp />},
      {path:"/terms&condition", element:<TermsAndCondition />},

      
   ]);
   
  
 return(
    <>
    <RouterProvider router={router}/>
    <Outlet />

    </>
   )
}

export default App ;