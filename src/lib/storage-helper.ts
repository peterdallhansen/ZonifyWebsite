"use client";

// Retrieves a value from local storage and parses it as JSON.
export function getLocalStorage<T>(key: string, defaultValue: T): T {
  if (typeof window === "undefined") {
    return defaultValue;
  }

  const stickyValue = localStorage.getItem(key);

  if (stickyValue !== null) {
    try {
      return JSON.parse(stickyValue) as T;
    } catch (error) {
      console.error(`Error parsing JSON for key "${key}":`, error);
      return defaultValue;
    }
  } else {
    return defaultValue;
  }
}

export function setLocalStorage<T>(key: string, value: T): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
