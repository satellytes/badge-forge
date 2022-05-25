export const drawTextAlongArc = (
    context: CanvasRenderingContext2D,
    str: string,
    centerX: number,
    centerY: number,
    radius: number,
    angle: number
  ) => {
    var len = str.length,
      s,
      letterAngle;
  
    context.save();
    context.textAlign = "center";
    context.font = "30px Verdana";
    context.translate(centerX, centerY);
    context.rotate(angle + Math.PI / 2);
  
    for (var n = 0; n < len; n++) {
      s = str[n];
      letterAngle = 0.5 * (context.measureText(s).width / radius);
  
      context.rotate(letterAngle);
      context.save();
  
      context.translate(0, -radius);
      context.fillText(s, 0, 0);
      context.restore();
  
      context.rotate(letterAngle);
    }
    context.restore();
  };
  