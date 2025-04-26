/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from "next";
import Details from "./details";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const api_url = process.env.NEXT_PUBLIC_API_URL ?? "";

  const response = await fetch(`${api_url}/api/v1/post/public/${id}`, {
    cache: "no-store",
  })
    .then((r) => r.json())
    .catch((e) => {
      console.log("error", e);
    });
  const post = response.payload;
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
      url: `https://patitas-app.netlify.app/posts/${id}`,
    },
    twitter: {
      card: "summary_large_image",
      description: post.description,
      images: [imageUrl],
    },
  };
}
export default async function Page({ params, searchParams }: Props) {
  const { id } = await params;
  return <Details id={id} />;
}
