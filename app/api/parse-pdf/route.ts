import pdfParse from "pdf-parse";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Convert readable Stream into arrayBuffer

    const fileBuffer = await request.arrayBuffer();

    // Convert arrayBuffer to Buffer
    const buffer = Buffer.from(fileBuffer);

    // Pass the data to PDF Parse
    const data = await pdfParse(buffer);

    console.log(data.text);

    return NextResponse.json({ text: data.text });
  } catch (error) {
    console.log(error);
  }
}
