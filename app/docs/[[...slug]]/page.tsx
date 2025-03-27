import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from "fumadocs-ui/page";
import defaultMdxComponents, { createRelativeLink } from "fumadocs-ui/mdx";
import { ImageZoom, ImageZoomProps } from "fumadocs-ui/components/image-zoom";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";

import { Rate } from "@/components/rate";
import { repo, owner, onRateAction } from "@/lib/github";

import { openapi, source } from "@/lib/source";
import { createMetadata, metadataImage } from "@/lib/metadata";

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const { body: MDXContent, toc, lastModified } = page.data;

  const ImageZoomWrapper = (
    props: React.ImgHTMLAttributes<HTMLImageElement>
  ) => {
    const { src, alt, ...rest } = props;

    if (!src || !alt) {
      return;
    }

    return (
      <ImageZoom
        src={src}
        alt={alt}
        {...(rest as Omit<ImageZoomProps, "src" | "alt">)}
      />
    );
  };

  return (
    <DocsPage
      toc={toc}
      full={page.data.full}
      lastUpdate={lastModified}
      editOnGithub={{
        repo,
        owner,
        sha: "main",
        path: `content/docs/${page.file.path}`,
      }}
      breadcrumb={{ includePage: true, includeSeparator: true }}
      tableOfContent={{ style: "clerk" }}
      tableOfContentPopover={{ style: "clerk" }}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDXContent
          components={{
            ...defaultMdxComponents,
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
            // you can add other MDX components here
            APIPage: openapi.APIPage,
            img: ImageZoomWrapper,
            Tabs,
            Tab,
          }}
        />
      </DocsBody>
      <Rate onRateAction={onRateAction} />
    </DocsPage>
  );
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return createMetadata(
    metadataImage.withImage(page.slugs, {
      title: page.data.title,
      description:
        page.data.description ||
        "Comprehensive API documentation, integration guides, and resources to help you seamlessly connect to PayMdir's powerful payment system. Build, test, and deploy with ease.",
      openGraph: {
        url: `/docs/${page.slugs.join("/")}`,
      },
    })
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}
