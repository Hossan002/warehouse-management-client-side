import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { CustomHook } from '../CustomHook/CustomHook';

import Product from '../Product/Product'
import Cover from './Cover';
import Subscribe from './Subscribe';

const Home = () => {
    const [products] = CustomHook([]);

    return (
        <div className='container'>
            <Cover />
            <section>
                <div><h1 className='text-center text-black container'>Our Warehouse Fruits</h1></div>
                <div className='container'>
                    <div className="row">
                        {
                            products.slice(0, 6).map(product => <Product
                                key={product._id}
                                product={product}
                            />)
                        }
                    </div>
                    <div className="mx-auto text-end">
                        <Link to='/productList' className='btn btn text-white m-3 p-3 bg-success border'>Product Inventory</Link>
                    </div>
                </div>
            </section>
            <Subscribe />
        </div>
    );
};

export default Home;