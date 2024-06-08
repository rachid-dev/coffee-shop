import PropTypes from 'prop-types';
import CartProductsList from "./CartProductList";
import ToggleButton from "./ToggleButton";
import { useState } from 'react';

const CartFrame = ({cartState}) => {

    const [isOpen, setIsOpen] = useState(true)


    return(
        isOpen? (

            <div className ="col-4 bg-success">
                <ToggleButton isOpen={isOpen} setIsOpen={setIsOpen}/>
                <CartProductsList cartState ={cartState}/>
            </div>

        ):(
            <div className='col-3'>
                <ToggleButton isOpen={isOpen} setIsOpen={setIsOpen}/>
            </div>
        )
        
    )
}

CartFrame.propTypes={
    cartState : PropTypes.array,
}

export default CartFrame;