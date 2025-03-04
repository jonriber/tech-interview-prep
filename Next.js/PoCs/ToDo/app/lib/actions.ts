'use server';

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(formData: FormData) {
  console.log('This is a server function createPost');
  const title = formData.get('title');
  const content = formData.get('content');

  // update data on the daba base
  // revalidade cache
  revalidatePath('/posts');
  // return new data
  
  // redirect user to a different page

  redirect('/posts');
};

export async function deletePost(formData:FormData){};

