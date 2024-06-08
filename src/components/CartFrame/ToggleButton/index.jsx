import PropTypes from 'prop-types'


const ToggleButton = ({isOpen, setIsOpen}) => {

    function toggle(){
        setIsOpen(!isOpen);
    }

    return(
        isOpen ?(
            <div  className=" offset-md-10 mb-md-4 mt-md-3">
                <button data-testid='toggle-button' onClick={toggle}>Fermer</button>
            </div>
        ):(
            <div className=" offset-md-1 mb-md-4 mt-md-3">
                <button data-testid='toggle-button' onClick={toggle}>Ouvrir le panier</button>
            </div>
        )
        
    )

}

ToggleButton.propTypes={
    isOpen : PropTypes.bool.isRequired,
    setIsOpen : PropTypes.func.isRequired
}

export default ToggleButton;