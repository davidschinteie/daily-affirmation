import React from "react";
import styles from "./navigation.module.css";
import Link from "next/link";

interface NavigationProps {
  className?: string;
}

const Navigation = ({ className }: NavigationProps) => {
  return (
    <nav className={`${styles.nav} ${className}`}>
      <div className="mainContainer fluidContainer">
        <div className={styles.flexWrapper}>
          <div className={styles.linksWrapper}>
            <Link href="/" className={styles.iconLink}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                className={styles.linksWrapper}
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="100%"
                  height="100%"
                  rx="16"
                  fill="currentColor"
                ></rect>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                  fill="black"
                ></path>
              </svg>
            </Link>
            {/* {user && <NavLink path={"/dashboard"} label={"Dashboard"} />} */}
          </div>
          {/* <UserBtn user={user} /> */}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
