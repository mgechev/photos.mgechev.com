import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoComponent {
  @Input() src = '';
  @Input() width = 0;
  @Input() height = 0;
  @Input() alt = '';

  loading = true;

  onError() {
    this.loading = false;
  }

  onLoad() {
    this.loading = false;
  }
}
