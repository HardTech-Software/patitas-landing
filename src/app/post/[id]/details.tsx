/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

// import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";

const Details = ({ id }: { id: string }) => {
  const [post, setPost] = useState<any>(null);
  console.log("id", id);

  const api_url = process.env.NEXT_PUBLIC_API_URL ?? "";
  console.log("api_url", api_url);

  const getPost = useCallback(async () => {
    if (!id) return;
    // console.log("getPost", `${api_url}/api/v1/post/public/${id}`);
    try {
      const response = await fetch(`/api/post?id=${id}`, {
        cache: "no-store",
      });
      const data = await response.json();
      console.log("data", data);
      const _post = data?.payload;
      setPost(_post);
    } catch (error) {
      console.log("Error fetching post:", error);
    }
  }, [id, api_url]);

  useEffect(() => {
    if (!id) return;
    getPost();
  }, [id]);
  return (
    <div>
      <h1>Details</h1>
      <h2>{post?.description}</h2>
      <div className="flex flex-col gap-4">
        {post?.filesUrl?.map((file: any, index: number) => (
          <Image
            key={index}
            src={file.thumbnail ?? file.uri}
            alt="Post Image"
            width={500}
            height={500}
          />
        ))}
      </div>
    </div>
  );
};

export default Details;
//https://12e7-2803-c600-810b-b562-75fb-a008-829-e563.ngrok-free.app/api/v1/post/public/67356e4bae9e3559c4c5dcfe
//https://12e7-2803-c600-810b-b562-75fb-a008-829-e563.ngrok-free.app/api/v1/post/public/67356e4bae9e3559c4c5dcfe
