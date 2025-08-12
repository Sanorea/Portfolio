import { Component, signal } from '@angular/core';
import { Header } from "./landingpage/header/header";
import { Footer } from './landingpage/footer/footer';
import { AboutMe } from './landingpage/about-me/about-me';
import { MySkills } from './landingpage/my-skills/my-skills';
import { Portfolio } from './landingpage/portfolio/portfolio';
import { Testimonials } from './landingpage/testimonials/testimonials';
import { Contact } from './landingpage/contact/contact';
import { IAm } from './landingpage/i-am/i-am';
import { Landingpage } from './landingpage/landingpage';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  imports: [Header, Footer, Landingpage, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Portfolio');
}
