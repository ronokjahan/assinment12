import Cartmenu from "./Cartmenu";
import Cover from "./Cover";



const CradMenu = ({desert}) => {
    

    return (
        <div>
            <Cover></Cover>
              <div className="grid grid-cols-2 gap-4">
           {
               desert.map(items=>
                
                <Cartmenu 
                
                key={items._id}
                items={items}
                ></Cartmenu>)
            }
           </div>
        </div>
    );
};

export default CradMenu;