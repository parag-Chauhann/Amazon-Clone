
import { Outlet} from "react-router-dom"
import CarouselImages from "./Carousel/Carousel";
import Products from "./Products/Products";
import { useState } from "react";
import "./Home.css"

function Home () {
    const [productData] = useState([
        {
            id:1,
            title:"Apple iPhone 14 (128 GB) - Midnight",
            price:40000,
            rating:4,
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk7dBUHg0-TxoRHsNeDFwc9WR2F2pDuQg6e_eDJKsV0WX2sfuAnb_6oHwfazYRTXvQD9s&usqp=CAU",
        },
        {
            id:2,
            title:"Echo Dot | Smart speaker with Alexa" ,
            price:3999,
            rating:3,
            img:"https://m.media-amazon.com/images/I/61MbLLagiVL._SX679_.jpg",
        },
        {
            id:3,
            title:"Fire-Boltt Phoenix Smart Watch",
            price:20000,
            rating:3,
            img:"https://m.media-amazon.com/images/I/61xXm6kS-hL._SY450_.jpg",
        },
        {
            id:4,
            title:"Nike Joyride Run Flyknit Men's Running Shoes",
            price:52296,
            rating:3,
            img:"https://m.media-amazon.com/images/I/718+kgstLiL._UY695_.jpg",
        },
        {
            id:5,
            title:"Nike Nigeria Stadium Away Men's Jersey 20-21",
            price:18508,
            rating:4,
            img:"https://m.media-amazon.com/images/I/7169GyCeAgL._UL1500_.jpg",
        },
         
]);

console.log(productData)
    return(

        <div className="home">
        <CarouselImages />

        <div className="main-home-row">
        {productData.map((item,i)=>{
            return(
                
                <div className="home-row" key={i}>
            <Products   title={item.title} 
                        price={item.price}
                        rating={item.rating}
                        img={item.img}
                        id={item.id}/>
            </div>
          
            )

            
        })}
          </div>
      
        <Outlet />
        </div>
    )
}

export default Home;