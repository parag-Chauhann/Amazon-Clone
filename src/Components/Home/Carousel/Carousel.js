import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import classes from './Carousel.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import 'animate.css/animate.min.css';
// import { GoProject } from 'react-icons/go';
// import { FaArrowCircleDown } from 'react-icons/fa';

class CarouselImages extends Component {
  render() {
    return (
      <div className={classes.carousel_container} id='start'>
        <Carousel
          className={classes.carousel}
          dynamicHeight
          infiniteLoop={true}
          interval={2500}
          useKeyboardArrows={true}
          transitionTime={1700}
          emulateTouch
          showArrows={false}
          autoPlay
          showStatus={false}
          showThumbs={false}
        >
          <div className={classes.image_container}>
            <img className={classes.image} src="https://images.freekaamaal.com/post_images/1662370514.webp" alt='Amazon_Image' />

          </div>
          <div className={classes.image_container}>
            <img className={classes.image} src="https:///images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/N2GL_sep/Ingress-SEP.jpg" alt='Amazon_Image' />
          </div>

          <div className={classes.image_container}>
            <img className={classes.image} src="https://static.toiimg.com/thumb/resizemode-4,width-1200,height-900,msid-84584076/84584076.jpg" alt='Amazon_Image' />
          </div>

          <div className={classes.image_container}>
            <img className={classes.image} src="https://i.ytimg.com/vi/MFPg04jAfcY/maxresdefault.jpg" alt='Amazon_Image' />
          </div>
        </Carousel>
      </div>
    );
  }
}
export default CarouselImages;