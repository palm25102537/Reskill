function Search(props){
    const {searchText,handleChangeSearch} = props
    
    return(
        <div className='app-search'> 
        <input className='app-search-input' value={searchText} onChange={(e)=>handleChangeSearch(e)} placeholder='Search'></input>
        </div>
    )
   
}

export default Search