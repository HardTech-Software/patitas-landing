export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const api_url = process.env.NEXT_PUBLIC_API_URL ?? "";
  console.log("api_url", api_url);
  console.log("id", id);

  const response = await fetch(`${api_url}/api/v1/post/public/${id}`, {
    cache: "no-store",
  })
    .then((r) => r.json())
    .catch((e) => {
      console.log("error", e);
    });
  console.log("response++++++", response);
  return new Response(JSON.stringify(response));
}
