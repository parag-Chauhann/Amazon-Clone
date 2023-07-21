import React from 'react'
import "./CheckoutProduct.css"
import {useStateValue} from "../ContextAPI/StateProvidert"
function CheckoutProduct(props) {
    console.log(props)
    const [, dispatch] = useStateValue();

    const handleRemove = () => {
        dispatch({
            type:"Remove-from-Cart",
            id:props.id,
        })
    };

  return (
    <div className='checkout-product'>
        <img src={props.img} alt=""/>
        <div className='checkout-product-info'>
            <p className='checkout-product-title'>{props.title}</p>

            <p className='checkout-product-price'>
                <small>Rs. </small>
                <strong>{props.price}</strong>

            </p>

            <div className="checkout-product-rating">
                    {
                        Array(props.rating).fill().map((_,i)=>{
                            return(
                                <p>⭐</p>
                            )
                        })
                    }
            </div>

            <button onClick={handleRemove}>Remove from Cart</button>
        </div>

    </div>
    
  )
}

export default CheckoutProduct