import { Component, Input } from '@angular/core';
import { GridConfig } from './config';
import { Photo } from './photo';

@Component({
  selector: 'app-photo-grid',
  templateUrl: './photo-grid.component.html',
  styleUrls: ['./photo-grid.component.css'],
})
export class PhotoGridComponent {
  private _columnWidth = 0;

  margin = 0;

  @Input() set config(config: GridConfig) {
    const { columns, photos, margin } = config;
    this._columnWidth = config.columnWidth;
    this.margin = margin;

    let currentColumn = 0;
    this.grid = [];
    for (let i = 0; i < columns; i++) {
      this.grid.push([]);
    }
    photos.forEach((photo) => {
      currentColumn %= columns;
      this.grid[currentColumn] = this.grid[currentColumn] || [];
      const column = findColumn(this.grid);
      this.grid[column].push(this._createGridPhoto(photo));
    });
    console.log(this.grid);
  }

  grid: Photo[][] = [];

  _createGridPhoto(photo: Photo) {
    const gridPhoto: Photo = {
      alt: photo.alt,
      src: photo.src,
      width: photo.width,
      height: photo.height,
    };
    if (gridPhoto.width > this._columnWidth) {
      gridPhoto.height =
        gridPhoto.height * (this._columnWidth / gridPhoto.width);
      gridPhoto.width = this._columnWidth;
    }
    return gridPhoto;
  }
}

const findColumn = (grid: Photo[][]) => {
  let minColumnIdx = 0;
  let minColumn = Infinity;
  grid.forEach((column, idx) => {
    let height = 0;
    column.forEach((photo) => {
      height += photo.height;
    });
    if (height < minColumn) {
      minColumnIdx = idx;
      minColumn = height;
    }
  });
  return minColumnIdx;
};
