import "./cards.css"
import {imgURL} from '../../utilities/constants'

const Cards = ({item})=>{
    // console.log(item)
    return(
        <div className ="cards">
            <div className="individual-card">
            <img src={imgURL+item.data.cloudinaryImageId} alt="restaurantImages" />
            <h3>{item.data.name}</h3>
            <h3>{item.data.area}</h3>
            <h5>Distance :{item.data.slaString}</h5>
            <h5>Average Cost :{item.data.costForTwoString}</h5>
            </div>
        </div>
    )
}

export default Cards


{/* <ul>
{Object.values(restaurantDetails?.menu?.items).map((item) => (
  <li key={item.id}>{item.name}</li>
))}
</ul> */}
    