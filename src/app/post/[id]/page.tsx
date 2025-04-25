/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props) {
  const post = await fetch(
    `http://localhost:4000/api/v1/post/public/${params.id}`,
    {
      cache: "no-store", // o `next: { revalidate: 60 }` si quieres ISR
    },
  ).then((r) => r.json());

  const imageUrl =
    post?.filesUrl?.[0]?.thumbnail ??
    post?.filesUrl?.[0]?.uri ??
    "https://web.archive.org/web/20170305154836im_/http://cachorrosfofos.com.br/wp-content/uploads/2014/04/racas-filhotes-de-cachorros-mais-fofos-golden-retriever.jpg";

  return {
    title: `Patitas | ${post.description}`,
    description: post.description,
    openGraph: {
      title: `Patitas | ${post.description}`,
      description: post.description,
      images: [imageUrl],
      url: `https://patitas-app.netlify.app/posts/${post.id}`,
    },
    twitter: {
      card: "summary_large_image",
      description: post.description,
      images: [imageUrl],
    },
  };
}

export default async function PostDetailPage({ params }: Props) {
  const response = await fetch(
    `http://localhost:4000/api/v1/post/public/${params.id}`,
    {
      cache: "no-store", // o `next: { revalidate: 60 }`
    },
  ).then((r) => r.json());

  const post = response.payload;
  console.log(post);

  const imageUrl =
    post?.filesUrl?.[0]?.thumbnail ??
    post?.filesUrl?.[0]?.uri ??
    "https://www.mundoperros.es/wp-content/uploads/2018/01/cachorro-de-golden-830x593.jpg";

  return (
    <div>
      <Image src={imageUrl} alt="image-patitas" width={600} height={400} />
      <h1>{post.description}</h1>
    </div>
  );
}
