import { source } from '@/lib/source';
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { ImageZoom, ImageZoomProps } from 'fumadocs-ui/components/image-zoom';
import { getGithubLastEdit } from 'fumadocs-core/server';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  const time = await getGithubLastEdit({
    sha: 'main',
    owner: 'alulamoke',
    repo: 'docs.dinarpay.et',
    path: `content/docs/${page.file.path}`,
  });

  const ImageZoomWrapper = (
    props: React.ImgHTMLAttributes<HTMLImageElement>
  ) => {
    const { src, alt, ...rest } = props;

    if (!src || !alt) {
      console.warn("ImageZoom requires 'src' and 'alt' to be defined.");
      return <img {...props} />;
    }

    return (
      <ImageZoom
        src={src}
        alt={alt}
        {...(rest as Omit<ImageZoomProps, 'src' | 'alt'>)}
      />
    );
  };

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      breadcrumb={{ includePage: true, includeSeparator: true }}
      tableOfContent={{
        style: 'clerk',
      }}
      tableOfContentPopover={{
        style: 'clerk',
      }}
      editOnGithub={{
        sha: 'main',
        owner: 'alulamoke',
        repo: 'docs.dinarpay.et',
        path: `content/docs/${page.file.path}`,
      }}
      lastUpdate={new Date(time!)}
      // lastUpdate={new Date(page.data.lastModified!)}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX
          components={{
            ...defaultMdxComponents,
            img: ImageZoomWrapper,
            Tabs,
            Tab,
          }}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
