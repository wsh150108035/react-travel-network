import { Carousel, Image } from 'antd'
import React from 'react'
import styles from './MyCarousel.module.css'

import carouselImage1 from '../../assets/carousel_1.jpg'
import carouselImage2 from '../../assets/carousel_2.jpg'
import carouselImage3 from '../../assets/carousel_3.jpg'

const MyCarousel: React.FC = () => {
  return (
    <Carousel autoplay className={styles.slider}>
      <Image src={carouselImage1}></Image>
      <Image src={carouselImage2}></Image>
      <Image src={carouselImage3}></Image>
    </Carousel>
  )
}
export default MyCarousel