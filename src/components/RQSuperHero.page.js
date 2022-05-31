
import { useParams } from 'react-router-dom'
import {SuperHeroesData } from '../Hooks/SuperHeroesData'

export const RQSuperHeroPage = () => {

  const {heroId} = useParams();
  const { isLoading , data ,isError ,error} = SuperHeroesData(heroId )
  if(isLoading){
    return <h2> Loading ...</h2>
  }
  if(isError){
    return <h2> {error.message} </h2>
  }

  return (
    <div> { data?.data.name } - {data?.data.alterEgo}</div>
  )
}
