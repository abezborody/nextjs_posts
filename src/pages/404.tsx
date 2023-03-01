import Head from "next/head";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-900 font-mono text-neutral-50">
      <Head>
        <title>Page not found...</title>
      </Head>
      <div className=" text-center text-lg font-bold">
        <div className="mb-4 text-6xl">❌</div>
        <p className="mb-12 text-3xl">Not found...</p>
        <div className="transition-transform ease-out hover:-translate-y-0.5 hover:scale-110">
          <Link
            className=" rounded-lg bg-neutral-700 px-2 py-1 text-sm  text-cyan-400  hover:text-cyan-100"
            href={`/posts/`}
          >
            to posts
          </Link>
        </div>
      </div>
    </div>
  );
}
