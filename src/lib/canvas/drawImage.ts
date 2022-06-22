export const drawImage = (
  context: CanvasRenderingContext2D,
  image: HTMLImageElement,
  dx: number,
  dy: number
) => {
  const hRatio = context.canvas.width / image.width;
  const vRatio = context.canvas.height / image.height;
  const ratio = Math.min(hRatio, vRatio);
  const shiftX = (context.canvas.width - image.width * ratio) / 2;
  const shiftY = (context.canvas.height - image.height * ratio) / 2;

  // crop to circle
  context.beginPath();
  context.arc(
    context.canvas.width / 2,
    context.canvas.height / 2,
    context.canvas.width / 2,
    0,
    Math.PI * 2
  );
  context.clip();

  context.save();
  context.fillStyle = "black";
  context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  context.restore();

  context.drawImage(
    image,
    dx,
    dy,
    image.width,
    image.height,
    shiftX,
    shiftY,
    image.width * ratio,
    image.height * ratio
  );
};
