import React, { useState, useEffect } from 'react';
import '../Styles/Footer.css';
import googleplay from '../assets/google-play.jpg';
import appstore from '../assets/app-store.jpg';

const Footer = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return (
        <footer className="footer">
            <div className="section__container footer__container">
                <div className="footer__col">
                    <a href="#" className="nav__logo">
                        <div className={`logo ${isMobile ? 'mobile-logo' : ''}`}>
                            Jad<span>oo</span>.
                        </div>
                    </a>
                    <p>Book your trip in minute, get full Control for much longer.</p>
                </div>

                <div className="footer__col">
                    <h4>Company</h4>
                    <div className="footer__links">
                        <a href="#about">About</a>
                        <a href="#careers">Careers</a>
                        <a href="#mobile">Mobile</a>
                    </div>
                </div>

                <div className="footer__col">
                    <h4>Contact</h4>
                    <div className="footer__links">
                        <a href="#help">Help/FAQ</a>
                        <a href="#press">Press</a>
                        <a href="#affiliates">Affiliates</a>
                    </div>
                </div>

                <div className="footer__col">
                    <h4>More</h4>
                    <div className="footer__links">
                        <a href="#airline">Airline Fees</a>
                        <a href="#airline">Airline</a>
                        <a href="#low-fare">Low Fare Tips</a>
                    </div>
                </div>

                <div className="footer__col">
                    <div className="footer__socials">
                        <a href="#"><i className="ri-facebook-fill"></i></a>
                        <a href="#"><i className="ri-instagram-line"></i></a>
                        <a href="#"><i className="ri-twitter-fill"></i></a>
                    </div>
                    <h5>Discover our app</h5>
                    <div className="footer__discover">
                        <a href="#"><img src={googleplay} alt="Google Play" /></a>
                        <a href="#"><img src={appstore} alt="App Store" /></a>
                    </div>
                </div>
            </div>

            <div className="footer__bar">
                <p>All rights reserved@jadoo.com</p>
            </div>
        </footer>
    );
};

export default Footer;