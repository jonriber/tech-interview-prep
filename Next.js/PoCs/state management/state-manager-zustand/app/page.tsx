'use client'
import Link from "next/link";
import useStore from "@/lib/store";

export default function Home() {

  const { count } = useStore();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <section>
          <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2 tracking-[-.01em]">
              <Link href="/page1">Page 1 with different components</Link>
            </li>
            <li className="tracking-[-.01em]">
              <Link href="/page2">Page 2</Link>
            </li>
          </ol>
        </section>

        <section className="counter-section flex bg-amber-50 rounded-2xl">
          <div>
            <h2 className="text-2xl font-bold text-center text-black">
              {`Count: ${count}`}
            </h2>
          </div>
        </section>

      </main>
     
    </div>
  );
}
