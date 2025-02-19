import React from "react"
import { getPosts } from '@/lib/posts';
import Post  from "@/ui/post";
import styles from './styles.module.css';

export default async function Page() {
  const posts = await getPosts();

  return (
    <ul className={styles.blog}>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </ul>
  )
}