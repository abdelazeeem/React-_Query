import { useQueries } from "react-query";
import axios from "axios";
const fetchSuperHeroes = (heroId) =>{
    return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}

export const DynamicParallelpage = ({heroId}) => {
    const queryResuilts = useQueries(
        heroId.map(id =>{
            return{
                querykey:['super-hero' , id],
                queryfn :()=>fetchSuperHeroes(id),
            }
        }) 
    )
    console.log({queryResuilts})
    return <div>  DynamicParallel page  </div>
  }

  


