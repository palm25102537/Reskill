import './ProductPost.css'

function ProductPost(props){
    const {showSelectProduct:{showProduct,title},setShow} = props
    console.log(title)
    function handleCloseSingleProduct(){
        setShow({ status:false,showProduct:'', title:''})
    }
return(
  <div className ='product-post'>
        <div className ='product-post-bg' onClick={handleCloseSingleProduct} >
            <div className ='product-post-content'>
            <img className='product-post-content-image' src={showProduct} alt='productSingle'/>
            <h4 style={{color:'white'}}>{title}</h4>
            </div>
        </div>
    </div>
)
}

export default ProductPost