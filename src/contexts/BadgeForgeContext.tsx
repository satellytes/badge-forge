import { createContext, ReactNode, RefObject, useRef, useState } from "react";

interface color {
  r: number,
  g: number,
  b: number,
  a?: number
}

interface BadgeForgeContextState {
  // Canvas
  canvasRef: RefObject<HTMLCanvasElement>;
  canvasWidth: number;
  canvasHeight: number;

  // Donut properties
  donutColor: color;
  innerRadius: number;
  setDonutColor: (color: color) => void;
  setInnerRadius: (radius: number) => void;

  // File Image
  selectedFile: File | null;
  setSelectedFile: (file: File) => void;

  // Label Text
  label: string;
  labelColor: color;
  setLabel: (label: string) => void;
  setLabelColor: (color: color) => void; 
}
export const BadgeForgeContext = createContext({} as BadgeForgeContextState);

interface BadgeForgeContextProviderProps {
  children?: ReactNode;
}

export const BadgeForgeContextProvider = ({
  children,
}: BadgeForgeContextProviderProps) => {
  const canvasWidth = 1024;
  const canvasHeight = canvasWidth;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [label, setLabel] = useState<string>("");
  const [donutColor, setDonutColor] = useState<color>({ r: 121, g: 75, b: 196 });
  const [innerRadius, setInnerRadius] = useState<number>(canvasWidth/2-165);
  const [labelColor, setLabelColor] = useState<color>({r:1,g:1,b:1})
  
  return (
    <BadgeForgeContext.Provider
      value={{
        canvasRef,
        canvasHeight,
        canvasWidth,
        donutColor,
        innerRadius,
        setDonutColor,
        setInnerRadius,
        selectedFile,
        setSelectedFile,
        label,
        setLabel,
        labelColor,
        setLabelColor
      }}
    >
      {children}
    </BadgeForgeContext.Provider>
  );
};
