/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useCallback, useEffect, useState } from "react";

const ActivateAccount = () => {
  let token: string | null = null;
  if (typeof window !== "undefined") {
    token = new URLSearchParams(window.location.search).get("token");
  }
  const [isLoading, setIsLoading] = useState(true);
  const [isActivated, setIsActivated] = useState(false);
  console.log("token", token);

  const api_url = process.env.NEXT_PUBLIC_API_URL ?? "";
  console.log("api_url", api_url);

  const activateAccount = useCallback(async () => {
    if (!token) return;
    try {
      const response = await fetch(`/api/activate-account?token=${token}`, {
        cache: "no-store",
      });
      const data = await response.json();
      console.log("data", data);
      const _post = data?.payload;
      if (_post?.status === "success") {
        setIsActivated(true);
      }
    } catch (error) {
      console.log("Error fetching post:", error);
    } finally {
      setIsLoading(false);
    }
  }, [token, api_url]);

  useEffect(() => {
    if (!token) return;
    activateAccount();
  }, [token]);
  return (
    <div>
      <h1>Activation account</h1>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : isActivated ? (
        <>
          <h2>Tu cuenta ha sido activada correctamente</h2>
          <h3>Ya puedes iniciar sesión en la aplicación</h3>
        </>
      ) : (
        <>
          <h2>Ocurrio un error al activar tu cuenta</h2>
          <h2>Por favor intenta nuevamente</h2>
        </>
      )}
    </div>
  );
};

export default ActivateAccount;
