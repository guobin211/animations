import { AfterViewInit, Component, OnInit } from "@angular/core";
import { AutoCanvasComponent } from "../../shared/auto-canvas/auto-canvas.component";
import { CallBackNum, R2D } from "../../../typings";
import { TS_CODE } from "./code";

interface ImageObject {
  sun: HTMLImageElement;
  moon: HTMLImageElement;
  earth: HTMLImageElement;
}

@Component({
  selector: "app-basic-animate",
  templateUrl: "./basic-animate.component.html",
  styleUrls: ["./basic-animate.component.scss"],
})
export class BasicAnimateComponent extends AutoCanvasComponent implements OnInit, AfterViewInit {
  image: ImageObject;

  constructor() {
    super();
    this.tsCode = TS_CODE;
  }

  ngOnInit(): void {
    this.image = init();
  }

  ngAfterViewInit() {
    this.canvas.style.background = "#000";
    loadAnimate(this.ctx, (n) => (this.anim = n), this.image);
  }
}

/**
 * 加载image资源
 */
function init() {
  const sun = new Image();
  const moon = new Image();
  const earth = new Image();
  sun.src = "https://mdn.mozillademos.org/files/1456/Canvas_sun.png";
  moon.src = "https://mdn.mozillademos.org/files/1443/Canvas_moon.png";
  earth.src = "https://mdn.mozillademos.org/files/1429/Canvas_earth.png";
  return { sun, moon, earth };
}

/**
 * 加载动画
 * @param ctx R2D
 * @param call CallBackNum requestAnimationFrame回调
 * @param img ImageObject
 */
function loadAnimate(ctx: R2D, call: CallBackNum, img: ImageObject) {
  const { earth, moon, sun } = img;

  // 绘画逻辑
  function draw() {
    ctx.save();
    ctx.translate(100, 100);
    ctx.globalCompositeOperation = "destination-over";
    ctx.clearRect(0, 0, 300, 300);
    ctx.fillStyle = "rgba(0,0,0,0.4)";
    ctx.strokeStyle = "rgba(0,153,255,0.4)";
    ctx.save();
    ctx.translate(150, 150);
    // Earth
    const time = new Date();
    ctx.rotate(
      ((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds()
    );
    ctx.translate(105, 0);
    ctx.fillRect(0, -12, 50, 24); // Shadow
    ctx.drawImage(earth, -12, -12);
    // Moon
    ctx.save();
    ctx.rotate(
      ((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds()
    );
    ctx.translate(0, 28.5);
    ctx.drawImage(moon, -3.5, -3.5);
    ctx.restore();
    ctx.restore();
    ctx.beginPath();
    ctx.arc(150, 150, 105, 0, Math.PI * 2, false);
    ctx.stroke();
    ctx.drawImage(sun, 0, 0, 300, 300);
    ctx.restore();
  }

  // loop动画
  function animate() {
    const n = window.requestAnimationFrame(animate);
    call(n);
    draw();
  }

  animate();
}
