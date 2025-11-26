import React, { useState } from 'react';
import '../styles/components/Destinations.css';
import destination1 from '../assets/destination-1.jpg';
import destination2 from '../assets/destination-2.jpg';
import destination3 from '../assets/destination-3.jpg';

const Destinations = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const destinations = [
        { image: destination1, name: 'Rome, Italy', price: '$5,42k', duration: '10 Days Trip' },
        { image: destination2, name: 'London, UK', price: '$4.2k', duration: '12 Days Trip' },
        { image: destination3, name: 'Full Europe', price: '$15k', duration: '28 Days Trip' },
    ];

    return (
        <section className="section__container" id="destinations">
            <h3 className="section__subheader">Top Selling</h3>
            <h2 className="section__header">Top Destinations</h2>
            <div className="destination__grid">
                {destinations.map((destination, index) => (
                    <div
                        key={index}
                        className={`destination__card ${hoveredIndex === index ? 'hovered' : ''}`}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <img src={destination.image} alt={destination.name} />
                        <div className="destination__details">
                            <div>
                                <h4>{destination.name}</h4>
                                <p>{destination.price}</p>
                            </div>
                            <p>
                                <span><i class="ri-navigation-fill"></i></span> {destination.duration}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Destinations;
