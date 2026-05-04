import './Search.css'
import { useState } from 'react';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

export function Search() {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        console.log('Поиск фильма:', query);
    };

    return (
        <div className="search-block">
            <Input
                placeholder="Введите название"
                image={true}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <Button text="Искать" onClick={handleSearch} />
        </div>
    );
}