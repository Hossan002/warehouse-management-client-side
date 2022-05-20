import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../img/1.jpg';
import image2 from '../../img/2.jpeg';
import image3 from '../../img/3.webp';

const Cover = () => {
    return (
        <div className='container'>
            <section className='mb-5'>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </section>
        </div>
    );
};

export default Cover;