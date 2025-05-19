"use client";
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { openMobileApp } from "@/utils/open-mobile-app";

const Details = ({ id }: { id: string }) => {
  const [post, setPost] = useState<any>(null);

  const api_url = process.env.NEXT_PUBLIC_API_URL ?? "";

  const getPost = useCallback(async () => {
    if (!id) return;
    try {
      const response = await fetch(`/api/post?id=${id}`, {
        cache: "no-store",
      });
      const data = await response.json();
      const _post = data?.payload;
      setPost(_post);
    } catch (error) {
      console.log("Error fetching post:", error);
    }
  }, [id, api_url]);

  useEffect(() => {
    if (!id) return;
    openMobileApp({ key: "posts", value: id });
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
