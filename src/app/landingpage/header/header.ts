import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header {

  @Input() translations!: any;
  @Input() activeLang: 'de' | 'en' = 'en';
  @Output() changeLanguage = new EventEmitter<'de' | 'en'>();

  isMobileMenuOpen = false;

  setLanguage(lang: 'de' | 'en') {
    if (this.activeLang !== lang) {
      this.changeLanguage.emit(lang);
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
