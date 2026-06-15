// Generic function to safely query DOM elements and avoid 'any'
export const getElement = <T extends HTMLElement>(selector: string): T => {
  const element = document.querySelector<T>(selector);
  if (!element) {
    throw new Error(`Element with selector "${selector}" not found.`);
  }
  return element;
};

// Utility to create elements with attributes dynamically
export const createElement = <T extends HTMLElement>(
  tag: string,
  className?: string,
  innerHTML?: string
): T => {
  const element = document.createElement(tag) as T;
  if (className) element.className = className;
  if (innerHTML) element.innerHTML = innerHTML;
  return element;
};