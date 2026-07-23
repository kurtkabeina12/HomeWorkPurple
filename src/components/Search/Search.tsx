import styles from './Search.module.css'
import { useState } from 'react';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import cn from 'classnames';

export function Search() {
    const [query, setQuery] = useState<string>('');

    const handleSearch = () => {
        console.log('Поиск фильма:', query);
    };

    return (
        <div className={cn(styles['searchBlock'])}>
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