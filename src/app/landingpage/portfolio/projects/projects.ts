import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [NgClass],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  standalone: true,
})
export class Projects {
  @Input() title!: string;
  @Input() skills!: string;
  @Input() description!: string;
  @Input() flipped: boolean = false;
  @Input() live!: string;
  @Input() git!: string;
  @Input() translations!: any;

}
