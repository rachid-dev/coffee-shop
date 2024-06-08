import { useState } from "react"
import CartFrame from "../../components/CartFrame"
import FilterableProductList from "../../components/FilterableProductList"
import Header from '../../components/Header'

const Home = () => {
    
    const[cart, setCart] = useState([]);

    const productList = [
        {id: "1", name : "Nespresso", price : { value : 30, devise : "$"}, image : "/nespresso.jpeg"},
        {id: "2", name : "Senseo", price : { value : 30, devise : "$"}, image : "/nespresso.jpeg"},
        {id: "3", name : "Senseo", price : { value : 30, devise : "$"}, image : "/nespresso.jpeg"},
        {id: "4", name : "Senseo", price : { value : 30, devise : "$"}, image : "/nespresso.jpeg"},
    ]

    return(
        <div className="container-fluid-sm container-fluid-md ">
            <div className="row" >
                <Header/>
            </div>
            <div className="row" >
                <CartFrame cartState = {[cart, setCart]} />
                <FilterableProductList productList={productList} cartState = {[cart, setCart]} />
            </div>
        </div>
    )
}

export default Home;