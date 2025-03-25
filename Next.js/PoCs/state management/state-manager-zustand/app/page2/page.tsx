import useStore  from '@/lib/store';
import Link from 'next/link';

const Page2 = () => {
  const { count, increment } = useStore();
  return (
    <>
      <h1>Page 2</h1>
      <p> Count : {count}</p>
      <button onClick={increment}>Increment</button>
      <Link href="/page1">Page 1 with different components</Link>
    </>
  )
};

export default Page2;