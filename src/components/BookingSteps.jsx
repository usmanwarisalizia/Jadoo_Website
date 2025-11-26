import React from 'react';
import '../styles/components/BookingSteps.css';
import tripImage from '../assets/trip.png';
import { FaMapMarkerAlt, FaCreditCard, FaPlaneDeparture } from 'react-icons/fa';

const BookingSteps = () => {
    const steps = [
        {
            icon: <FaMapMarkerAlt />,
            title: 'Choose Destination',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.'
        },
        {
            icon: <FaCreditCard />,
            title: 'Make Payment',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.'
        },
        {
            icon: <FaPlaneDeparture />,
            title: 'Reach Airport on Selected Date',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.'
        }
    ];

    return (
        <section className="section__container trip__container" id="bookings">
            <div className="trip__image">
                <img src={tripImage} alt="trip" />
            </div>
            <div className="trip__content">
                <h3 className="section__subheader">Easy and Fast</h3>
                <h2 className="section__header">Book Your Next Trip In 3 Easy Steps</h2>
                <ul className="trip__list">
                    {steps.map((step, index) => (
                        <li key={index}>
                            <span className="trip__icon">{step.icon}</span>
                            <div>
                                <h4>{step.title}</h4>
                                <p>{step.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default BookingSteps;
