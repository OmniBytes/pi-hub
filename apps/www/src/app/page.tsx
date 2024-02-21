import styles from "./page.module.css";

export default async function HomePage() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>header</p>
      </div>

      <div className={styles.center}>
        <div>
          <p>content</p>
        </div>
      </div>

      <div className={styles.grid}>
        <a
          href="https://hub.omnibytes.io"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Hub <span>-&gt;</span>
          </h2>
          <p>Hub like app for raspberry-pi</p>
        </a>

        <a
          href="/blog/hello-world"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Blog <span>-&gt;</span>
          </h2>
          <p>Posts about this journey</p>
        </a>
      </div>
    </main>
  );
}
