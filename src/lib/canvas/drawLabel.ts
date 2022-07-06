export const drawLabel = (
  context: CanvasRenderingContext2D,
  label: string = "............",
  size: number,
  radius: number,
  angle: number,
  color: string
) => {
  label = label.length === 0 ? "............" : label;

  var len = label.length,
    s,
    letterAngle;

  context.save();
  context.textAlign = "center";
  context.font = `bold ${0.1 * size}px CocoGothic, Helvetica, sans-serif`;
  context.fillStyle = color;
  context.translate(size / 2, size / 2);
  context.rotate(angle + Math.PI / 2);

  for (var n = 0; n < len; n++) {
    s = label[n];
    letterAngle = 0.65 * (context.measureText(s).width / radius);

    context.rotate(letterAngle);
    context.save();

    context.translate(0, -radius);
    context.fillText(s, 0, 0);
    context.restore();

    context.rotate(letterAngle);
  }
  context.restore();
};
