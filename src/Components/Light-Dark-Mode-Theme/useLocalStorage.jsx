import { useEffect, useState } from "react";

const useLocalStorage = (key, defaultValue) => {
    const [value, SetValue] = useState(() => {
        let currentValue;
        try {
            currentValue = JSON.parse(
                localStorage.getItem(key) || String(defaultValue)
            );
        } catch (err) {
            console.log(err);
            currentValue = defaultValue;
        }
        return currentValue;
    });
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, SetValue];
};

export default useLocalStorage;
