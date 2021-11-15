import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { GridConfig } from '../photo-grid/config';
import { Photo } from '../photo-grid/photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent implements OnInit, OnDestroy {
  config: GridConfig = config;

  constructor(private _cdr: ChangeDetectorRef) {}

  ngOnInit() {
    window.onresize = () => {
      this.config = JSON.parse(JSON.stringify(config));
      this.config.columnWidth = vw(25);
      this._cdr.detectChanges();
    };
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

const config: GridConfig = {
  columnWidth: vw(25),
  columns: 3,
  margin: 10,
  photos: [
    {
      alt: 'Painted ladies in San Francisco, California',
      height: 923,
      width: 1500,
      src: '/assets/painted-ladies.jpg',
    },
    {
      alt: 'Sunset over the Financial District in San Francisco, California',
      height: 1033,
      width: 1500,
      src: '/assets/fidi-sunset.jpg',
    },
    {
      alt: 'View from Russian Hill in San Francisco, California',
      height: 1500,
      width: 1000,
      src: '/assets/russian.jpg',
    },
    {
      alt: 'Nob Hill in San Francisco, California',
      height: 1000,
      width: 1500,
      src: '/assets/nob-hill.jpg',
    },
    {
      alt: 'Butterfly beach in Santa Barbara, California',
      height: 1000,
      width: 1500,
      src: '/assets/butterfly.jpg',
    },
    {
      alt: 'Fireworks over the Painted ladies in San Francisco, California',
      height: 1000,
      width: 1500,
      src: '/assets/painted-ladies-fireworks.jpg',
    },
    {
      alt: 'Palace of Fine Arts in San Francisco, California',
      height: 1000,
      width: 1500,
      src: '/assets/palace.jpg',
    },
    {
      alt: 'Ferry building in San Francisco, California',
      height: 1000,
      width: 1500,
      src: '/assets/ferry.jpg',
    },
    {
      alt: 'Golden Gate Bridge in San Francisco, California',
      height: 1000,
      width: 1500,
      src: '/assets/golden.jpg',
    },
    {
      alt: 'The top of the Broadway tunnel in San Francisco, California',
      height: 1000,
      width: 1500,
      src: '/assets/broadway.jpg',
    },
  ],
};
