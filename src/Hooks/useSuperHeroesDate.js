import { useQuery } from 'react-query'
import axios from 'axios'

const fetchSuperHeroes = () =>{
      return axios.get('http://localhost:4000/superheroes')
  }

 export  const useSuperHeroesDate = (onSuccess , onError ) => {
         return useQuery('rq-super-heroes' ,  
 fetchSuperHeroes ,  { 
                         onSuccess ,
                         onError ,
                                 // select : (data) => {
                                 //       const SuperHeroesName = data.data.map( (hero) => hero.name )
                                 //     return SuperHeroesName }
   } )
  
}
