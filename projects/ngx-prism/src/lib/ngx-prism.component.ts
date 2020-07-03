import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "lib-ngx-prism",
  templateUrl: "./ngx-prism.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxPrismComponent implements OnInit {
  @Input() lang: string;
  @Input() code: string;

  formatCode = "";
  languageClass = "language-typescript";
  ngOnInit(): void {
    let res = "";
    switch (this.lang) {
      case "ts":
        res = (window as any).Prism.highlight(
            this.code,
            (window as any).Prism.languages.typescript,
            "typescript"
        );
        this.formatCode = res;
        break;
      case "css":
        this.languageClass = "language-css";
        res = (window as any).Prism.highlight(
            this.code,
            (window as any).Prism.languages.css,
            "css"
        );
        this.formatCode = res;
        break;
      case "html":
        this.languageClass = "language-html";
        res = (window as any).Prism.highlight(
            this.code,
            (window as any).Prism.languages.html,
            "html"
        );
        this.formatCode = res;
        break;
      default:
        res = (window as any).Prism.highlight(
            this.code,
            (window as any).Prism.languages.typescript,
            "typescript"
        );
        this.formatCode = res;
        break;
    }
  }
}
