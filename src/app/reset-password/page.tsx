"use client";
/* eslint-disable react-hooks/exhaustive-deps */
import { openMobileApp } from "@/utils/open-mobile-app";
import React, { useEffect, useState } from "react";

const ResetPassword = () => {
  let token: string | null = null;
  if (typeof window !== "undefined") {
    token = new URLSearchParams(window.location.search).get("token");
  }

  const [isLoading, setIsLoading] = useState(true);
  console.log("searchParams", token);

  useEffect(() => {
    if (!token) return;
    openMobileApp({ key: "reset-password", value: token });
  }, [token]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">Cargando...</h1>
      </div>
    );
  }
  return <div>ResetPasswordForm</div>;
};

export default ResetPassword;
