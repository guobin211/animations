import { AfterViewInit, Component, OnDestroy, OnInit } from "@angular/core";
import { CanvasHelper } from "../../helper/CanvasHelper";
import { Ball } from "../../core/shape";
import { Point } from "@angular/cdk/drag-drop";
import { Colors } from "../../core/utils";
import { TS_CODE } from "./code";

@Component({
  selector: "app-ball-anim",
  templateUrl: "./ball-anim.component.html",
})
export class BallAnimComponent extends CanvasHelper implements AfterViewInit, OnDestroy {
  tsCode = TS_CODE;

  constructor() {
    super();
  }

  ngAfterViewInit() {
    this.animate(this.canvas, this.ctx.ctx, (n) => (this.anim = n));
  }

  ngOnDestroy(): void {
    window.cancelAnimationFrame(this.anim);
  }

  animate(canvas, context, callback) {
    const balls: Ball[] = [],
      numBall = 40,
      long = 85,
      bounce = -1;
    for (let i = 0; i < numBall; i++) {
      const radius = Math.random() * 5 + 5;
      const ball = new Ball({
        radius,
        color: Colors.white,
        mass: Math.random() * 5 + 2,
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.random() * 6 - 3,
        vy: Math.random() * 6 - 3,
      });
      balls.push(ball);
    }
    canvas.style.background = Colors.lightTeal;
    context.strokeStyle = Colors.white;

    /**
     * 绘制两个球之间的连线,最远间距为long
     * @param ball1 Ball
     * @param ball2 Ball
     */
    function drawLine(ball1: Ball, ball2: Ball) {
      const dx = ball1.x - ball2.x,
        dy = ball1.y - ball2.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < long) {
        context.save();
        context.beginPath();
        context.moveTo(ball1.x, ball1.y);
        context.lineTo(ball2.x, ball2.y);
        context.closePath();
        context.stroke();
        context.restore();
      }
    }

    // 动画函数
    function drawAnim() {
      const n = window.requestAnimationFrame(drawAnim);
      callback(n);
      context.clearRect(0, 0, canvas.width, canvas.height);
      // 动画动作
      balls.forEach(move);
      for (let i = 0, len = numBall - 1; i < len; i++) {
        const ballA = balls[i];
        for (let j = i + 1; j < numBall; j++) {
          const ballB = balls[j];
          // checkCollision(ballA, ballB);
          drawLine(ballA, ballB);
        }
      }
      // 绘制球体
      balls.forEach((b) => b.draw(context));
    }

    // 旋转函数
    function rotate(
      x: number,
      y: number,
      sin: number,
      cos: number,
      reverse: boolean = false
    ): Point {
      return {
        x: reverse ? x * cos + y * sin : x * cos - y * sin,
        y: reverse ? y * cos - x * sin : y * cos + x * sin,
      };
    }

    /**
     * 球体位置运动
     * @param ball Ball
     */
    function move(ball: Ball) {
      ball.x += ball.vx;
      ball.y += ball.vy;
      checkWall(ball);
    }

    /**
     * 墙体碰撞边界检测
     * @param ball Ball
     */
    function checkWall(ball: Ball) {
      if (ball.x + ball.radius > canvas.width) {
        ball.x = canvas.width - ball.radius;
        ball.vx *= bounce;
      } else if (ball.x - ball.radius < 0) {
        ball.x = ball.radius;
        ball.vx *= bounce;
      }
      if (ball.y + ball.radius > canvas.height) {
        ball.y = canvas.height - ball.radius;
        ball.vy *= bounce;
      } else if (ball.y - ball.radius < 0) {
        ball.y = ball.radius;
        ball.vy *= bounce;
      }
    }

    /**
     * 球体碰撞检测
     * @param ball1 Ball
     * @param ball2 Ball
     */
    function checkCollision(ball1: Ball, ball2: Ball) {
      const dx = ball1.x - ball2.x,
        dy = ball1.y - ball2.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < ball1.radius + ball2.radius) {
        const angle = Math.atan2(dy, dx);
        const sin = Math.sin(angle),
          cos = Math.cos(angle);
        // rotate ball1 position
        const pos1: Point = { x: 0, y: 0 };
        // rotate ball2 position
        const pos2 = rotate(dx, dy, sin, cos, true);
        // rotate ball1 velocity
        const vel1 = rotate(ball1.vx, ball1.vy, sin, cos, true);
        // rotate ball2 velocity
        const vel2 = rotate(ball2.vx, ball2.vy, sin, cos, true);
        // collision reaction
        const vxTotal = vel1.x - vel2.x;
        vel1.x =
          ((ball1.mass - ball2.mass) * vel1.x + 2 * ball2.mass * vel2.x) /
          (ball1.mass + ball2.mass);
        vel2.x = vxTotal + vel1.x;
        // update position - to avoid objects becoming stuck together
        const absV = Math.abs(vel1.x) + Math.abs(vel2.x);
        const overLop = ball1.radius + ball2.radius - Math.abs(pos1.x - pos2.x);
        // update position
        pos1.x += (vel1.x / absV) * overLop;
        pos2.x += (vel2.x / absV) * overLop;
        // rotate everything back
        const pos1f = rotate(pos1.x, pos1.y, sin, cos, false);
        const pos2f = rotate(pos2.x, pos2.y, sin, cos, false);
        // adjust position to actual screen position
        ball2.x = ball1.x + pos2f.x;
        ball2.y = ball1.y + pos2f.y;
        ball1.x = ball1.x + pos1f.x;
        ball1.y = ball1.y + pos1f.y;
        // rotate velocity back
        const vel1F = rotate(vel1.x, vel1.y, sin, cos, false);
        const vel2F = rotate(vel2.x, vel2.y, sin, cos, false);
        ball1.vx = vel1F.x;
        ball1.vy = vel1F.y;
        ball2.vx = vel2F.x;
        ball2.vy = vel2F.y;
      }
    }

    drawAnim();
  }
}
