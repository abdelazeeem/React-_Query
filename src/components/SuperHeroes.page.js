import { useState, useEffect } from 'react'
import axios from 'axios'

export const SuperHeroesPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])
  const [Error  , setError ] =useState('')


  useEffect(() => {
    axios.get('http://localhost:4000/superheroes').then(res => {
      setData(res.data)
      setIsLoading(false)
    }).catch((Error =>{setError(Error.message)
    setIsLoading(false)
    
    }) )
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if(Error){
    return <h2> {Error} </h2>
  }

  return (
    <>
      <h2>Super Heroes Page</h2>
      {data?.data.map( (hero)=>{
        return <div key={hero.name}> {hero.name}</div>
      } )}
     
    </>
  )
}