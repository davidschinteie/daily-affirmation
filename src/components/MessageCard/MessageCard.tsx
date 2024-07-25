"use client";

import React, { useEffect, useState } from "react";
import styles from "./messageCard.module.css";

interface MessageCardProps {
  message: string | null;
  loading: boolean;
  speed?: number;
}

const MessageCard = ({ message, loading, speed = 50 }: MessageCardProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (message && index < message.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + message[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, message, speed]);

  return (
    <div className={styles.card}>
      {loading && (
        <p className={styles.loadingText}>Generating affirmation ...</p>
      )}
      {message && <p className={styles.cardText}>{displayedText}</p>}
    </div>
  );
};

export default MessageCard;
