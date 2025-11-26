import React from 'react';
import '../Styles/PartnersLogo.css';
import image1 from '../assets/img1.png';
import image2 from '../assets/img2.png';
import image3 from '../assets/img3.png';
import image4 from '../assets/img4.png';

const PartnersLogo = () => {
    const partners = [
        { name: 'Jetstar', logo: image1 },
        { name: 'Expedia', logo: image2 },
        { name: 'QANTAS', logo: image3 },
        { name: 'Alitalia', logo: image4 }
    ];

    return (
        <div className="partners-logo-section">
            <div className="partners-container">
                {partners.map((partner, index) => (
                    <div key={index} className="partner-card">
                        <div className="logo-wrapper">
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="partner-image"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PartnersLogo;