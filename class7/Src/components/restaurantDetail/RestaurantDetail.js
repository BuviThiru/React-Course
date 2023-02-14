import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { imgURL } from "../../utilities/constants"
import useRestaurant from "../../utilities/useRestaurant"
import './restaurantDetails.css'

const RestaurantDetail = () => {
    let { id } = useParams()
    
    let restaurantDetails = useRestaurant(id)
   

  if(!restaurantDetails) return null
    return (
        <div className="restaurantDetails">
            <div className="left">
                <img src={imgURL + restaurantDetails?.cloudinaryImageId} alt="ResataurantImage" />
                <div>{restaurantDetails?.name}</div>
                <div>{restaurantDetails?.areaSlug}</div>

            </div>
            <div className="rightRest">
                <h2>Menu</h2>
                <ul>
                    {Object.values(restaurantDetails?.menu?.items).map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default RestaurantDetail