import Link from "next/link";

import { Text } from "@omnibytes/ui/text";
import { Title } from "@omnibytes/ui/title";

import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer>
      <div className={styles.grid}>
        <Link href="/projects" className={styles.col}>
          <Title order="two">
            Projects <span>-&gt;</span>
          </Title>

          <Text>See our projects</Text>
        </Link>

        <Link href="/blog" className={styles.col}>
          <Title order="two">
            Blog <span>-&gt;</span>
          </Title>

          <Text>Posts about this journey</Text>
        </Link>

        <Link href="/about" className={styles.col}>
          <Title order="two">
            About <span>-&gt;</span>
          </Title>

          <Text>Learn more about the journey</Text>
        </Link>
      </div>
    </footer>
  );
}
