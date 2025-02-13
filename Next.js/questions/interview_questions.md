# Interview Questions

## What are the differences between SSR (Server-Side Rendering) and SSG (Static Site Generation) in Next.js, and when would you use each?

This is a fundamental question about rendering strategies. One must explain SSR (getServerSideProps) as
rendering content on every request and SSG (getStaticProps) as generating static HTML at build time.

## How does Next.js improve performance through image optimization and how do you use next/image?

Discuss the key benefits like automatic image resizing, lazy loading, and image format optimization (e.g., WebP).
Explain usage of the next/image component.

## What is Incremental Static Regeneration (ISR) and how does it differ from traditional static site generation?

ISR allows static pages to be updated by regenerating them after a set period (revalidate field) while still serving
the static version until it’s updated.

## What are API routes in Next.js, and how do they differ from traditional REST APIs?

Highlight the integration of backend API routes directly within the Next.js app using the /api directory and how this
eliminates the need for a separate server.

## How does Next.js handle dynamic routing and how do you create a page with dynamic URL segments?

