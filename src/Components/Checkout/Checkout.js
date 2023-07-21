import React from 'react'
import "./Checkout.css";
import{useStateValue} from "../ContextAPI/StateProvidert";
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{cart}] = useStateValue();
    console.log("cart", cart)
  return (
    <>
    <div className='checkout'>
        <img className='checkout-ad'
        src="https://www.filepicker.io/api/file/SVFQZQAyRpqJ31f6LNGe"
        alt="add"/>
    </div>
    {cart?.length ===0?(
        <div>
            <h1>Your shoping cart is empty</h1>
            <p>
                You have no itmes in your cart,
                you have to add item to the cart
                Happy Shopping 
            </p>
        </div>
    ):(
        <div>
            <h1>Your shopping cart</h1>

            {cart.map((item ,i)=>{
                return(
                    <div key={i}>
                        <CheckoutProduct    id={item.id}
                                            title={item.title}
                                            img={item.img}
                                            price={item.price}
                                            rating={item.rating}/>
                    </div>
                    
            )

            })}

        </div>

        
    )}
    </>
  )
}

export default Checkout