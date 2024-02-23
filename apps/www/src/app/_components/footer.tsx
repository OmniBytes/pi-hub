import Link from "next/link";

import { Text } from "@omnibytes/ui/text";
import { Title } from "@omnibytes/ui/title";

import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer>
      <div className={styles.grid}>
        <Link href="/blog" className={styles.col}>
          <Title order="two">Blog</Title>

          <Text>Posts about the journey</Text>
        </Link>

        <div className={styles.col} />

        <Link href="/projects" className={styles.col}>
          <Title order="two">Projects</Title>

          <Text>See our projects</Text>
        </Link>
      </div>
    </footer>
  );
}
