import type { Page } from "~/lib/page";
import { MdxContent } from "~/app/blog/_components/mdx-content";

interface PageViewProps {
  page: Page;
}

export function PageView(props: PageViewProps) {
  const { page } = props;

  return (
    <div className="prose py-6 dark:prose-invert">
      <MdxContent content={page.content} />
    </div>
  );
}
