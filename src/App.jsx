

import { useEffect, useState } from 'react'
import './App.css'
import SingleProduct from './Components/SingleProduct/SingleProduct';





function App() {
const [products, setProducts] = useState([]);


useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => setProducts(data))
}, [])


console.log(products);

// console.log(products);




  // const [name, setName] = useState("Anik");
  // console.log(name);
  // console.log(name);
  // const [stateCount, setStateCount] = useState(0)
  // let count = 0;
  // const handleVariableCount = () =>{
  //   count += 1;
  //   console.log(count);
  // }
  // const handleStateCount = () =>{
  //   setStateCount(stateCount + 1)
  //   setName("adfd")
  // }




  return (
    <>

      <h1>Vite + React</h1>
    <h4>Length: {products.length}</h4>
    {
      products.map(item => <SingleProduct item={item}></SingleProduct>)
    }
    



      {/* 
      <h3>StateCount: {stateCount}</h3>
      <h3>VariableCount: {count}</h3>      
      <button onClick={handleStateCount}>StateCount</button>

      <button onClick={handleVariableCount}>VariableCount</button> */}


    </>
  )
}

export default App
