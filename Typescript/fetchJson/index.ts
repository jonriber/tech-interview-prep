import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// Define the structure of the data we are expecting
// Interfaces are used to define the structure of an object
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  // console.log(response.data);
  const todo = response.data as Todo;
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;
  console.log(`
    todo with id: ${id}
    has a title of: ${title}
    is it completed? ${completed}
    `);
});