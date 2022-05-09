import Container from '@mui/material/Container';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper';

const HomePage = () => {
  return (
    <>
      <Container fixed className="slider">
        <Swiper
          rewind={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              alt="Element"
              src="https://images.blue-tomato.com/is/image/bluetomato/thrasher-feb-22-large-1920x300?$btbigf3$"
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="Trasher"
              src="https://images.blue-tomato.com/is/image/bluetomato/element-apr-22-allgemein-large-1920x300?$btbigf3$"
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="Blue Tomato"
              src="https://images.blue-tomato.com/is/image/bluetomato/stay-weird-ki-inspirationworld-jul-21-large-1920x300?$btbigf3$"
            ></img>
          </SwiperSlide>
        </Swiper>
      </Container>
      <ItemListContainer message="Destacados" />
    </>
  );
};

export default HomePage;
