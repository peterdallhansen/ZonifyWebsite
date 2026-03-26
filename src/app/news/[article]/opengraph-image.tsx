import { ImageResponse } from 'next/og';
import { getNewsPost } from '@/lib/news';
import fs from 'fs';
import path from 'path';

export const alt = 'Zonify.ai News';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({ params }: { params: Promise<{ article: string }> }) {
  const { article } = await params;
  const post = getNewsPost(article);
  
  // Dynamic base URL detection for Vercel environments
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL 
    ? process.env.NEXT_PUBLIC_BASE_URL 
    : (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://zonify.ai');


  // Resolve the image URL to a base64 data string for Satori
  let imageData: string;
  try {
    const imagePath = post?.image 
      ? path.join(process.cwd(), 'public', post.image)
      : path.join(process.cwd(), 'public/opengraph-image.jpg');

    if (fs.existsSync(imagePath)) {
      const imageBuffer = fs.readFileSync(imagePath);
      const extension = path.extname(imagePath).replace('.', '') || 'jpeg';
      const mimeType = extension === 'jpg' ? 'image/jpeg' : `image/${extension}`;
      imageData = `data:${mimeType};base64,${imageBuffer.toString('base64')}`;
    } else {
      // Fallback to a remote URL if the file isn't local
      imageData = `${baseUrl}/opengraph-image.jpg`;
    }
  } catch (e) {
    imageData = `${baseUrl}/opengraph-image.jpg`;
  }

  // Load custom font
  const fontData = fs.readFileSync(
    path.join(process.cwd(), 'public/fonts/britti-sans-font-family-1761561563-0/BrittiSansTrial-Regular-BF6757bfd47ffbf.otf')
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'Britti Sans',
          borderRadius: '48px', // 3x rounded-2xl (16px) to maintain relative proportions
        }}
      >
        {/* Background Image */}
        <img
          src={imageData}
          alt={post?.title || 'News'}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '1200px',
            height: '630px',
          }}
        />

        {/* Overlay Text */}
        {post?.overlayText && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '72px', // 3x p-6 (24px) to maintain relative proportions
            }}
          >
            <p
              style={{
                color: 'white',
                fontSize: '72px', // 3x 24px (desktop card size)
                fontWeight: 400,
                textAlign: 'center',
                lineHeight: 1.25, // leading-tight
                maxWidth: '1000px',
              }}
            >
              {post.overlayText}
            </p>
          </div>
        )}
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Britti Sans',
          data: fontData,
          style: 'normal',
          weight: 400,
        },
      ],
    }
  );
}
