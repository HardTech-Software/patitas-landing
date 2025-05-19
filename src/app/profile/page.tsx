"use client";
import { openMobileApp } from "@/utils/open-mobile-app";
import { useEffect } from "react";

const Profile = () => {
  let username: string | null = null;
  if (typeof window !== "undefined") {
    username = new URLSearchParams(window.location.search).get("username");
  }

  console.log("username", username);
  useEffect(() => {
    if (!username) return;
    openMobileApp({ key: "profile", value: username });
  }, [username]);
  return (
    <div style={{ marginTop: "300px", textAlign: "center" }}>
      <h1>Abriendo la app...</h1>
      <p>
        Si no se abre,{" "}
        <a href={`patitas://profile/${username}`}>haz clic aquí</a>.
      </p>
    </div>
  );
};

export default Profile;
