'use client';
import React from "react";
import { createPost } from "@/lib/actions";

export function Button() {
  return <button formAction={createPost}>Create</button>
}
