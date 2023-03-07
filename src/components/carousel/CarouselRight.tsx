import React from 'react';
import styles from './CarouselRight.module.css'
import {Image,Carousel} from 'antd';
import carouselImage1 from '../../assets/images/carousel_1.jpg'
import carouselImage2 from '../../assets/images/carousel_2.jpg'
import carouselImage3 from '../../assets/images/carousel_3.jpg'
export const CarouseRight:React.FC=()=>{
    return (<>
        <Carousel autoplay className={styles['slider']}>
            <Image src={carouselImage1} height='255px' width='923px'/>
            <Image src={carouselImage2} height='255px' width='923px'/>
            <Image src={carouselImage3} height='255px' width='923px'/>
        </Carousel>
    </>);
}