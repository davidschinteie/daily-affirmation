import React from "react";
import styles from "./footer.module.css";

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={`${styles.footer} ${className}`}>
      © {new Date().getFullYear()} - Built with
      {` `} Next JS, OpenAi & Vercel by {` `}
      <a href="https://github.com/davidschinteie" target={"_blank"}>
        David Schinteie
      </a>
    </footer>
  );
};

export default Footer;
