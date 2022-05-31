import { useQuery ,useQueryClient } from "react-query"
import axios from "axios"

const fetchSuperHeroes =heroId =>{
    return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}
export const SuperHeroesData = (heroId) => {

   const queryClient = useQueryClient()

    return useQuery(['super-hero' , heroId ] ,fetchSuperHeroes,{

        initialData:()=>{
                const hero = queryClient.getQueryData('super-heroes')?.data?.find((hero)=>hero.id=== parseInt(heroId))
                if(hero){
                    return{data : hero}
                }else{return undefined}
        }
    }

  )
}
