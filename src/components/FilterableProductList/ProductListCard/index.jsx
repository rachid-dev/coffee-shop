import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

const ProductListCard = ({productList, cartState, productToSearch}) => {

    let productListCards = [];
    let filtredProductListCards = [];
    const[cart, setCart] = cartState;
    

    productList?.forEach(product => {
        productListCards.push(

            <div key={product.id} className='col-md p-3'>

                <ProductCard product ={product} />

                <button data-testid={`add-to-cart-${product.id}`} onClick={() => updateCart(product)}>Ajouter</button>

            </div>

        )
        
    });

    productList?.forEach(product => {
        if(product.name === productToSearch){

            filtredProductListCards.push(
    
                <div key={product.id} className='col-md p-3'>
    
                    <ProductCard product ={product} />
    
                    <button onClick={() => updateCart(product)}>Ajouter</button>
    
                </div>
    
            )
        }
            
        
    });

    

    function updateCart(selectedProduct){
        
        const filterdProducts = cart.filter(product => product.id === selectedProduct.id);

        if(filterdProducts.length===0){ //if the product hasn't been added yet
            setCart([...cart, {...selectedProduct, quantity : 1}])
        }
        else{
            
            setCart(
                cart.map(product => {
                    if(product.id === selectedProduct.id)
                        product.quantity +=1
                    return product
                })
            )
        }
    }

    return(
        
        <ul>
            {
                productToSearch==="" ?(
                    <div data-testid="list-products" className='row d-inline-flex p-3 justify-content-center flex-wrap'>
                        {productListCards}
                    </div>
                ):
                (
                    <div data-testid="filtered-list-products" className='row d-inline-flex p-3 justify-content-center flex-wrap'>
                        {filtredProductListCards}
                    </div>
                )
            }
        </ul> 
        
    )
}

ProductListCard.propTypes={
    productList : PropTypes.arrayOf(PropTypes.object),
    cartState : PropTypes.array,
    productToSearch : PropTypes.string
}

export default ProductListCard;