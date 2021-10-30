import React, {useState}from 'react';
import Header from './components/front/Header/Header';
import data from './components/back/Data/Data';
import {BrowserRouter as Router} from "react-router-dom";
import Routes from './components/front/Routes/Routes';
import "./app.css";
import Size from './components/front/Size/Size';




const App = () => {
  const  {productItems} = data;
  const [cartItems, setCartItems]= useState([]);


 
    const handleAddProduct=(product) => {
    const ProductExist = cartItems.find((item)=> item.id ===product.id);
    if(ProductExist){
      setCartItems(cartItems.map((item) => item.id=== product.id?
      {...ProductExist,quantity: ProductExist.quantity +1}: item)
      );
      
      
    }
    else{
      setCartItems([...cartItems, {...product, quantity:1}]);
    }

  };


  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item)=> item.id ===product.id);
    if(ProductExist.quantity=== 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));

    }
    else{
      setCartItems(
        cartItems.map((item) => 
        item.id === product.id
        ? {...ProductExist, quantity: ProductExist.quantity - 1}
        
        :item)
    )
    }

  }

  const handleCartClearance =() => {
    setCartItems([]);
  }
  

  return (
  
  

   
   
    
      <Router>
                



      <Header cartItems= {cartItems}/>
    
        
        <h2 className="OrderBy">{productItems.length} Product(s) found</h2>


        
       
                
              
    
      
    
                        
      <Routes
  
    
       productItems={productItems}
       cartItems={cartItems}
         handleAddProduct={handleAddProduct}
         handleRemoveProduct={handleRemoveProduct}
         handleCartClearance={handleCartClearance} >

         </Routes>

      

   

      </Router>
  )

   
}

export default App;
