import { ImageResponse } from 'next/og';
import { getNewsPost } from '@/lib/news';

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


  // Resolve the image URL
  let imageUrl = `${baseUrl}/opengraph-image.jpg`; // Fallback to root OG image
  if (post?.image) {
    imageUrl = post.image.startsWith('http') ? post.image : `${baseUrl}${post.image}`;
  }

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
        }}
      >
        {/* Background Image */}
        <img
          src={imageUrl}
          alt={post?.title || 'News'}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />

        {/* Overlay Text */}
        {post?.overlayText && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '60px',
              backgroundColor: 'rgba(0, 0, 0, 0.2)', // Subtle darken to ensure text readability
            }}
          >
            <p
              style={{
                color: 'white',
                fontSize: '64px',
                fontWeight: 600,
                textAlign: 'center',
                lineHeight: 1.2,
                maxWidth: '900px',
                textShadow: '0 2px 10px rgba(0,0,0,0.5)',
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
    }
  );
}
