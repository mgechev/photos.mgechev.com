import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhotoModule } from '../photo/photo.module';
import { PhotoGridComponent } from './photo-grid.component';

@NgModule({
  declarations: [PhotoGridComponent],
  exports: [PhotoGridComponent],
  imports: [PhotoModule, CommonModule],
})
export class PhotoGridModule {}
