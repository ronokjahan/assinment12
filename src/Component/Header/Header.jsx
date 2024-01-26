
// import animation from '../../assets/bistro-2/Zio_Alberto_–_Just_another_WordPress_site/header.jpg'
import slider1 from '../../assets/assets/home/jpg (4).jpg'

import slider3 from '../../assets/assets/home/jpg (5).jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules';


const Header = () => {
   
    return (
      <section>
     {/* <SectionTitle
     hading={'---Check it out---'}
     subheading={'FROM OUR MENU'}
     >

     </SectionTitle> */}
        
          <Swiper 
        slidesPerView={2}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-3"
      >
        <SwiperSlide><img src={slider1} alt="" /></SwiperSlide>
        {/* <SwiperSlide><img src={slider2} alt="" /></SwiperSlide> */}
        <SwiperSlide><img src={slider3} alt="" /></SwiperSlide>
      
        
      
      </Swiper>
      </section>
    );
};

export default Header;