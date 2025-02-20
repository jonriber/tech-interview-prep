'use server';

export async function createPost(formData: FormData) {
  console.log('This is a server function createPost');
  const title = formData.get('title');
  const content = formData.get('content');

  // update data on the daba base
  // revalidade cache
  // return new data
  
};

export async function deletePost(formData:FormData){};

