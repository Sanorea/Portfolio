import { Component } from '@angular/core';
import { Translations } from '../translations';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-legal-notice',
  imports: [RouterModule],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss'
})
export class LegalNotice {
constructor(public translationService: Translations) {}
}
