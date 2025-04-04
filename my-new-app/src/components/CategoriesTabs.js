import React from 'react';
import './CategoriesTabs.css'; // Подключаем стили для вкладок

function CategoriesTabs() {
    return (
        <div className="categories-tabs">
            <ul className="tabs-list">
                <li className="tab-item">Электроника</li>
                <li className="tab-item">Одежда</li>
                <li className="tab-item">Недвижимость</li>
                <li className="tab-item">Автомобили</li>
                <li className="tab-item">Техника</li>
            </ul>
        </div>
    );
}

export default CategoriesTabs;
