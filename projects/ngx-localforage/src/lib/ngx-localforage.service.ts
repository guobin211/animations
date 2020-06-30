import { Injectable } from "@angular/core";
import { NgxLocalforageModule } from "./ngx-localforage.module";
import * as localforage from "localforage";

@Injectable({
  providedIn: NgxLocalforageModule,
})
export class NgxLocalforageService {
  public localStorage: typeof localforage;

  constructor() {
    if (!(window as any).localforage) {
      this.asyncLoad()
        .then()
        .catch((e) => console.error(e));
    }
  }

  private asyncLoad(): Promise<typeof localforage> {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src =
        "https://raw.githubusercontent.com/localForage/localForage/master/dist/localforage.min.js";
      script.onerror = (e) => reject(e);
      script.onload = () => {
        const local = (window as any).localforage;
        if (local) {
          this.localStorage = local;
          resolve(local);
        } else {
          reject("window.localforage not exist");
        }
      };
      document.body.appendChild(script);
    });
  }
}
