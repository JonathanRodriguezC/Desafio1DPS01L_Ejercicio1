"use client";
import styles from "./page.module.css";
import { PelisMain } from "@/components/PelisMain";

export default function Home() {
  return (
    <main className={styles.main}>
      <PelisMain></PelisMain>
      <footer className={styles.footer}>
        <p>Jonathan Alexander Rodriguez Campos RC181256</p>
        <p>Rodrigo Humberto Aguilera Mendoza	AM201939</p>
      </footer>
    </main>

  );
}
