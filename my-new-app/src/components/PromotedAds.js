import React from 'react';
import './PromotedAds.css'; // Подключаем стили для панели с промо-объявлениями

const promotedAds = [
    { id: 1, title: "Продажа нового ноутбука", description: "Ноутбук в идеальном состоянии, с гарантией.", imgUrl: "/path/to/image1.jpg" },
    { id: 2, title: "Продам велосипед", description: "В хорошем состоянии, почти новый", imgUrl: "/path/to/image2.jpg" },
    { id: 3, title: "Ищу помощника для переезда", description: "Требуется помощь для перевозки мебели.", imgUrl: "/path/to/image3.jpg" },
    { id:4, title:"Продам машину", description:"Состояние отличное", imgUrl:"/path/to/image4.jpg" },
    { id:5, title:"Продам машину", description:"Состояние отличное", imgUrl:"/path/to/image5.jpg" },
    { id:6, title:"Продам машину", description:"Состояние отличное", imgUrl:"/path/to/image6.jpg" },
];

function PromotedAds() {
    return (
        <div className="promoted-ads">
            <div className="promoted-ads-list">
                {promotedAds.map((ad) => (
                    <div key={ad.id} className="promoted-ad">
                        <img src={ad.imgUrl} alt={ad.title} className="ad-image" />
                        <div className="ad-details">
                            <h3 className="ad-title">{ad.title}</h3>
                            <p className="ad-description">{ad.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PromotedAds;
