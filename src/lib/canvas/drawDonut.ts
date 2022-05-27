export const drawDonut = (
  context: CanvasRenderingContext2D,
  size: number,
  innerRadius: number,
  color: { r: number; b: number; g: number }
) => {
  const { r, g, b } = color;
  context.save();
  var gradient = context.createLinearGradient(0, 0, size, 0);
  gradient.addColorStop(0, `rgba(${r},${g},${b},1.0)`);
  gradient.addColorStop(0.3, `rgba(${r},${g},${b},0.3)`);
  gradient.addColorStop(0.4, `rgba(${r},${g},${b},0.0)`);
  context.fillStyle = gradient;
  context.fillRect(0,0,size,size);
  context.restore();
  
  context.save();
  context.beginPath();
  context.arc(size/2, size/2,innerRadius,0,Math.PI);
  context.fillStyle = "black";
  context.fill();
  context.clip();
  context.restore();
};
