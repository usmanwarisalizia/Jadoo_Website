import React, { useState } from 'react';
import '../styles/components/Subscribe.css';

const Subscribe = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Subscribed with:', email);
    };

    return (
        <section className="subscribe subscribe__container">
            <div className="container">
                <div className="subscribe-content">
                    <h2>Subscribe to get information, latest news and other interesting offers about Jadoo</h2>
                    <form onSubmit={handleSubmit} className="subscribe-form">
                        <div className="input-wrapper">
                            <span className="email-icon">
                                <i className="ri-mail-line"></i>
                            </span>
                            <input
                                type="email"
                                placeholder="Your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;

