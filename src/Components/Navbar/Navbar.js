import { Link, Outlet } from "react-router-dom";
import "./Navbar.css";
import { useStateValue } from "../ContextAPI/StateProvidert";

export default function Navbar() {
    const [{cart}] = useStateValue();
    return(
        <>
        <nav className="Navbar">
            {/* Logo */}
            <Link to="/login">
            <img 
                className="logo" 
                alt="amazon_logo"
                src="https://static.vecteezy.com/system/resources/previews/019/040/342/non_2x/amazon-logo-editorial-free-vector.jpg"/>
            </Link>
           

            {/* Search Box */}
            <div className="search">
                <input type="text" className="search-input"/>
                <img  className="search-logo" alt="search_icon" src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-1024.png"/>
            </div>
            


            {/* menu bar */}
            <div className="menu">
                <Link to="" className="menu-link">
                    <div className="menu-option">
                    <span className="menu-option-line-one">Hello User</span>
                    <span className="menu-option-line-two">Signin </span>
                    </div>
                </Link>

                <Link to="" className="menu-link">
                    <div className="menu-option">
                    <span className="menu-option-line-one">Returns </span>
                    <span className="menu-option-line-two">Orders </span>
                    </div>
                </Link>

                <Link to="" className="menu-link">
                    <div className="menu-option">
                    <span className="menu-option-line-one">Your </span>
                    <span className="menu-option-line-two">Prime </span>
                    </div>
                </Link>
                

            </div>

            {/* cart */}
            <div className="cart-cointainer">
                <Link to="/checkout">
                <img  className="cart-logo" alt="cart_icon" src="https://www.vhv.rs/dpng/d/444-4443182_free-white-shopping-basket-icon-clipart-png-download.png"/>
                </Link>
                <span className="cart-count" >{cart?.length}</span>
                

            </div>



        </nav>
        <Outlet />
        
        </>
        
    )
}