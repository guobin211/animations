import { AfterViewInit, Component, OnDestroy } from "@angular/core";
import { CanvasHelper } from "../../helper/CanvasHelper";
import { Ball } from "../../core/shape";
import { tsCode } from "./code";

@Component({
  selector: "app-billiards",
  templateUrl: "./billiards.component.html",
})
export class BilliardsComponent extends CanvasHelper implements AfterViewInit, OnDestroy {
  tsCode = tsCode;

  constructor() {
    super();
  }

  reset() {
    window.cancelAnimationFrame(this.anim);
    this.animate(this.canvas, this.ctx.ctx, (n) => (this.anim = n));
  }

  ngAfterViewInit(): void {
    this.animate(this.canvas, this.ctx.ctx, (n) => (this.anim = n));
  }

  ngOnDestroy(): void {
    window.cancelAnimationFrame(this.anim);
  }

  animate(canvas, context, callback) {
    const ball0 = new Ball({
        radius: 80,
        mass: 2,
        x: 100,
        y: 100,
        vx: Math.random() * 10 - 5,
        vy: Math.random() * 10 - 5,
        color: "#00ff00",
      }),
      ball1 = new Ball({
        radius: 40,
        mass: 1,
        x: 300,
        y: 300,
        vx: Math.random() * 10 - 5,
        vy: Math.random() * 10 - 5,
      }),
      bounce = -1;

    // 动画启动
    function drawAnim() {
      const n = window.requestAnimationFrame(drawAnim);
      callback(n);
      // 清除画布
      // context.clearRect(0, 0, canvas.width, canvas.height);
      // 用透明度fillRect添加长尾效果
      context.save();
      context.fillStyle = "rgba(255,255,255,0.3)";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.restore();
      ball0.x += ball0.vx;
      ball0.y += ball0.vy;
      ball1.x += ball1.vx;
      ball1.y += ball1.vy;
      // 检测碰撞
      ballCollision(ball0, ball1);
      wallCollision(ball0);
      wallCollision(ball1);
      // 绘制
      ball0.draw(context);
      ball1.draw(context);
    }

    // 墙体碰撞检测
    function wallCollision(ball: Ball) {
      if (ball.x + ball.radius > canvas.width) {
        ball.x = canvas.width - ball.radius;
        ball.vx *= bounce;
      } else if (ball.x < ball.radius) {
        ball.x = ball.radius;
        ball.vx *= bounce;
      }
      if (ball.y + ball.radius > canvas.height) {
        ball.y = canvas.height - ball.radius;
        ball.vy *= bounce;
      } else if (ball.y < ball.radius) {
        ball.y = ball.radius;
        ball.vy *= bounce;
      }
    }

    // 球体碰撞检测
    function ballCollision(ballA, ballB) {
      const dx = ballA.x - ballB.x,
        dy = ballA.y - ballB.y,
        dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < ballA.radius + ballB.radius) {
        const vxTotal = ballA.vx - ballB.vx;
        const vxAFinal =
          ((ballA.mass - ballB.mass) * ballA.vx + 2 * ballB.mass * ballB.vx) /
          (ballA.mass + ballB.mass);
        const vxBFinal = vxTotal + vxAFinal;
        ballA.vx = vxAFinal;
        ballB.vx = vxBFinal;
        ballA.x += ballA.vx;
        ballB.x += ballB.vx;
        const vyTotal = ballA.vy - ballB.vy;
        const vyAFinal =
          ((ballA.mass - ballB.mass) * ballA.vy + 2 * ballB.mass * ballB.vy) /
          (ballA.mass + ballB.mass);
        const vyBFinal = vyTotal + vyAFinal;
        ballA.vy = vyAFinal;
        ballB.vy = vyBFinal;
        ballA.y += ballA.vy;
        ballB.y += ballB.vy;
      }
    }

    drawAnim();
  }
}
