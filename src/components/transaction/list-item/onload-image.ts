import React, { useCallback } from 'react';

type fn = (node: HTMLImageElement) => void;

const useOnloadImage = (
  setImageLoaded: React.Dispatch<React.SetStateAction<boolean>>
): fn => useCallback((node: HTMLImageElement) => {
  if (node !== null) {
    node.addEventListener('load', () => {
      setImageLoaded(true);
    }, { once: true });
  }
}, []);

export default useOnloadImage;
