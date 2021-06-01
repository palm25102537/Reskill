import './ProductPost.css'

function ProductPost(props){
    const {showSelectProduct:{showProduct,title}} = props
    console.log(title)
return(
  <div className ='product-post'>
        <div className ='product-post-bg'>
            <div className ='product-post-content'>
            <img className='product-post-content-image' src={showProduct} alt='productSingle'/>
            <h4>{title}</h4>
            </div>
        </div>
    </div>
)
}

export default ProductPost