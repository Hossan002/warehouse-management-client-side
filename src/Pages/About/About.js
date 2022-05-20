import React from 'react';
import './About.css';
import image4 from '../../img/4.jpg'

const About = () => {
    return (
        <div className='about py-3'>
            <div className='container'>
                <div className="row">
                    <div className="col-lg-8">
                        <div><img className='shadow-sm p-3 mb-5 bg-body rounded img-fluid' src={image4} alt="about img with bike" /></div>
                    </div>
                    <div className="col-lg-4">
                        <div><p className='py-3'>We are Stock Quality of Fruits Products.In Bangladesh, we are well-known wholesale fruit importers, exporters, suppliers, and commission agents.With over 3000 cultivars and natural varieties, mango is the most popular fruit tree in the country. The most popular cultivars, with fruit weighing between 100 and 1000 grams, are cultivated in Bangladesh's northern districts.</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;