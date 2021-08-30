import { Photo } from './photo';

export interface GridConfig {
  photos: Photo[];
  columns: number;
  columnWidth: number;
  margin: number;
}
