import './App.css';
import Header from './component/Header'
import Product from './component/Product'
import ProductPost from './component/ProductPost'
import product from './data/product'
import {useState} from 'react'

function App() {

  const [showSelectProduct,setShowSelectProduct] = useState({
    status:false,
    showProduct:'',
    title:'',
  })

 
  return (
    <div className="App">
        <Header/>
    <div className='app-grid' >
      {
        
          product.map((item)=>{
            return (
               <div>
                 <Product item={item} setShow={setShowSelectProduct} />
              </div>
            
          )}
        )
      }
    
    </div>
    {
       showSelectProduct.status&&(<ProductPost showSelectProduct={showSelectProduct}/>)
    }
    </div>
  );
}

export default App;
