import React from "react";
import './App.css';
import axios from "axios";

export default function App(){

  const [data, setData] = React.useState([]);

  // axios gives data in json form unlikely fetch but comes in data
  React.useEffect(()=>{
    axios
      .get('/api/jokes')
      .then((response)=>setData(response.data))
      .catch((error)=>console.log(error))
  },[])

  const jokesArray = data.map((element, index)=>{
    return(
      <div style={{textAlign:'center', border:'2px solid white', margin:'15px', background:'lightcoral'}}>
        <p>{index}</p>
        <p>{element.title}</p>
        <p>{element.content}</p>
      </div>
    )
  })

  return(
    <div>
      <h1>hello</h1>
      <p style={{textAlign:'center'}}>Jokes: {data.length}</p>
      {jokesArray}
    </div>
  )
}