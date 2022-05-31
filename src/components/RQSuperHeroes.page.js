
import { useSuperHeroesDate } from "../Hooks/useSuperHeroesDate"
import { Link } from "react-router-dom"
///

export const RQSuperHeroesPage = () => {
//
    const onSuccess = () =>{
    console.log(" OnSuccess  " ,data )
  }
//
const onError =() =>{
  console.log(" Error" ,error)
}
//
////////////////////////////////////////////////////////// Import ////

 const { isLoading , data ,isError ,error ,isFetching , refetch} = useSuperHeroesDate( onSuccess ,onError)

////////////////////////////////////////////////
 console.log( { isLoading , isFetching} )
  if(isLoading || isFetching ){
    return <h2> Loading .... </h2>
  }
  if(isError){
    return <h2> {error.message} </h2>
  }
  return (
    <>
    <h2>React Query Super Heroes Page</h2>
    <button onClick={refetch} >  fetch Heroes  </button>
                 {
                     data.data.map((hero)=> { 
                      return <div key={hero.id}>
                        <Link to ={`/rq-super-heroes/${hero.id}`} > {hero.name} </Link>
                 </div>
                  } )  }
    
    </>
  )
    
}

