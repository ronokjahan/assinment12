


import Cartmenu from "./Cartmenu";
import UseMenu from "./UseMenu";


const OurMenu = () => {
    const [menubar]=UseMenu()
    const populer=menubar.filter(items=>items.category ==='popular')
    // const[menubar,setmenu]=useState([])
    // useEffect(()=>{
    //     fetch('http://localhost:3000/menu')
    //     .then(res=>res.json())
    //     .then(data=>{
            
    //     const pouletitem=data.filter(itmes=>itmes.category==='popular')
    //         setmenu(pouletitem)})
    
    // },[])
    return (
        <div className="mb-4">
            {/* <SectionTitle 
            subheading={'---Check it out---'}
            hading={'Ourmenu'}
            
            ></SectionTitle> */}
          

            
           <div className="grid grid-cols-2 gap-4">
           {
                populer.map(items=>
                
                <Cartmenu 
                
                key={items._id}
                items={items}
                ></Cartmenu>)
            }
           </div>
        
        </div>
    );
};

export default OurMenu;