import { useQuery } from "react-query"
import axios from "axios"
const fetchSuperHeroes =() =>{
    return axios.get(`http://localhost:4000/superheroes`)
}
const fetchFriends =() =>{
    return axios.get(`http://localhost:4000/superheroes/friends`)
}

export const ParalleQueriespage = () => {
     useQuery('super-heroes' , fetchSuperHeroes )
        useQuery('friends' ,fetchFriends )
  return (
    <div>ParalleQueries.page</div>
  )
}
