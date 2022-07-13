import { Theme } from "../../theme/theme";

export const drawLabel = (
  context: CanvasRenderingContext2D,
  label: string = "............",
  size: number,
  radius: number,
  angle: number,
  color: string
) => {
  label = label.length === 0 ? "............" : label;

  let len = label.length,
    s,
    letterAngle,
    totalWidth = 0,
    totalAngle = 0,
    letterSpacing = 0.65;

  context.save();
  context.textAlign = "center";
  context.font = `bold ${0.1 * size}px ${Theme.font.family.cocoGothic}`;
  context.fillStyle = color;
  context.translate(size / 2, size / 2);
  context.rotate(angle + Math.PI / 2);

  totalWidth = label
    .split("")
    .map((char) => context.measureText(char).width)
    .reduce((a, b) => a + b, 0);
  totalWidth = 2 * letterSpacing * totalWidth;
  totalAngle = totalWidth / radius;
  context.rotate(-totalAngle / 2);

  for (var n = 0; n < len; n++) {
    s = label[n];
    let letterWidth = context.measureText(s).width;
    letterAngle = letterSpacing * (letterWidth / radius);

    context.rotate(letterAngle);
    context.save();

    context.translate(0, -radius);
    context.fillText(s, 0, 0);
    context.restore();

    context.rotate(letterAngle);
  }
  context.restore();
};
