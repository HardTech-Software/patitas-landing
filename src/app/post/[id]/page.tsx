// import Image from "next/image";
import type { Metadata, ResolvingMetadata } from "next";
import Details from "./details";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { id } = await params;
  console.log("id", id);
  const api_url = process.env.NEXT_PUBLIC_API_URL ?? "";
  console.log("api_url", api_url);
  console.log("url", `${api_url}/api/v1/post/public/${id}`);
  await parent; // required to be able to use `parent`
  const response = await fetch(`${api_url}/api/v1/post/public/${id}`, {
    cache: "no-store",
  })
    .then((r) => r.json())
    .catch((e) => {
      console.log("error", e);
    });
  console.log("response", response);
  const post = response.payload;
  console.log("post", post);
  const imageUrl =
    post?.filesUrl?.[0]?.thumbnail ??
    post?.filesUrl?.[0]?.uri ??
    "https://web.archive.org/web/20170305154836im_/http://cachorrosfofos.com.br/wp-content/uploads/2014/04/racas-filhotes-de-cachorros-mais-fofos-golden-retriever.jpg";
  console.log("imageUrl", imageUrl);
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
export default async function Page({ params }: Props) {
  const { id } = await params;
  return <Details id={id} />;
}
