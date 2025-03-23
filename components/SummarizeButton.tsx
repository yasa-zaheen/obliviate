"use client";

import { Button } from "./ui/button";

function SummarizeButton() {
  const summarizeDocument = () => {
    console.log("Summarize");
  };

  return (
    <div>
      <Button
        className="w-full mt-4 cursor-pointer hover:shadow-lg active:scale-99"
        onClick={summarizeDocument}
      >
        Summarize using ChatGPT
      </Button>
    </div>
  );
}
export default SummarizeButton;
