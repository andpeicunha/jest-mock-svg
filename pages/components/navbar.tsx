import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <div>
        <ul className={styles.container}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/components/Contador">Contador</Link>
          </li>
          <li>
            <Link href="/components/Cronometro">Cronometro</Link>
          </li>
          <li>
            <Link href="/components/Lista">Lista</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
