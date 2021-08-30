import { ChangeDetectorRef, Component } from '@angular/core';

const ratio = 922.22 / 1498.19;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  year = new Date().getFullYear();

  constructor(private _cdr: ChangeDetectorRef) {}

  get imageWidth() {
    const width = vw(90);
    const height = vh(70);
    const calculatedWidth = width * ratio;
    if (calculatedWidth > height) {
      return height / ratio;
    }
    return width;
  }

  get imageHeight() {
    return this.imageWidth * ratio;
  }

  ngOnInit() {
    window.onresize = () => this._cdr.detectChanges();
  }

  ngOnDestroy() {
    window.onresize = null;
  }
}

const vw = (v: number) => {
  const w = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
  return (v * w) / 100;
};

const vh = (v: number) => {
  const h = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  );
  return (v * h) / 100;
};
