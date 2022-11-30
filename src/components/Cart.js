function Cart(props){
    const {cart, add, remove, cost} = props

    return(
        <div className = "item_background layout item_background">
            <h2 style={{color:"brown"}}>Cart</h2>
            <div>                
            {cost === 0 ? (<div className="layout" style={{textAlign:"right", flex:"right", position:"fixed"}}> </div>)
            :(<div className="layout" style={{textAlign:"right"}}>
            {cart.map((item)=>(<div key={item.id} className="row" style={{textAlign:'left'}}>
               {item.number === 0 ? <div className="layout" style={{textAlign:"left", flex:"left", position:"fixed"}}> </div> :
                <div>
                <div className="layout" style={{fontFamily: 'Oxygen', color:"brown"}}>{item.name}</div>
                <div className="layout"> 
                <button onClick={()=> add(item)} className="add_remove">+</button>
                <button onClick={()=> remove(item)} className="add_remove">-</button></div>

                <div className="layout" style={{textAlign:"right"}}> {item.number} x ${item.price.toFixed(2)} </div>

                <div className="layout" style={{textAlign:"right"}}> ${item.number * item.price.toFixed(2)} </div>
                </div>
            }
        </div>))}
            
             </div>)}
             <div className="row" style={{textAlign:"right", marginTop:'1em', marginBottom:'1em', color:'brown', fontFamily:'Oxygen'}}> Total: ${cost}</div>

             </div>
        
        </div>
    )
   
}

export default Cart