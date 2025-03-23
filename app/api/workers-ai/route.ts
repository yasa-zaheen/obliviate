import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  // Getting the text
  const extractedText = await request.text();

  // Sending request to cloudflare workers-ai
  try {
    console.log("Started Request");
    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/5b61e0f5bb9e5c73728405a0b0a25407/ai/run/@cf/meta/llama-3-8b-instruct`,
      {
        headers: {
          Authorization: `Bearer ${process.env.CLOUDFLARE_API_TOKEN!}`,
        },
        method: "POST",
        body: JSON.stringify({
          messages: [
            {
              role: "system",
              content: "Create exam style questions from the slides",
            },
            {
              role: "user",
              content: `These are the slides: ${extractedText}`,
            },
          ],
        }),
      }
    );

    const data = await response.json();
    console.log(data);
    console.log("Request ended");
  } catch (error) {
    console.log(error);
  }

  return NextResponse.json({ text: "Hello world" });
}
