"use client";

import { createContext, useState } from "react";

export const FileContext = createContext<{
  files: any[];
  setFiles: (files: any) => void;
}>({ files: [], setFiles: () => {} });

export function FileContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [files, setFiles] = useState<any[]>([]);

  return (
    <FileContext.Provider value={{ files, setFiles }}>
      {children}
    </FileContext.Provider>
  );
}
