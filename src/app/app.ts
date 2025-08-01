import { Component, signal } from '@angular/core';
import { Header } from "./shared/header/header";
import { Footer } from './shared/footer/footer';
import { AboutMe } from './landingpage/about-me/about-me';
import { MySkills } from './landingpage/my-skills/my-skills';
import { Portfolio } from './landingpage/portfolio/portfolio';
import { Testimonials } from './landingpage/testimonials/testimonials';
import { Contact } from './landingpage/contact/contact';
import { IAm } from './landingpage/i-am/i-am';
import { Landingpage } from './landingpage/landingpage';


@Component({
  selector: 'app-root',
  imports: [Header, Footer, Landingpage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Portfolio');
}
