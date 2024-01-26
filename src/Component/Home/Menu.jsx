import Cartmenu from "./Cartmenu";
import Cover from "./Cover";
import CradMenu from "./CradMenu";
import SectionTitle from "./SectionTitle";
import UseMenu from "./UseMenu";



const Menu = () => {
    const[menu]=UseMenu()
    const desert=menu.filter(items=>items.category==='dessert')
    const populer=menu.filter(items=>items.category==='populer')
    return (
       <div>
        <Cover></Cover>
        <SectionTitle 
subheading={'Misout'}
hading={'Todays Offer'}
        ></SectionTitle>
        {/* desert---------- */}
        <CradMenu 
        desert={desert}
        
        ></CradMenu>
        {/* Populer----- */}
        
       </div>
    );
};

export default Menu;