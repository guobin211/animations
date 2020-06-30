import { Injectable } from "@angular/core";
import { LocalForage } from "./localforage";

@Injectable({
  providedIn: "root",
})
export class NgxLocalService {
   private $localStorage: LocalForage;

  get localStorage(): LocalForage {
    return this.$localStorage;
  }

  constructor() {
    if (!this.$localStorage) {
      const local = (window as any).localforage;
      if (!local) {
        this.$asyncLoad()
        .then()
        .catch((e) => console.error(e));
      } else {
        this.$localStorage = local;
      }
    }
  }

  private $asyncLoad(): Promise<LocalForage> {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src =
        "https://raw.githubusercontent.com/localForage/localForage/master/dist/localforage.min.js";
      script.onerror = (e) => reject(e);
      script.onload = () => {
        const local = (window as any).localforage;
        if (local) {
          this.$localStorage = local;
          resolve(local);
        } else {
          reject("window.localforage not exist");
        }
      };
      document.body.appendChild(script);
    });
  }
}
