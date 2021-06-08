import './App.css';
import Header from './component/Header'
import Product from './component/Product'
import ProductPost from './component/ProductPost'
import product from './data/product'
import {useState} from 'react'
import Search from './component/Search'
function App() {
//Basic State
  const [showSelectProduct,setShowSelectProduct] = useState({
    status:false,
    showProduct:'',
    title:'',
  })

 const [searchText,setSearchText] = useState('')

 function handleChangeSearch(event){
   const {value} = event.target
  setSearchText(value)
}

//State and Object

const [input,setInput] = useState({
  comment:'',
  author:''
})

function handleInputChange(event){
  const {value,id} = event.target
  setInput((previousInput)=>({...previousInput,[id]:value}))
}

// State and Array
const [post,setPost] = useState([])

function handleSubmit(event){
  event.preventDefault()
  const newUser ={...input}
  newUser.time = Date.now().toString()
  setPost((previousValue)=>([newUser,...previousValue]))
  setInput({comment:'',author:''})
}
const userShow = post.map((item,index)=>{
  return (
    <div className='app-post' key={item.time}> 
      <p>{item.comment}</p>
      <h5>{item.author}</h5>
      <h6>{item.time}</h6>
    </div>
  )
})
  return (
    <div className="App">
        <Header/>     
        <section> 
          <div className='app-section'>
            <div className='app-container'>
              {/* Prop section */}
              {/* <Search searchText={searchText} handleChangeSearch={handleChangeSearch}/> */}
              {/* <div className='app-grid' >
                   {
        
                      product.filter((item)=> item.title.includes(searchText)).map((item)=>{
                      return (
                         <div>
                            <Product item={item} setShow={setShowSelectProduct} />
                        </div>
            
                            )}
                         )
                   }
    
    </div>
    {
       showSelectProduct.status&&(<ProductPost showSelectProduct={showSelectProduct} setShow={setShowSelectProduct}/>)
    } */}
    {/* Form input Section */}
          <form onSubmit={(e)=>handleSubmit(e)}>
               <p>
                 <p htmlFor='comment'>Comment</p>
                 <textarea style={{width:'300px',height:'400px'}} type='text' id='comment' value={input.comment} onChange={(e)=>handleInputChange(e)}></textarea>
               </p>
               <p>
                <label htmlFor='author'>Author : </label>
                <input style={{width:'200px'}} type='text' id='author' value={input.author} onChange={(e)=>handleInputChange(e)} placeholder='author'></input>
              </p>
              <button  style={{width:'300px'}}>Submit</button>
         </form>  
         <div className='app-posts'> 
            {userShow}
         </div>
            </div>
          </div>
        </section>
   
    </div>
  );
}

export default App;
