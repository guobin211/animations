import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy } from "@angular/core";
import { CanvasHelper } from "../../helper/CanvasHelper";
import { tsCode } from "./code";

@Component({
  selector: "app-canvas-context",
  templateUrl: "./canvas-context.component.html",
  styleUrls: ["./canvas-context.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CanvasContextComponent extends CanvasHelper implements AfterViewInit, OnDestroy {
  // BaseCanvas ngOnDestroy() 清除动画
  anim: number;
  tsCode = tsCode;
  constructor() {
    super();
  }

  ngAfterViewInit(): void {
    loadAnim(this.canvas, this.ctx.ctx, (n) => (this.anim = n));
  }

  ngOnDestroy(): void {
    window.cancelAnimationFrame(this.anim);
  }
}

function loadAnim(
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D,
  callback: (n: number) => void
) {
  const w = canvas.width,
    h = canvas.height;
  const words = `0123456789qwertyuiopasdfghjklzxcvbnm,./;\\[]QWERTYUIOP{}ASDFGHJHJKL:ZXCVBBNM<>?`;
  const clearColor = "rgba(0,0,0,.1)",
    wordColor = "#33ff33",
    wordsArr = words.split(""),
    fontSize = 16,
    col = w / fontSize;
  const drops: number[] = [];
  for (let i = 0; i < col; i++) {
    drops[i] = 1;
  }
  canvas.style.background = "#000";

  function draw() {
    context.save();
    context.fillStyle = wordColor;
    context.font = fontSize + "px arial";
    // 生成文字元素
    for (let i = 0; i < drops.length; i++) {
      const text = wordsArr[Math.floor(Math.random() * wordsArr.length)];
      context.fillText(text, i * fontSize, drops[i] * fontSize);
      if (drops[i] * fontSize > h && Math.random() > 0.98) {
        drops[i] = 0;
      }
      drops[i]++;
    }
    // 重置state
    context.restore();
  }

  (function animate() {
    const n = window.requestAnimationFrame(animate);
    callback(n);
    context.fillStyle = clearColor;
    context.clearRect(0, 0, w, h);
    draw();
  })();
}
