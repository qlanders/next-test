import styles from './page.module.css'
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>test</h1>
        <Link href={'/news'}>News</Link>
    </main>
  )
}
