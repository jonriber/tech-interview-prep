import React from "react"
// import { getPosts } from '@/lib/posts';
// import { db, posts } from '@/lib/db';
import Post  from "@/ui/post";
import styles from './styles.module.css';

export default async function Page() {

  // Fetching data with API routes
  const data = await fetch('https://api.vercel.app/blog')
  const posts = await data.json()


  // Fetching data with ORM or DB
  // const allPosts = await db.select().from(posts)

  
  return (
    <ul className={styles.blog}>
      {posts.map((post) => (
        // <Post key={post.id} post={post} />
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}