import { useStateValue } from "../../ContextAPI/StateProvidert";
import "./Product.css";

export default function Products (props) {
    
    const [, dispatch] = useStateValue();


    const handleAddProduct = () =>{
        dispatch({
            type:"Add-to-Cart",
            item:{
                id:props.id,
                title:props.title,
                img:props.img,
                price:props.price,
                rating:props.rating,

            },
        });
    };
    
    return(
        <>
        <div className="product">
            <div className="product-info">
                <p><b>{props.title}</b></p>
                <p className="product-price">
                    <small>Rs. </small>
                    <strong>{props.price}</strong>
                </p>
                <div className="product-rating">
                    {
                        Array(props.rating).fill().map((_,i)=>{
                            return(
                                <p>⭐</p>
                            )
                        })
                    }

                </div>

                <img src={props.img} alt="Product_image"/>

                <button onClick={handleAddProduct}>Add to cart</ button>


            </div>
            
        </div>
        </>
    )
}