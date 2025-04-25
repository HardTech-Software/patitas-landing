// import Image from "next/image";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { id } = await params;
  console.log("id", id);
  await parent; // required to be able to use `parent`
  const response = await fetch(
    `http://localhost:4000/api/v1/post/public/${id}`,
    {
      cache: "no-store",
    },
  )
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
export default function Page() {}
// export default async function PostDetailPage({
//   params,
// }: {
//   params: { id: string };
// }) {
//   const response = await fetch(
//     `http://localhost:4000/api/v1/post/public/${params.id}`,
//     {
//       cache: "no-store", // o `next: { revalidate: 60 }`
//     },
//   ).then((r) => r.json());

//   const post = response.payload;
//   console.log(post);

//   const imageUrl =
//     post?.filesUrl?.[0]?.thumbnail ??
//     post?.filesUrl?.[0]?.uri ??
//     "https://www.mundoperros.es/wp-content/uploads/2018/01/cachorro-de-golden-830x593.jpg";

//   return (
//     <div>
//       <Image src={imageUrl} alt="image-patitas" width={600} height={400} />
//       <h1>{post.description}</h1>
//     </div>
//   );
// }
