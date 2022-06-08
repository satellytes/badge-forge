export const drawDonut = (
  context: CanvasRenderingContext2D,
  size: number,
  donutStroke: number,
  angle: number,
  color: string
) => {

  //var gradient = context.createLinearGradient(size/2, size/2, size/2+Math.cos(rot)*size, size/2+Math.sin(rot)*size);
  var gradient = context.createLinearGradient(0, 0, size, 0);
  gradient.addColorStop(0, `${color}FF`);
  gradient.addColorStop(0.6, `${color}09`);
  gradient.addColorStop(0.75, `${color}00`);
  context.save();
  context.translate(size / 2, size / 2);
  context.rotate(angle);
  context.translate(-size / 2, -size / 2);
  context.lineWidth = donutStroke * 2;
  context.strokeStyle = gradient;
  context.beginPath();
  context.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
  context.stroke();
  context.restore();
};
