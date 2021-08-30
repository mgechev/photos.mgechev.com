import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhotoComponent } from './photo.component';

@NgModule({
  declarations: [PhotoComponent],
  exports: [PhotoComponent],
  imports: [CommonModule],
})
export class PhotoModule {}
