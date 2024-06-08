import PropTypes from 'prop-types';

const ProductCard = ({product}) => {
     return(
            <li className='list-unstyled'>
                <div>
                    <img className='rounded' src={product.image} alt={product.name} />
                </div>
                <div>
                    <span>{product.name}</span>
                </div>
                <div>
                    <span>{product.price.value}</span>
                    <span>{product.price.devise}</span>
                </div>
            </li>
     )
}

ProductCard.propTypes={
    product : PropTypes.object.isRequired
}

export default ProductCard;