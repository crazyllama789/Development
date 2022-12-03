import Product from './Product'

function home(props){
    const {cart, products, add, remove, setProduct} = props;
    return <div className='layout'>
        <h2 style={{color:"#282c34", margin:"2%", marginBottom:"0.5%"}}>Animals:</h2>
        <div className="row">
            {products.map((products)=>(
                <Product key={products.id} item={cart.find((x) => x.id === products.id)}
                products={products} add={add} remove={remove} setProduct={setProduct} cart={cart}>
                </Product>    
            ) )} 
            
        </div>
        </div>
}

export default home