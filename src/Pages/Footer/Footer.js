import React from 'react';
import { Link } from 'react-router-dom';
import { FaAccusoft, FaEnvelope, FaMobileAlt } from "react-icons/fa";
import { BsLaptop } from "react-icons/bs";

import './Footer.css'

const Footer = () => {
    return (
        <div className="footer container-fluid pt-5" >
            <div className="container">
                <div className="row justify-content-around">
                    <div className="col-md-4">
                        <ul>
                            <li><BsLaptop /> Fruits WareHouse</li>
                            <li><FaAccusoft /> Demra, Dhaka-1361</li>
                            <li><FaEnvelope /> fruitwarehouse@gmail.com</li>
                            <li><FaMobileAlt /> 017xxxxxxxx</li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <ul>
                            <li><Link to="/contact" className='footer-link'>Contact</Link></li>
                            <li><Link to="/about" className='footer-link'>About</Link></li>
                            <li><Link to="/privacy" className='footer-link'>Privacy</Link></li>
                            <li><Link to="/terms" className='footer-link'>Terms</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <ul>
                            <li><Link to="/" className='footer-link'>Media</Link></li>
                            <li><Link to="/blog" className='footer-link'>Blog</Link></li>
                            <li><Link to="/" className='footer-link'>Forums</Link></li>
                        </ul>
                    </div>
                </div>
                <h4 className='text-white py-2 text-center'>All rights &copy; belongs to
                    Rabbi Hossain && Fruits Warehouse {new Date().getFullYear()}</h4>
            </div>
        </div>
    );
};

export default Footer;