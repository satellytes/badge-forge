import { createContext, ReactNode, RefObject, useRef, useState } from "react";

interface BadgeForgeContextState {
  // Canvas
  canvasRef: RefObject<HTMLCanvasElement>;
  canvasWidth: number;
  canvasHeight: number;

  // File Image
  selectedFile: File | null;
  setSelectedFile: (file: File) => void;

  // Label Text
  label: string;
  setLabel: (label: string) => void;
}
export const BadgeForgeContext = createContext({} as BadgeForgeContextState);

interface BadgeForgeContextProviderProps {
  children?: ReactNode;
}

export const BadgeForgeContextProvider = ({
  children,
}: BadgeForgeContextProviderProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [label, setLabel] = useState<string>("");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasWidth = 512;
  const canvasHeight = 512;

  return (
    <BadgeForgeContext.Provider
      value={{
        canvasRef,
        canvasHeight,
        canvasWidth,
        selectedFile,
        setSelectedFile,
        label,
        setLabel,
      }}
    >
      {children}
    </BadgeForgeContext.Provider>
  );
};
