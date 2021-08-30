import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotosRoutingModule } from './photos-routing.module';
import { PhotosComponent } from './photos.component';
import { PhotoGridModule } from '../photo-grid/photo-grid.module';

@NgModule({
  declarations: [PhotosComponent],
  imports: [CommonModule, PhotoGridModule, PhotosRoutingModule],
})
export class PhotosModule {}
