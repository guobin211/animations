import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "lib-ngx-prism",
  templateUrl: "./ngx-prism.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxPrismComponent implements OnInit {
  @Input() src: string;
  @Input() code: string;

  formatCode: string;

  ngOnInit(): void {
    let res = "";
    if (this.src) {
      fetch(this.src)
        .then((resp) => resp.text())
        .then((data) => {
          res = (window as any).Prism.highlight(
            data,
            (window as any).Prism.languages.typescript,
            "typescript"
          );
          this.formatCode = res;
          return;
        });
    }

    if (this.code) {
      res = (window as any).Prism.highlight(
        this.code,
        (window as any).Prism.languages.typescript,
        "typescript"
      );
      this.formatCode = res;
    }
  }
}
