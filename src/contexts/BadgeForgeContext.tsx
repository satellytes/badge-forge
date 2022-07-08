import { createContext, ReactNode, RefObject, useRef, useState } from "react";
import { useTheme } from "styled-components";

interface BadgeForgeContextState {
  // Canvas
  canvasRef: RefObject<HTMLCanvasElement>;
  canvasWidth: number;
  canvasHeight: number;

  // Donut properties
  donutColor: string;
  donutStroke: number;
  angle: number;
  setDonutColor: (color: string) => void;
  setDonutStroke: (radius: number) => void;
  setAngle: (angle: number) => void;

  // File Image
  selectedFile: File | null;
  setSelectedFile: (file: File) => void;

  // Label Text
  label: string;
  labelColor: string;
  setLabel: (label: string) => void;
  setLabelColor: (color: string) => void;
}
export const BadgeForgeContext = createContext({} as BadgeForgeContextState);

interface BadgeForgeContextProviderProps {
  children?: ReactNode;
}

export const BadgeForgeContextProvider = ({
  children,
}: BadgeForgeContextProviderProps) => {
  const { colors } = useTheme();
  const canvasWidth = 800;
  const canvasHeight = canvasWidth;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [label, setLabel] = useState<string>("");
  const [donutColor, setDonutColor] = useState<string>(colors.purple400);
  const [donutStroke, setDonutStroke] = useState<number>(0.175 * canvasWidth);
  const [labelColor, setLabelColor] = useState<string>(colors.gray50);
  const [angle, setAngle] = useState<number>(-1);

  return (
    <BadgeForgeContext.Provider
      value={{
        canvasRef,
        canvasHeight,
        canvasWidth,
        donutColor,
        donutStroke,
        setDonutColor,
        setDonutStroke,
        selectedFile,
        setSelectedFile,
        label,
        setLabel,
        labelColor,
        setLabelColor,
        angle,
        setAngle,
      }}
    >
      {children}
    </BadgeForgeContext.Provider>
  );
};
