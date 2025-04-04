// src/components/SearchBar.js
import React, { useState } from 'react';

function SearchBar({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <div className="search-bar">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Поиск по объявлениям"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">Поиск</button>
            </form>
        </div>
    );
}

export default SearchBar;
