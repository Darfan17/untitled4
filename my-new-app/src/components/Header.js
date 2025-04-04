import React from 'react';
import logo from '../assets/images/logo.png'; // импортируем логотип
import './Header.css'; // Подключаем стили для панели

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Логотип" className="logo-image" />
            </div>
            <nav className="nav">
                <a href="/search" className="nav-link">Поиск</a>
                <a href="/profile" className="nav-link">Личный кабинет</a>
                <a href="/notifications" className="nav-link">Уведомления</a>
            </nav>
        </header>
    );
}

export default Header;
