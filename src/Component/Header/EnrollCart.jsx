import { useContext, useEffect, useState } from "react";
import { Authcontex } from "../Fairbase/AuthProvider";
import EnrolledDetails from "./EnrolledDetails";


const EnrollCart = () => {
    const[users,setusers]=useState([])
   
    const{user}=useContext(Authcontex)
    useEffect(()=>{
        
        const url=`http://localhost:3000/enroll?email=${user?.email}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setusers(data))
    },{})
    return (
      
     <div>
{
    users.map(users=><EnrolledDetails
    key={users._id}
    users={users}
    
    ></EnrolledDetails>)
}
     </div>
       
    );
};

export default EnrollCart;