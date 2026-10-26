
import Card from "./Card"
import './Cardlist.css'
import stafflist from './stafflist';


function Cardlist(props)
{
   const filteredstaff = stafflist.filter(function cardcomponent(staff){

   return(staff.name.toLowerCase().includes(props.staffsearch.toLowerCase()))

   })



return(
    <div className='row'>

        
      {filteredstaff.map(function cardcomponent(staff)
          {
  return <Card
  key={staff.key}
   image = {staff.image}
   name = {staff.name}
   position={staff.position}
   />

})}
  
   
 </div>


)
   

}
export default Cardlist