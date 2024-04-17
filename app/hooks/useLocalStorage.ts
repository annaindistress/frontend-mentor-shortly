import { useState } from "react";
import { UrlArray } from "../types";

export function useLocalStorage(key: string, initialValue: unknown) {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        console.log(error);
      }
    }
    return initialValue;
  });

  const setValue = (value: any) => {
    if (typeof window !== "undefined") {
      try {
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        console.log(error);
      }
    }
  };

  return [storedValue, setValue];
}
