import PropTypes from 'prop-types'


const FilterBar = ({setProductToSearch}) => {

    function updateSearchBar(value){
        setProductToSearch(value);
    }

    
    return(
        <div className="col-md offset-md-3 mb-md-5 mt-md-3">
            <input onChange={e => updateSearchBar(e.target.value)} type="text"/>
            <button>search</button>
        </div>
    )
}

FilterBar.propTypes={
    setProductToSearch : PropTypes.func
}

export default FilterBar;