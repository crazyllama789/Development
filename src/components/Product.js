function Product(props){
    const {cart, item, products, add, remove} = props;
    return(
        <div className="image_outline">
            <img className="image_height" src={products.image} alt={products.name} />
            <div style={{fontStyle:"-apple-system", color:"#282c34"}}>{products.name}</div>
            <div>
            <div style={{fontStyle:"italic"}}>Location: {products.location}</div>
            <div style={{fontStyle:"italic"}}>Type: {products.food}</div>
            <div>${products.price}</div>
            <div>
            <button onClick={()=> add(products)}> Add to Cart </button> 
            {item ? <div className="layout">  <button onClick={()=> remove(item)}> Remove From Cart </button>  </div> : 
               <div></div>
            }
            <div>                
             </div>
        </div>
        </div>
    </div>
    )
}

export default Product