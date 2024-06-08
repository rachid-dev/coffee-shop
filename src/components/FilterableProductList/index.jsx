import PropTypes from 'prop-types';
import FilterBar from "./FilterBar";
import ProductListCard from "./ProductListCard";
import { useState } from 'react';


const FilterableProductList = ({productList, cartState}) => {
    const[productToSearch, setProductToSearch] = useState('');

    
    return(
        <div className='col-8'>
            <FilterBar setProductToSearch = {setProductToSearch}/>
            <ProductListCard productList={productList} cartState = {cartState} productToSearch={productToSearch}/>
            
        </div>
    )
}

FilterableProductList.propTypes={
    productList : PropTypes.arrayOf(PropTypes.object),
    cartState : PropTypes.array
}

export default FilterableProductList;