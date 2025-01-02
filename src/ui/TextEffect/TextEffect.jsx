import styles from "./TextEffect.module.css";
import { useEffect, useRef } from "react";

function TextEffect({ children, className = "", typingSpeed = 25, delay = 0 }) {
  const textRef = useRef("");
  const hasRunRef = useRef(false);
  const textOrg = children.toString();

  useEffect(
    function () {
      function typingEffect(typingSpeed, index = 0) {
        if (index === textOrg.length) {
          textRef.current.nextElementSibling.classList.add(
            styles.hideTypingArrow
          );
          return;
        }

        textRef.current.textContent += textOrg[index];

        setTimeout(() => typingEffect(typingSpeed, index + 1), typingSpeed);
      }

      if (!hasRunRef.current) {
        hasRunRef.current = true;
        setTimeout(typingEffect(typingSpeed), delay);
      }
    },
    [delay, typingSpeed, textOrg]
  );

  return (
    <p className={className}>
      <span ref={textRef}></span>
      <span className={styles.typingArrow}> | </span>
    </p>
  );
}

export default TextEffect;
