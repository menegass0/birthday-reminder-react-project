import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(true);
  const [list, setList] = useState([]);

  const handleSubmit = (e) =>{
    e.preventDefault();
    try{
      let colors = new Values(color).all(10)
      console.log(colors)
      setError(false);
    }catch(error){
      setError(true);
      console.log(error)
    }
  }
  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder='#f15025' className={`${error ? 'error' : null}`}/>
          <button className="btn" type='submit'>Submit</button>
        </form>
      </section>
      <section className="colors">
        <h4>{
          
        }</h4>
      </section>
    </>
  )
}

export default App
