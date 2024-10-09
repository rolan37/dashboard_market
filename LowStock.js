import React from 'react'
import { useEffect,useState } from 'react'

const LowStock = () => {
  const [items, setItems] = useState([])
    const [loading,setLoading] = useState([true])
    const [error, setError] = useState([null])
    const fetchItems = async()=>{
      try{
        const response = await fetch('http://localhost:8181/getItems');
        if(!response.ok){
          throw new Error('Failed to Fetch the Data')
        }
        const data = await response.json()
        setItems(data)
        setLoading(false)
        }
      catch(err){
        setError(err.message);
        setLoading(false)
        }
    }
    useEffect(()=>{
      fetchItems();
    },[])

  return (
    <div className='lowstockContainer'>
      <div className='lowstock'>
        <center>Low Stock</center>
        <ul>
          {items.map((item, index)=>(
           <li key={index}>{item.name} - {item.itemType}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default LowStock
