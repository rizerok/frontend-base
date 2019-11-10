import React, { useCallback } from 'react';

const useOnloadImage = (
  setImageLoaded: React.Dispatch<React.SetStateAction<boolean>>
): (node: HTMLImageElement) => void =>
  useCallback((node: HTMLImageElement) => {
    if (node !== null) {
      node.addEventListener('load', () => {
        setImageLoaded(true);
      }, { once: true });
    }
  }, []);

export default useOnloadImage;
