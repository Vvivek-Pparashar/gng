import { Swiper, SwiperSlide } from 'swiper/react';
import Hm1 from '../../assets/home-banner1.jpg'
import Hm3 from '../../assets/home-banner3.jpg'
import Hm4 from '../../assets/home-banner4.jpg'
import Hm5 from '../../assets/home-banner5.jpg'
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

import { EffectFade, Navigation, Autoplay } from 'swiper/modules';

import './Crausal.css'
const Crausal = () => {
  return (
    <Swiper
          direction={'vertical'}
          spaceBetween={30}
          effect={'fade'}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[EffectFade, Navigation, Autoplay]}
          className="mySwiper"
        >

          {/* <div className='text'><h1>LANDMARKS PLANNED WITH PASSION </h1></div> */}
          <SwiperSlide>
            <img className='hero-page-img' src={Hm1} />
          </SwiperSlide>
          <SwiperSlide>
            <img className='hero-page-img' src={Hm3} />
          </SwiperSlide>
          <SwiperSlide>
            <img className='hero-page-img' src={Hm4} />
          </SwiperSlide>
          <SwiperSlide>
            <img className='hero-page-img' src={Hm5} />
          </SwiperSlide>
        </Swiper>
      
  )
}

export default Crausal