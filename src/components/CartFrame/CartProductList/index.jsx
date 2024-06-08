import PropTypes from 'prop-types';

const CartProductList = ({cartState}) => {

    let cartProducts = [];
    const [cart, setCart] = cartState;
    let [totalPrice, devise] = calculateTotalPrice(cart)


    cart?.forEach(product => {
        cartProducts.push(
            <li key={product.id}>{product.quantity} {product.name} {product.price.value} {product.price.devise}</li>
        )
    });


    function calculateTotalPrice(cartProducts){
        let sum=0;
        let devise = "";
        cartProducts?.forEach(product => {
            sum+= product.quantity * product.price.value;
            devise = product.price.devise;
        });
        return [sum, devise];
    }


    function clearCart(){
        setCart([]);

    }

    return(
        <div className='offset-md-2 text-white'>
            <h3>Panier</h3>
            <ul data-testid="cart-products">
                {cartProducts}
            </ul>
            <span data-testid="total" >Total : {totalPrice}{devise}</span><br/><br/>
            <div className='row'>
                <div className='col-md'>
                    <button data-testid="clear-cart" onClick={clearCart}>Vider le panier</button>
                </div>
                <div className='col-md-7'>
                    <button>Passer la commande</button>
                </div>
            </div>

        </div>
   
    )
}

CartProductList.propTypes = {
    cartState : PropTypes.array
}

export default CartProductList;