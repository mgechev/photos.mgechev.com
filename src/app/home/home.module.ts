import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PhotoComponent } from '../photo/photo.component';
import { PhotoModule } from '../photo/photo.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, PhotoModule, HomeRoutingModule],
})
export class HomeModule {}
