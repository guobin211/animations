import { AfterViewInit, Component } from "@angular/core";
import { AutoCanvasComponent } from "../../shared/auto-canvas/auto-canvas.component";
import { AnimateFn } from "../../../typings";
import { Atom } from "../../core/shape/Atom";
import { TS_CODE } from "./code";

@Component({
  selector: "app-barrage",
  templateUrl: "./barrage.component.html",
  styles: [],
})
export class BarrageComponent extends AutoCanvasComponent implements AfterViewInit {
  constructor() {
    super();
    this.tsCode = TS_CODE;
  }

  ngAfterViewInit() {
    this.useAnimateFn(animate);
  }
}

const animate: AnimateFn = (canvas, context, callback) => {
  const words = [
    "测试文本1",
    "测试文本2",
    "测试文本3",
    "测试文本4",
    "测试文本5",
    "测试文本6",
    "测试文本7",
    "测试文本8",
    "测试文本9",
    "测试文本10",
  ];
  const CW = canvas.width;
  const CH = canvas.height;
  canvas.style.background = "#000";
  const atoms = words.map(
    (word) =>
      new Atom({
        x: rand(200, 600),
        y: rand(50, 200),
        text: word,
        textColor: "#fff",
        fontSize: Math.round(Math.random() * 40 + 10),
        speed: rand(1, 3),
        isNeedBg: true,
      })
  );

  function rand(n, m) {
    return Math.random() * (m - n) + n;
  }

  function draw() {
    atoms.forEach((atom) => {
      atom.x -= atom.speed;
      if (atom.x < -atom.width) {
        atom.x = rand(200, 600);
        atom.y = rand(50, 250);
      }
      atom.draw(context);
    });
  }

  function start() {
    callback(window.requestAnimationFrame(start));
    context.clearRect(0, 0, CW, CH);
    draw();
  }

  start();
};
