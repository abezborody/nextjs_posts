import { getAllPosts } from "~/server/api/post";
import type { IPost } from "~/server/api/post";
import { useState } from "react";
import Link from "next/link";
import Head from "next/head";

interface IProps {
  posts: IPost[];
}

const Main = ({ posts }: IProps) => {
  const [filterData, setFilterData] = useState<string>("");

  const changeFilterData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterData(e.target.value);
  };

  return (
    <div className="min-h-screen bg-neutral-900 font-mono">
      <Head>
        <title>All posts</title>
      </Head>
      <div className="px-8 py-4 ">
        <h1 className="mb-2 text-2xl font-bold text-neutral-100">Posts:</h1>
        <input
          placeholder="search"
          value={filterData}
          onChange={changeFilterData}
          className=" rounded-lg px-2 py-1"
        />
        <div className="mt-4 grid grid-cols-4 gap-2 ">
          {posts
            .filter(({ title }) => title.includes(filterData))
            .map((post) => (
              <div
                className=" rounded-lg bg-neutral-700 p-4 text-neutral-100 transition ease-out hover:-translate-y-1 active:translate-y-1 "
                key={post.id}
              >
                <Link href={`/posts/${post.id}`}>
                  <h2 className="mb-2 font-bold">{post.title}</h2>
                  <p className="text-xs text-neutral-300">{post.body}</p>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Main;

export async function getServerSideProps() {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
}
