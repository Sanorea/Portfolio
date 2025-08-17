import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-i-am',
  imports: [CommonModule],
  templateUrl: './i-am.html',
  styleUrl: './i-am.scss'
})
export class IAm {
  @Input() translations!: any;
}
