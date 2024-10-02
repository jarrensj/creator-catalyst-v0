'use client'

import { useEffect } from 'react';
import JSConfetti from 'js-confetti'; 

const ConfettiClick = () => {
  useEffect(() => {
    const jsConfetti = new JSConfetti();

    const handleOnClick = () => {
      jsConfetti.addConfetti({
        emojis: ['📈','✨'],
        emojiSize: 100,
        confettiNumber: 24,
      });
    };

    document.addEventListener('click', handleOnClick);

    return () => {
      document.removeEventListener('click', handleOnClick);
    };
  }, []);

  return null;
};

export default ConfettiClick;