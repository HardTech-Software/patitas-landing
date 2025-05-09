"use client";

export function openMobileApp({ key, value }: { key: string; value?: string }) {
  const userAgent = typeof window !== "undefined" ? navigator.userAgent : "";
  const isAndroid = /android/i.test(userAgent);
  const isIOS =
    /iPad|iPhone|iPod/.test(userAgent) &&
    typeof (window as unknown as { MSStream?: unknown }).MSStream ===
      "undefined";

  const deepLink = `patitas://${key}/${value ?? ""}`;
  const fallbackUrl = "https://patitas-app.netlify.app/";

  if (isAndroid || isIOS) {
    const now = Date.now();

    window.location.href = deepLink;

    setTimeout(() => {
      if (Date.now() - now < 2000) {
        window.location.href = fallbackUrl;
      }
    }, 1500);
  } else {
    console.log("No es un dispositivo móvil, no redirecciono.");
  }
}
