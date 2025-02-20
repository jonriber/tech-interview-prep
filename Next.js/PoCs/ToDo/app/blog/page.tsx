import React from "react"
// import { getPosts } from '@/lib/posts';
import Post  from "@/ui/post";
import styles from './styles.module.css';

export default async function Page() {
  const data = await fetch('https://api.vercel.app/blog')
  const posts = await data.json()

  return (
    <ul className={styles.blog}>
      {posts.map((post) => (
        // <Post key={post.id} post={post} />
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}