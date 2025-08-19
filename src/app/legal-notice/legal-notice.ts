import { Component } from '@angular/core';
import { Translations } from '../translations';

@Component({
  selector: 'app-legal-notice',
  imports: [],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss'
})
export class LegalNotice {
constructor(public translationService: Translations) {}
}
