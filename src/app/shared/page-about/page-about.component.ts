import { AfterViewInit, Component } from "@angular/core";

@Component({
  selector: "app-page-about",
  templateUrl: "./page-about.component.html",
  styleUrls: ["./page-about.component.scss"],
})
export class PageAboutComponent implements AfterViewInit {
  constructor() {}

  ngAfterViewInit() {
    const animation1 = (window as any).lottie.loadAnimation({
      container: document.getElementById('lottie1'),
      path: 'assets/data/26219-new-idea.json',
      renderer: 'svg/canvas/html',
      loop: true,
      autoplay: true,
      name: "Lottie Animate",
    });
    const animation2 = (window as any).lottie.loadAnimation({
      container: document.getElementById('lottie2'),
      path: 'assets/data/25546-jumping-feelings.json',
      renderer: 'svg/canvas/html',
      loop: true,
      autoplay: true,
      name: "Lottie Animate",
    });
    const animation3 = (window as any).lottie.loadAnimation({
      container: document.getElementById('lottie3'),
      path: 'assets/data/26131-defend-yourself-from-covid-19.json',
      renderer: 'svg/canvas/html',
      loop: true,
      autoplay: true,
      name: "Lottie Animate",
    });
    const animation4 = (window as any).lottie.loadAnimation({
      container: document.getElementById('lottie4'),
      path: 'assets/data/26238-delivery-man.json',
      renderer: 'svg/canvas/html',
      loop: true,
      autoplay: true,
      name: "Lottie Animate",
    });
  }
}
