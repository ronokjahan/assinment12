import { useEffect } from "react";
import SectionTitle from "../Home/SectionTitle";

import { useState } from "react";
import Sumercard from "./Sumercard";


const SummerCamp = () => {
    const[card,setcard]=useState([])

useEffect(()=>{
    fetch('http://localhost:3000/children')
    .then(res=>res.json())
    .then(data=>setcard(data))
},[])
    return (
        <section>
           <SectionTitle   subheading={'welcome to our'}
           hading= {'HELLO SUMMER CAMP'}
           ></SectionTitle> 
           <h1>{card.length}</h1>
         <div className=" md:flex grid-cols-3 gap-5 items-center justify-center">
         {
            card.map(card=><Sumercard 
            key={card._id}
            card={card}
            ></Sumercard>)
           }
         </div>
        </section>

    );
};

export default SummerCamp;