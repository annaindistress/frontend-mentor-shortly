import { useState } from "react";

export function useLocalStorage(key: string, initialValue: any) {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        const item = window.localStorage.getItem(key);
        const parsedItem = item ? JSON.parse(item) : initialValue;
        return Array.isArray(parsedItem) ? parsedItem : [];
      } catch (error) {
        return initialValue;
      }
    }
    return initialValue;
  });

  const setValue = (value: any) => {
    if (typeof window !== "undefined") {
      try {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.log(error);
      }
    }
  };

  return [storedValue, setValue];
}
