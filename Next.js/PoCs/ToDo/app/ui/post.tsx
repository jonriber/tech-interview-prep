import Link from "next/link";
import { getPosts } '@/lib/posts';
export default async function Post({ post}) {
  const posts = await getPosts();

  return(
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  )
}