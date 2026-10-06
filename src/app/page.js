import Link from 'next/link';
import styles from './home.module.css';

export default function Home() {
  return (
    <main className={styles.home}>
      <h1>Welcome to the profile app</h1>
      <p>Welcome to my personal profile!</p>
      <nav className={styles.navigation} aria-label="Main navigation">
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </main>
  );
}
