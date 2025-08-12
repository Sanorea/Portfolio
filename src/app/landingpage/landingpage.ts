import { Component } from '@angular/core';
import { AboutMe } from './about-me/about-me';
import { MySkills } from './my-skills/my-skills';
import { Portfolio } from './portfolio/portfolio';
import { Testimonials } from './testimonials/testimonials';
import { Contact } from './contact/contact';
import { IAm } from './i-am/i-am';
import { Header } from './header/header';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-landingpage',
  imports: [AboutMe, MySkills, Portfolio, Testimonials, Contact, IAm, Header, Footer],
  templateUrl: './landingpage.html',
  styleUrl: './landingpage.scss'
})
export class Landingpage {

}
