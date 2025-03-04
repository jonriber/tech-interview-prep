'use client';

import React, { useState} from "react";

import { incrementLike } from "@/lib/actions";

export default function LikeButton({initialLikes} : {initialLikes: number}) {
  const [likes, setLikes] = useState(initialLikes);
  async function handleLikeClick () {
    const updatedLikes = await incrementLike();
    setLikes(updatedLikes);
  }
  return (
    <>
      <p>Total Likes: {likes}</p>

      <button onClick={handleLikeClick}>
        Like
      </button>
    </>
  )
}