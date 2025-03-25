
import useStore from "@/lib/store";

const Page1 = () => {
  const { count, increment } = useStore();
  return (
    <>
      <h1>Page 1 with different components</h1>
    </>
  )
};

export default Page1;