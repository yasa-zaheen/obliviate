export default async function parsePdf(file: File) {
  try {
    const response = await fetch("/api/parse-pdf", {
      method: "POST",
      body: file,
    });
    if (!response.ok) {
      throw new Error("Failed to parse PDF");
    }

    const result = await response.json();
    return result.text;
  } catch (error) {
    console.log(error);
  }
}
