/**
 * Detection.ts 碰撞检测
 * @author GuoBin 2020-07-02
 */
import { Ball } from "../shape";
import { BaseBounds } from "../_base";

export class Detection {
  /**
   * 球体碰撞检测
   * @param ball1 Ball
   * @param ball2 Ball
   */
  static ballCollision(ball1: Ball, ball2: Ball): boolean {
    const dx = ball1.x - ball2.x;
    const dy = ball1.y - ball2.y;
    const r = ball2.radius + ball1.radius;
    return Math.pow(dx, 2) + Math.pow(dy, 2) < Math.pow(r, 2);
  }

  /**
   * 矩形墙体碰撞检测
   * @param ball Ball
   * @param wall BaseBounds
   */
  static ballWallCollision(ball: Ball, wall: BaseBounds) {
    return ball.x - ball.radius < wall.x ||
        ball.x + ball.radius > wall.x + wall.width ||
        ball.y - ball.radius < wall.y ||
        ball.y + ball.radius > wall.y + wall.height;
  }
}
