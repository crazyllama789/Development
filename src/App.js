import Home from './components/home'
import Cart from './components/Cart.js'
import Filter from './components/Filter'
import { useState } from 'react';
import './App.css';



function App() {
  const animals = [
    {
        id:'1',
        name: 'Polar Bear',
        price: 200, 
        location: 'Artic',
        food: 'carnivore',
        image: 'https://files.worldwildlife.org/wwfcmsprod/images/Polar_Bear/priority_species/5xuyicvdin_Polar_Bear_Threats_Image3_202798.jpg'
        
    },
    {
        id:'2',
        name: 'Baby Lion',
        price: 500, 
        location: 'Africa',
        food: 'carnivore',
        image: 'https://www.wwf.org.uk/sites/default/files/styles/max_650x650/public/2018-03/Medium_WW244590.jpg?itok=Yc5pDLX0'
    },
    {
        id:'3',
        name:'Panda',
        price: 100, 
        location: 'Asia',
        food: 'omnivore',
        image: 'https://bestlifeonline.com/wp-content/uploads/sites/3/2018/08/panda-bear-with-stick.jpg?quality=82&strip=1&resize=640%2C360'
    },
    {
        id:'4',
        name:'Giraffe',
        price: 600, 
        location: 'Africa',
        food: 'herbivore',
        image: 'https://www.centralfloridazoo.org/wp-content/uploads/2017/04/ANIMALS-shutterstock_382892662_1400x840_acf_cropped.jpg'
    },
    {
        id:'5',
        name:'Lemur',
        price: 250, 
        location: 'Africa',
        food: 'omnivore',
        image: 'https://www.porfell.co.uk/assets/Cuddle-Lemurs.jpg'
    },
    {
        id:'6',
        name:'Snow Leopard',
        price: 800, 
        location: 'Asia',
        food: 'carnivore',
        image: 'https://preview.redd.it/q7cq6hytdcj51.jpg?auto=webp&s=cc5f001f59501071e88a84b505ece58d82b2e711'
    },
    {
        id:'7',
        name:'Penguin',
        price: 550, 
        location: 'Antartica',
        food: 'carnivore',
        image: 'https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg'
    },
    {
        id:'8',
        name:'Goat',
        price: 50, 
        location: 'Asia',
        food: 'herbivore',
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Hausziege_04.jpg'
    },
    {
        id:'9',
        name:'Camel',
        price: 150, 
        location: 'Africa',
        food: 'herbivore',
        image: 'https://cff2.earth.com/uploads/2022/06/06184648/Animal-960x640.png'
    },
    {
        id:'10',
        name:'Peacock',
        price: 1000, 
        location: 'Asia',
        food: 'omnivore',
        image: 'https://media.wired.com/photos/59822d6fbc944559d607e43a/master/pass/PeacockHP-691483428.jpg'
    },
    {
        id:'11',
        name:'Racoon',
        price: 15, 
        location: 'North America',
        food: 'omnivore',
        image: 'https://d.newsweek.com/en/full/1983028/stock-image-raccoon.jpg'
    },
    {
        id:'12',
        name:'Fox',
        price: 65, 
        location: 'North America',
        food: 'carnivore',
        image: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'
    },
]

  const [cart, setCart] = useState([]);
  const [products, setProduct] = useState(animals);
  const [cost, setCost] = useState(0);

  function add_or_subtract_map(product, curr, number){
    const newCart = cart.map((item) =>
    item.id === product.id ? {...curr, number: curr.number + number} : item);
    return newCart
  }

  const addtoCart = (product) =>{
    const curr = cart.find((x)=> x.id === product.id);
    const newCart = add_or_subtract_map(product, curr, 1)
    setCart(newCart);
  }


  // used to add items to a cart 
  const add = (product) => {
    if (cart.find((x)=> x.id === product.id)){
      addtoCart(product)
    }
    else{
      const newCart = [...cart, {...product, number:1}];
      setCart(newCart);
    }

    setCost(cost + product.price)
  }
  
  // used to remove items from a cart 
  const remove = (product) => {
    const inCart = cart.find((x)=> x.id === product.id);
    if (inCart.number === 1){
      const newItem = cart.filter((x) => x.id !== product.id);
      setCart(newItem);
    }
    else{
      const newCart = add_or_subtract_map(product, inCart, -1)
      setCart(newCart);
    }
    setCost(cost  - product.price)
  }
    
  //filter the location 
  const filterLocations = (loc) =>{
      const filteredArray = products.filter(item => {return item.location === loc})
      setProduct(filteredArray)
  }

  //filter the type of food the animals consumes 
  const filterFood = (food) =>{
      const filteredArray = products.filter(item => {return item.food === food})
      console.log(products)
      setProduct(filteredArray)
}

// sorts prices lowest to highest
const lowtohigh = () => {
    const temp = []
    const sortedArray = products.sort((a,b)=> {return a.price - b.price;})
    for (let i=0; i < sortedArray.length; i++){
      temp.push(sortedArray[i])
      }
    
    setProduct(temp)
    return temp
}

// sorts prices highest to lowest
const hightolow = () => {
  const temp = []
  const sortedArray = products.sort((a,b)=> {return b.price - a.price;})
  for (let i=0; i < sortedArray.length; i++){
    temp.push(sortedArray[i])
  }
  setProduct(temp)
}

const by_id = () => {
  const temp = []
  const sortedArray = products.sort((a,b)=> {return parseInt(a.id) - parseInt(b.id);})
  for (let i=0; i < sortedArray.length; i++){
    temp.push(sortedArray[i])
  }
  setProduct(temp)

}

const original = () => {
  setProduct(animals)
}


    
  return (
    <div>
      <h1  style={{textAlign:"center", color:"brown", justifyContent:"center"}}>We Bought a Zoo</h1>
      <div style={{float:"right"}}>
      <Cart cart={cart} add={add} remove={remove} cost={cost} products={products}/> 
      </div>
      <div style={{float:"left",  marginLeft:"1em"}}>
        <Filter filterLocations={filterLocations} lowtohigh={lowtohigh} hightolow={hightolow} filterFood={filterFood} 
original={original} by_id={by_id} />
      </div>
      <div className='row' style={{float:"center"}}>
        <Home cart={cart} add={add} remove={remove} products={products} setProduct={setProduct} /> 
      </div>
    </div>
  );
}

export default App;
  
