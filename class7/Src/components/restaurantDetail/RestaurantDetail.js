import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Restaurant_Details_URl, imgURL } from '../../constants'
import './restaurantDetails.css'

const RestaurantDetail = () => {
    const [restaurantDetails, setRestaurentDetails] = useState(null)
    let { id } = useParams()
    console.log(restaurantDetails)

    useEffect((() => {
        fetchData()
    }), [])

    async function fetchData() {
        let data = await fetch(Restaurant_Details_URl + id)
        // console.log(data)
        let json = await data.json()
        setRestaurentDetails(json.data)
    }
    // let val = Object.values(restaurantDetails.menu.items)
    //  console.log(val)
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