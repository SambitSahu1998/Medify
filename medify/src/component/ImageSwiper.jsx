import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import 'swiper/css/pagination';
import 'swiper/css';
import styles from "../module/ImageSwiper.module.css";
import image1 from "../image/ads1.png";
import image2 from "../image/ads2.png";


const ImageSwiper = () => {
    const images = [image1, image2, image1, image2, image1, image2];
  
    return (
        <div className={styles.swiperContainer}>
            <Swiper
                modules={[Pagination]}
                spaceBetween={20}
                slidesPerView={3}
                pagination={{ clickable: true }}
                loop={true}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} className={styles.swiperSlide}>
                        <img
                            src={image}
                            alt={`Slide ${index}`}
                            className={styles.swiperImage}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ImageSwiper;
