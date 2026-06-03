import { useEffect, useState } from "react";

export function useLocalStorage(key) {
    const [data, setData] = useState(() => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    });

    useEffect(() => {
        if (data === undefined) return;
        localStorage.setItem(key, JSON.stringify(data));
    }, [key, data]);

    return [data, setData];
}