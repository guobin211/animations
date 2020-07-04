/**
 * code.ts
 * @author GuoBin 2020-07-04
 */

export const TS_CODE = `
export class EraseComponent extends AutoCanvasComponent implements AfterViewInit {
  constructor() {
    super();
  }

  ngAfterViewInit() {
    const { canvas, ctx } = this;
    const boundingRect = canvas.getBoundingClientRect();
    const left = boundingRect.left + window.scrollX;
    const top = boundingRect.top + window.scrollY;
    canvas.style.background = "transparent";
    let touch;
    canvas.addEventListener("touchstart", (e: any) => {
      e.preventDefault();
      e.stopPropagation();
      e = e.changedTouches[0] || e.touches[0];
      touch = {
        x: e.pageX - left,
        y: e.pageY - top,
        isPressed: true,
      };
    });
    canvas.addEventListener("touchmove", (e: any) => {
      e.preventDefault();
      e.stopPropagation();
      e = e.changedTouches[0] || e.touches[0];
      if (touch.isPressed) {
        let newV = {
          x: e.pageX - left,
          y: e.pageY - top,
        };
        drawEraser(touch, newV, ctx);
        touch.x = newV.x;
        touch.y = newV.y;
      }
    });
    canvas.addEventListener("touchend", (e) => {
      e.preventDefault();
      e.stopPropagation();
      touch.isPressed = false;
      if (scratchArea(canvas, ctx) > 70) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    });
    drawLayer("/assets/img/bg.jpg", canvas).then((res) => {
      setCanvas(res, canvas, ctx);
    });
  }
}

let imageData;
let pixels: number;

function drawLayer(url: string, canvas: CanvasEl): Promise<ImageData> {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = url;
    img.onload = () => {
      const width = Math.min(canvas.width, img.width);
      const height = img.height * (width / img.width);
      resolve({
        w: width,
        h: height,
        img,
      });
    };
  });
}

function setCanvas(obj: ImageData, canvas: CanvasEl, ctx: R2D) {
  const dpr = window.devicePixelRatio || 1;

  if (obj) {
    canvas.width = obj.w * dpr;
    canvas.height = obj.h * dpr;
    canvas.style.width = obj.w + "px";
    canvas.style.height = obj.h + "px";
    ctx.scale(dpr, dpr);
    // 由于getImageData的跨域问题，计算绘制区域效果使用黑色方块代替
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // ctx.drawImage(obj.img, 0, 0, obj.w, obj.h);
    pixels = canvas.width * canvas.height;
  }
}

function drawEraser(oldV, newV, ctx) {
  ctx.save();
  ctx.globalCompositeOperation = "destination-out";
  ctx.lineWidth = 35;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(oldV.x, oldV.y);
  ctx.lineTo(newV.x, newV.y);
  ctx.stroke();
  ctx.closePath();
  ctx.restore();
}

function scratchArea(canvas: CanvasEl, ctx: R2D): number {
  let points = 0;
  imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
  for (let i = 0, len = imageData.length; i < len; i += 4) {
    if (
      imageData[i] === 0 &&
      imageData[i + 1] === 0 &&
      imageData[i + 2] === 0 &&
      imageData[i + 3] === 0
    ) {
      points++;
    }
  }
  return (points / pixels) * 100;
}
`;
