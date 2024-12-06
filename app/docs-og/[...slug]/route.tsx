import { type ImageResponse } from 'next/og';
import Image from 'next/image';
import { generateOGImage } from 'fumadocs-ui/og';
import { metadataImage } from '@/lib/metadata';

export const GET = metadataImage.createAPI((page): ImageResponse => {
  return generateOGImage({
    title: page.data.title,
    description: page.data.description,
    site: 'PayMdir',
    icon: <Image src="/logo.png" alt="logo" width={120} height={120} />,
  });
});

export function generateStaticParams() {
  return metadataImage.generateParams();
}
