import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  year = new Date().getFullYear();

  constructor(private _cdr: ChangeDetectorRef) {}

  get imageWidth() {
    return vw(60);
  }

  get imageHeight() {
    return (this.imageWidth * 922.22) / 1498.19;
  }

  ngOnInit() {
    window.onresize = () => this._cdr.detectChanges();
  }

  ngOnDestroy() {
    window.onresize = null;
  }
}

const vw = (v: number) => {
  const h = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
  return (v * h) / 100;
};
