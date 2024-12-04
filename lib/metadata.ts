import type { Metadata } from 'next/types';
import { createMetadataImage } from 'fumadocs-core/server';
import { source } from './source';

export const metadataImage = createMetadataImage({
  imageRoute: '/docs-og',
  source,
});

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: 'https://paymdir.netlify.app',
      images: '/banner.png',
      siteName: 'PayMdir',
      ...override.openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@alulamoke',
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      images: '/banner.png',
      ...override.twitter,
    },
  };
}

export const baseUrl =
  process.env.NODE_ENV === 'development' || !process.env.FRONTEND_URL
    ? new URL('http://localhost:3000')
    : new URL(`${process.env.FRONTEND_URL}`);
