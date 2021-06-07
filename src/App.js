import './App.css';
import Header from './component/Header'
import Product from './component/Product'
import ProductPost from './component/ProductPost'
import product from './data/product'
import {useState} from 'react'
import Search from './component/Search'
function App() {

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



  return (
    <div className="App">
        <Header/>
        
        <section>
          <div className='app-section'>
            <div className='app-container'>
              <Search searchText={searchText} handleChangeSearch={handleChangeSearch}/>
              <div className='app-grid' >
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
    }
            </div>
          </div>
        </section>
   
    </div>
  );
}

export default App;
