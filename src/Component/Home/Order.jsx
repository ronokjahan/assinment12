
import imges from '../../assets/assets/shop/banner2.jpg'
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import UseMenu from './UseMenu';
import FoodCard from './FoodCard';
const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const[menu]=UseMenu()
  const desert=menu.filter(items=>items.category==='dessert')
    const populer=menu.filter(items=>items.category==='popular')
    const pizza=menu.filter(items=>items.category==='pizza')
    const soup=menu.filter(items=>items.category==='soup')
    return (
        <div>
            <img src={imges} alt="" />
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>Salad</Tab>
        <Tab>Pzza</Tab>
        <Tab>Shoups</Tab>
        <Tab>Dessert</Tab>
      </TabList>
      <TabPanel
      
      >

<div className='grid grid-cols-3'>
     {
desert.map(items=><FoodCard 
    key={items._id}
  items={items}
  
  ></FoodCard>)
}
     </div>
      </TabPanel>
      <TabPanel>

      <div className='grid grid-cols-3'>
     {
populer.map(items=><FoodCard 
    key={items._id}
  items={items}
  
  ></FoodCard>)
}
     </div>
      </TabPanel>
      <TabPanel>

      <div className='grid grid-cols-3'>
     {
pizza.map(items=><FoodCard 
    key={items._id}
  items={items}
  
  ></FoodCard>)
}
     </div>
      </TabPanel>
    </Tabs>
    
   
        </div>
    );
};

export default Order;