import { TestBed } from "@angular/core/testing";

import { NgxLocalforageService } from "./ngx-localforage.service";

describe("NgxLocalforageService", () => {
  let service: NgxLocalforageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxLocalforageService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
