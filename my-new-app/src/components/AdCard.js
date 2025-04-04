import React from 'react';
import './AdCard.css'; // Стили для карточки

function AdCard({ ad }) {
    return (
        <div className="ad-card">
            <h3 className="ad-title">{ad.title}</h3>
            <p className="ad-description">{ad.description}</p>
            <p className="ad-price">{ad.price} руб.</p>
        </div>
    );
}

export default AdCard;
