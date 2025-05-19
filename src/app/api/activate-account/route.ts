export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");
  const api_url = process.env.NEXT_PUBLIC_API_URL ?? "";

  const response = await fetch(`${api_url}/api/v1/auth/activate-account`, {
    cache: "no-store",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token,
    }),
  })
    .then((r) => r.json())
    .catch((e) => {
      console.log("error", e);
    });
  console.log("response+------", response);
  return new Response(JSON.stringify(response));
}
