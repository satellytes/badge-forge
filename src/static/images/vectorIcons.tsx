interface iconProps {
  size: number;
  fill: string;
  strokeColor: string;
  strokeWidth: number;
}

const Upload = ({
  size,
  fill = "none",
  strokeColor = "black",
  strokeWidth = 2,
}: iconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke={strokeColor}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="17 8 12 3 7 8"></polyline>
      <line x1="12" y1="3" x2="12" y2="15"></line>
    </svg>
  );
};
export { Upload };
