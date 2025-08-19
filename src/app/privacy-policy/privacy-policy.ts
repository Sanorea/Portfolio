import { Component, OnInit } from '@angular/core';
import { Translations } from '../translations';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.html',
  styleUrls: ['./privacy-policy.scss']
})
export class PrivacyPolicy implements OnInit {
  policyHtml: string = '';

  constructor(private translationService: Translations) {}

  async ngOnInit() {
    // beim Laden direkt setzen
    this.policyHtml = await this.translationService.loadPrivacyPolicy();

    // auf Sprachwechsel reagieren
    this.translationService.languageChanged.subscribe(async () => {
      this.policyHtml = await this.translationService.loadPrivacyPolicy();
    });
  }
}
