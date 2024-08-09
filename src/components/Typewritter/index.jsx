import { useState, useEffect, useRef } from 'react';

// eslint-disable-next-line react/prop-types
export const Typewritter = ({ content }) => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const prevContent = useRef(content);

  useEffect(() => {
    // Se o conteúdo mudar, reinicie o efeito de digitação
    if (prevContent.current !== content) {
      prevContent.current = content;
      setText('');
      setIsTyping(true);
    }
  }, [content]);

  useEffect(() => {
    if (!isTyping) {
      // Reinicie o efeito de digitação após 2 segundos
      const restartTimeout = setTimeout(() => {
        setText('');
        setIsTyping(true);
      }, 5000);

      return () => clearTimeout(restartTimeout);
    }

    // Efeito de digitação
    const typeTimeout = setTimeout(() => {
      if (text === content) {
        setIsTyping(false);
      } else {
        setText(text + content[text.length]);
      }
    }, 20);

    return () => clearTimeout(typeTimeout);
  }, [text, content, isTyping]);

  return <p>{text}</p>;
};
