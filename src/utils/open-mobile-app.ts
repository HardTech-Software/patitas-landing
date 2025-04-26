"use client";

export function openMobileApp(postId: string) {
  const userAgent = typeof window !== "undefined" ? navigator.userAgent : "";
  const isAndroid = /android/i.test(userAgent);
  const isIOS =
    /iPad|iPhone|iPod/.test(userAgent) &&
    typeof (window as unknown as { MSStream?: unknown }).MSStream ===
      "undefined";

  const deepLink = `patitas://posts/${postId}`; // Tu esquema de la app
  const fallbackUrl = "https://tuweb.com/download"; // A dónde llevar si no tienen la app

  if (isAndroid || isIOS) {
    const now = Date.now();
    console.log("isAndroid", isAndroid);
    console.log("isIOS", isIOS);
    window.location.href = deepLink;

    setTimeout(() => {
      if (Date.now() - now < 2000) {
        // El usuario probablemente no tiene la app instalada
        window.location.href = fallbackUrl;
      }
    }, 1500);
  } else {
    console.log("No es un dispositivo móvil, no redirecciono.");
  }
}
