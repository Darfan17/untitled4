import React from 'react';
import Header from '../components/Header'; // Верхняя панель
import PromotedAds from '../components/PromotedAds'; // Секция с продвигаемыми объявлениями
import CategoriesTabs from '../components/CategoriesTabs'; // Вкладки категорий
import './HomePage.css';

function HomePage() {
    return (
        <div className="homepage">
            <Header />
            <main className="main-content">
                <PromotedAds />
                <CategoriesTabs /> {/* Добавляем вкладки категорий */}
                <section className="categories">
                    <div className="categories-list">
                        {/* Здесь будут элементы категорий */}
                    </div>
                </section>
                <section className="ads">
                    {/* Здесь будут другие объявления */}
                </section>
            </main>
            <footer className="footer">
                <p>© 2024 Sdelka. Все права защищены.</p>
            </footer>
        </div>
    );
}

export default HomePage;
