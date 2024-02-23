import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageView } from "~/app/_components/page-view";
import { getAllPages, getPageBySlug } from "~/lib/page";

interface PageProps {
  params: {
    slug: string[];
  };
}

export default async function MdxPage(props: PageProps) {
  const { params } = props;
  const page = await getPageBySlug(params.slug.join("/"));

  if (!page) {
    return notFound();
  }

  return <PageView page={page} />;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const page = await getPageBySlug(props.params.slug.join("/"));

  if (!page) {
    return notFound();
  }

  const title = `${page.content.frontmatter.title} | Omnibytes`;

  return {
    openGraph: {
      title,
    },
  };
}

export async function generateStaticParams() {
  const pages = await getAllPages();

  return pages.map(
    (page) =>
      ({
        slug: [page?.slug],
      }) as PageProps["params"],
  );
}
