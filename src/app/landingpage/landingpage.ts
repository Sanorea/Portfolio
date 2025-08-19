import { Component } from '@angular/core';
import { AboutMe } from './about-me/about-me';
import { MySkills } from './my-skills/my-skills';
import { Portfolio } from './portfolio/portfolio';
import { Contact } from './contact/contact';
import { IAm } from './i-am/i-am';

import { CommonModule } from '@angular/common';
import { Translations } from '../translations';

@Component({
  selector: 'app-landingpage',
  imports: [CommonModule, AboutMe, MySkills, Portfolio, Contact, IAm],
  templateUrl: './landingpage.html',
  styleUrl: './landingpage.scss'
})
export class Landingpage {
  
constructor(public translationService: Translations) {}
}
