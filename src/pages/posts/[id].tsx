import { useRouter } from "next/router";
import { getAllPosts, getOnePost } from "~/server/api/post";
import type { IPost } from "~/server/api/post";
import Image from "next/image";
import Head from "next/head";

interface PropsType {
  post: IPost;
}

export default function PostPage({ post }: PropsType) {
  const imgLoader = () => {
    return `https://source.unsplash.com/random/200x200?sig=${query.id}`;
  };

  const { query, back } = useRouter();

  const goBack = () => {
    back();
  };

  return (
    <div className="flex min-h-screen  items-center justify-center bg-neutral-900 font-mono text-neutral-100 ">
      <Head>
        <title>{post.title}</title>
      </Head>
      <div className="h-1/4 w-1/2 rounded-lg bg-neutral-700 p-4">
        <button
          onClick={goBack}
          className="cursor-pointer rounded-lg bg-cyan-800 px-2 py-1 font-bold text-neutral-50 transition-transform ease-out hover:-translate-y-0.5"
        >
          Back
        </button>
        <h1 className="mb-2 text-lg font-bold">{post.title}</h1>
        <Image
          loader={imgLoader}
          src={`https://source.unsplash.com/random/400x400?sig=${query.id}`}
          alt={`${post.title}`}
          width={400}
          height={400}
          quality={50}
        />
        <p className="text-s mb-4 text-neutral-300">{post.body}</p>
        <p className="mb-2 text-xs text-neutral-500">Post id: {post.id}</p>
      </div>
    </div>
  );
}

export async function getStaticProps(context: any) {
  console.log(context);

  const post = await getOnePost(context.params.id);

  return {
    props: {
      post,
    },
    // revalidate: 10,
  };
}

export async function getStaticPaths() {
  const posts = await getAllPosts();

  return {
    paths: posts.map(({ id }) => ({ params: { id: id.toString() } })),
    fallback: false,
  };
}
