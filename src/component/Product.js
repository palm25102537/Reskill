import './Product.css'

function Product(props){

    const {item:{title,thumbnail},setShow} = props
    
    function handleShowSingleProduct(event){
        const {id,title} = event.target
        
        setShow({status:true,showProduct:id,title})
      }
    return(
        <div className ='product-item' >
            <img title={title} onClick={(e)=>handleShowSingleProduct(e)} id={thumbnail} className='product-item-show' src={thumbnail} alt='product'/>
            <h4>{title}</h4>
        </div>
    )
}

export default Product