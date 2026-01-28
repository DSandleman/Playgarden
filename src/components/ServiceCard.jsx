import React from 'react';

function ServiceCard({ title, description, image, link }) {
    return (
        <a href={link} className="service-card">
            <div
                className="service-card-image"
                style={{ backgroundImage: `url(${image})` }}
            ></div>
            <div className="service-card-content">
                <h3 className="service-card-title">{title}</h3>
                <p className="service-card-description">{description}</p>
            </div>
        </a>
    );
}

export default ServiceCard;
