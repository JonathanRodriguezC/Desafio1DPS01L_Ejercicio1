"use client";
import styles from "./page.module.css";
import { PelisMain } from "@/components/PelisMain";

export default function Home() {
  return (
    <main className={styles.main}>
      <PelisMain></PelisMain>
      <footer className={styles.footer}>
        <p>Jonathan Rodriguez RC181256</p>
      </footer>
    </main>

  );
}
