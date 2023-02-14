import { useState,useEffect } from "react"
import {Restaurant_Details_URl} from '../utilities/constants'

const useRestaurant =(id)=>{
  
    const [restaurantDetails, setRestaurentDetails] = useState (null)  
    
    useEffect((() => {
        fetchData()
    }), [])

    async function fetchData() {
        let data = await fetch(Restaurant_Details_URl + id)
        let json = await data.json()
        
        setRestaurentDetails(json.data)
    }
    return restaurantDetails

}
export default useRestaurant

