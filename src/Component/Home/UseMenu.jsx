import { useEffect, useState } from "react";


const UseMenu = () => {
    const[menubar,setmenu]=useState([])
    const [loading,setloading]=useState(true)
    useEffect(()=>{
        fetch('http://localhost:3000/menu')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setmenu(data)
            setloading(false)
        
        }
        
        )
   
    },[])
    return[menubar,loading]
};

export default UseMenu;