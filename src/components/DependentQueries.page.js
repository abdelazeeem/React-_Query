import { useQuery } from "react-query"
import axios from "axios"

const fetchUserEmails =(email) =>{
    return axios.get(`http://localhost:4000/users/${email}`)
}
const fetchCoursesChannel  = (channelId) =>{
    return axios.get(`http://localhost:4000/channels/${channelId}`)
}

export const DependentQueriespage = ({email}) => {
    const{data :user } =useQuery(['user' , email] , ()=> fetchUserEmails(email)  )
    const channelId = user?.data.channelId
    useQuery(['courses' , channelId] ,() => fetchCoursesChannel(channelId) ,
    { 
        enabled : !!channelId} )
  return ( <div> DependentQueriespage </div>
  )
}

