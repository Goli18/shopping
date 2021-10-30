import React from 'react';
import "./Products.css";
import Sizeselector from '../../sizeselector/sizeselector';
const Products= ({productItems, handleAddProduct}) => {

    
    return (

      
        <div className = "products">
            <div className='size'> 
            <Sizeselector/>
            </div>
            {productItems.map((productItem)=> (
              

               

                
                
                
                <div className = 'card'>
                    <div>
                        <h2 className="free"> Free shipping </h2> 
                        <img
                         className='product-image'
                         src={productItem.image}
                          alt={productItem.name}
                          />
                    </div>
                  

                   
                        <div className="product-name">{productItem.name}</div>
                        <div className="product-price">${productItem.price}</div>
                        <div>
                            <button className= 'product-add-button' onClick={()=>handleAddProduct(productItem)}>
                                 Add to Cart
                                 </button>
                        </div>
                        </div>

            ))}
         
        </div>
    );
};

export default Products;
