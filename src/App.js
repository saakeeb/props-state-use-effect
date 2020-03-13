import React,{useState, useEffect} from 'react';
import logo from './cart.svg';
import './App.css';



function App() {
  const friends=['Zonayed','Shohag', 'Robi', 'siddiq', 'Sunny','Shanta','Rahed','Shahriar']
  const products = [
    {name:'Mango Juice', price:'25TK'},
    {name:'Mango Chutneys', price:'15TK'},
    {name:'Tomato Catchup', price:'135TK'},
    {name:'Fried Peas', price:'5TK'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <h2>Cart Loop</h2>
        <Counter> </Counter>
        <Users></Users>
        <img src={logo} className="App-logo" alt="logo" />
        <br/>
        
        <div style={{backgroundColor:'cyan', color:'black', borderRadius:'15px', padding:'10px'}}>
        <h2>Friends Name:</h2>
        <ul>
        {
        friends.map(friend=><li>{friend}</li>)
        }
        </ul>
        </div>

        
        <ul>
        {
          products.map(product=><Product product={product}></Product>)
        }
        </ul>
        

        <p>
          Edit the <code>src/App.js</code> and save to reload file.
        </p>
      
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React App
        </a>
       
        <Product product={products[0]}> </Product>
        <Product product={products[1]}> </Product>
        <Product product={products[2]}> </Product>
        <Product product={products[3]}> </Product>
      </header>
    </div>
  );
}


function Users() {
  const [users,setUsers]=useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
    .then(res=>res.json())
    .then(data=>setUsers(data));
  }, [])
  return(
    <div>
      <h3> Dynamic User:{users.length} </h3>
      <ul>
        {
        users.map(user=><li>{user.email}, Id Num: {user.id}</li>)
        }
      </ul>
    </div>
  )
}


function Counter() {
  const [count, setCount,]=useState(10);
  
  
  const handleIncrease=()=>{
  const newCount=count+1;
  setCount(newCount);
  }
  const handleDecrease=()=>{
  const newCount=count-1;
  setCount(newCount);
  }
  return(
      <div style={{float:'left',}}>
        <h6>Count: {count}</h6>
        <button onClick = {handleIncrease}> + </button>
        
        <button onClick={handleDecrease}>-</button>
      </div>
    )
  
}






function Product(props){
  const productStyle = {
    border: '1px solid grey',
    backgroundColor:'cyan',
    height:'200px',
    width:'300px',
    float:'left',
    margin:'10px',
    borderRadius:'15px'
  }
  const {name, price}=props.product;
  
  return(
    <div style={productStyle}>
      <h3>Name: {name}</h3>
      <h5 style={{color:'black'}}>price: {price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

export default App;
