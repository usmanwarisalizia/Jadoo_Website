import React from "react";
import weatherImg from "../assets/weather.png";
import planeImg from "../assets/plane.png";
import eventImg from "../assets/event.png";
import customImg from "../assets/customisation.png";
import "../Styles/Services.css";

const Services = () => {
    const services = [
        {
            img: weatherImg,
            title: "Calculated Weather",
            description:
                "Stay ahead of your travels with precise weather forecasts tailored to your destination's conditions.",
        },
        {
            img: planeImg,
            title: "Best Flights",
            description:
                "Unlock your exclusive access to optimal flight options curated to match your preferences and budget.",
        },
        {
            img: eventImg,
            title: "Local Events",
            description:
                "Immerse yourself in the pulse of your destination with insights into local events and happenings within travel.",
        },
        {
            img: customImg,
            title: "Customizations",
            description:
                "Tailor your journey with personalized customizations, ensuring every detail reflects your unique travel style.",
        },
    ];

    return (
        <section className="section__container service__container" id="flights">
            <h3 className="section__subheader">CATEGORY</h3>
            <h2 className="section__header">We Offer Best Services</h2>
            <div className="service__grid">
                {services.map((service, index) => (
                    <div key={index} className="service__card">
                        <img src={service.img} alt="service" />
                        <h4>{service.title}</h4>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
