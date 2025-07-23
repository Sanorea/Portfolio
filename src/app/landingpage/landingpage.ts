import { Component } from '@angular/core';
import { AboutMe } from './about-me/about-me';
import { MySkills } from './my-skills/my-skills';
import { Portfolio } from './portfolio/portfolio';
import { Testimonials } from './testimonials/testimonials';
import { Contact } from './contact/contact';
import { IAm } from './i-am/i-am';

@Component({
  selector: 'app-landingpage',
  imports: [AboutMe, MySkills, Portfolio, Testimonials, Contact, IAm],
  templateUrl: './landingpage.html',
  styleUrl: './landingpage.scss'
})
export class Landingpage {

}
