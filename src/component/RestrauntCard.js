import {useContext} from 'react'
import userContext from '../utils/useContext'
 

const RestrauntCard = (props) => {
let imageUrl = 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/'
const { user, setUser } = useContext(userContext) 

return( <>
<div className="card">
         <img src = {imageUrl + props.data.cloudinaryImageId} alt="food" />
         <div>{props.data.name}</div>
        {/* <div>{props.cuisine}</div> */}
        <div>{props.rating}stars</div>
         <span>{user.name}</span>
     </div>
     </> )
}

export default RestrauntCard