export const TS_CODE = `
let waterLine = 250,   // 水面高度
    waterTop = 50,     // 水波峰值
    angle = 0,
    speed = 0,         // 移动速度
    lineNum = 500,     //线条数目
    color = "#4411ff",
    speedChange = 0.03,
    angleChange = 0.005;
const animate: AnimateFn = (canvas, context, callback) => {
  function draw(angle: number) {
    for (let i = 0; i < lineNum; i++) {
      const point = {
        x: i,
        y: waterLine + Math.sin(angle + speed) * waterTop
      };
      context.beginPath();
      context.lineWidth = 1;
      context.strokeStyle = color;
      context.moveTo(point.x, 500);
      context.lineTo(point.x, point.y);
      context.stroke();
      angle += angleChange;
    }
    speed += speedChange;
  }

  function start() {
    callback(window.requestAnimationFrame(start));
    context.clearRect(0, 0, canvas.width, canvas.height);
    draw(angle);
  }

  start();
};

`;
