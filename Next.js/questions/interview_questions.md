# Interview Questions

Below there are some potential interview questions and the expected answer.

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

Explain dynamic routing with [param].js files and how to generate static pages with dynamic content using
getStaticPaths and getStaticProps.

## What is the purpose of next/link and how does it improve navigation compared to regular anchor (<a>) tags?

next/link enables client-side routing with pre-fetching, meaning pages load faster when navigating between routes.

## Can you explain how to use getStaticPaths in a Next.js application and when it would be necessary?

Explain how getStaticPaths is used to generate dynamic static pages and how it works with getStaticProps to
pre-render pages.

## What is Middleware in Next.js and how would you use it?

 Explain how middleware can be used to intercept requests before they are processed by API routes or page components,
 often used for things like authentication or request logging.

## What are some best practices for handling environment variables in a Next.js application?

Discuss how Next.js uses .env files and next.config.js to define environment variables and the importance of
exposing only required environment variables to the client-side.

## How does Next.js handle SEO optimization? What tools and techniques would you use to improve SEO in a Next.js application?

Talk about using the next/head component to manage meta tags, ensuring proper usage of getStaticProps and
getServerSideProps for SEO purposes, and the benefits of pre-rendering.

## Explain the role of next.config.js and how you can customize it to optimize your application

Be ready to discuss how to tweak Webpack configurations, enable environment variables, or configure Next.js settings
like images or reactStrictMode.

## How do you handle global and scoped CSS in Next.js?

Discuss CSS Modules, Styled JSX, and how Next.js allows for both global styles (via global.css or similar) and
component-scoped styles (using CSS Modules).

## What are some common performance optimizations you would implement in a Next.js application?

Talk about lazy loading images with next/image, prefetching with next/link, code splitting, and using static
generation where possible.

## How do you manage fallback pages in Next.js when using dynamic routing?

Explain the fallback option in getStaticPaths (e.g., false, true, or 'blocking') and how it affects how pages are
generated and served.

## What is the difference between a custom _app.js and a custom_document.js?

_app.js is used for customizing the root component and adding global providers like Redux or Context API,
while_document.js is used to customize the HTML document structure.
