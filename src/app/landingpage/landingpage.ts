import { Component } from '@angular/core';
import { AboutMe } from './about-me/about-me';
import { MySkills } from './my-skills/my-skills';
import { Portfolio } from './portfolio/portfolio';
import { Testimonials } from './testimonials/testimonials';
import { Contact } from './contact/contact';
import { IAm } from './i-am/i-am';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landingpage',
  imports: [CommonModule, AboutMe, MySkills, Portfolio, Contact, IAm, Header, Footer],
  templateUrl: './landingpage.html',
  styleUrl: './landingpage.scss'
})
export class Landingpage {
  currentLang: 'en' | 'de' = 'en';  // aktuelle Sprache

  // Texte für beide Sprachen

  translationsData = {
    en: {
      headerAboutMe: 'About me',
      headerSkills: 'Skills',
      headerPortfolio: 'Portfolio',
      headerContact: 'Contact',
      mobileAboutMe: 'About me',
      mobileSkills: 'My skills',
      mobilePortfolio: 'Portfolio',
      mobileContact: 'Contact',
      iAmButton: 'Lets talk!',
      aboutMeTitle: 'About Me',
      aboutMeText: 'Hello! I am a passionate front- end developer with experience in Angular, TypeScript, and modern web development. I first came into contact with programming during my bachelors degree in civil engineering, where I discovered my passion for code. After five years of professional experience, I wanted to turn my passion into my career.',
      aboutMeLocated: 'I live in Ueberstorf, near Bern, Switzerland. For positions nearby, I enjoy working on-site, but I am also open to remote work opportunities.',
      aboutMeLearning: 'Having completed my training in front-end development, I am now expanding my knowledge so that I can deliver comprehensive solutions as a full-stack developer.',
      aboutMeProblemSolving: 'I approach problems in a systematic and analytical way, learning from each challenge to find the most efficient and elegant solution. I combine analytical thinking, creativity, persistence, and collaboration.',
      mySkillHeadline: 'My skills',
      mySkillTechnologies: 'In my projects so far, I have had the opportunity to work with a wide range of different technologies.',
      mySkillOther: 'Looking for',
      mySkillOtherHilighted: 'another skill',
      mySkillNewSkills: 'I am also highly motivated to learn new skills.',
      mySkillButton: 'Get in touch',
      portfolioText: 'Explore a selection of my work here - Interact with projects to see my skills in action',
      portfolioJoin: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories',
      portfolioElPolloLoco: 'A simple Jump-and-Run game based on an object-oriented approach.',
      portfolioPokedex: 'A web app that visualizes the first generation of Pokémon, using the PokeAPI as its technical basis.',
      contactHeadline: 'Contact',
      contactDescriptionHeader: 'Got a problem to solve?',
      contactDescription: 'Feel free to reach out if you are looking for a dedicated frontend developer who is eager to add value to your projects with passion and creativity.',
      contactNeed: 'Need a Frontend developer?',
      contactContactMe: 'Contact me!',
      contactName: 'your name',
      contactEmail: 'your email',
      contactMessage: 'your message',
      contactNameRequired: 'Your name is required',
      contactEmailRequired: 'Your email is required',
      contactMessageRequired: 'Your message is empty',
      contactPrivacyPolicyLeft: 'I`ve read the ',
      contactPrivacyPolicyMiddle: 'privacy policy ',
      contactPrivacyPolicyRight: 'and agree',
      contactSendMessage: 'Send message :)',


    },

    de: {
      headerAboutMe: 'Über mich',
      headerSkills: 'Meine Skills',
      headerPortfolio: 'Portfolio',
      headerContact: 'Kontakt',
      mobileAboutMe: 'Über mich',
      mobileSkills: 'Meine Fähigkeiten',
      mobilePortfolio: 'Portfolio',
      mobileContact: 'Kontakt',
      iAmButton: 'Lass und reden!',
      aboutMeTitle: 'Über mich',
      aboutMeText: 'Hallo! Ich bin eine leidenschaftliche Front-End-Entwicklerin mit Erfahrung in Angular, TypeScript und moderner Webentwicklung. Bereits während meines Bachelor-Studiums im Bauingenieurwesen hatte ich erste Berührungspunkte mit der Programmierung und habe meine Leidenschaft für den Code entdeckt. Nach fünf Jahren Berufserfahrung wollte ich die Leidenschaft zum Beruf machen. ',
      aboutMeLocated: 'Ich wohne in Ueberstorf, in der Nähe von Bern (Schweiz). Bei Stellen in der Umgebung arbeite ich gerne vor Ort, stehe aber auch remote Arbeitsmöglichkeiten offen gegenüber.',
      aboutMeLearning: 'Nach dem Abschluss meiner Ausbildung im Front-End-Bereich erweitere ich nun meine Kenntnisse um als Full-Stack-Entwicklerin umfassende Lösungen liefern zu können.',
      aboutMeProblemSolving: 'Ich gehe Probleme systematisch und analytisch an und lerne aus jeder Herausforderung, um die effizienteste und eleganteste Lösung zu finden. Dabei kombiniere ich analytisches Denken, Kreativität, Ausdauer und Teamarbeit.',
      mySkillHeadline: 'Meine Skills',
      mySkillTechnologies: 'In meinen Projekten konnte ich bisher mit einer Vielzahl unterschiedlicher Technologien arbeiten.',
      mySkillOther: 'Sie suchen nach',
      mySkillOtherHilighted: 'anderen Fähigkeiten',
      mySkillNewSkills: 'Ich bin ausserdem sehr motiviert neue Fähigkeiten zu erlernen.',
      mySkillButton: 'kontaktieren',
      portfolioText: 'Entdecken Sie hier eine Auswahl meiner Arbeiten – interagieren Sie mit den Projekten, um meine Fähigkeiten in Aktion zu sehen.',
      portfolioJoin: 'Aufgabenmanager, inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mithilfe von Drag-and-Drop-Funktionen und weisen sie Benutzern und Kategorien zu.',
      portfolioElPolloLoco: 'Ein einfaches Jump-and-Run-Spiel, das auf einem objektorientierten Ansatz basiert.',
      portfolioPokedex: 'Eine Web-App, die die Pokemon der ersten Generation visualisiert und dabei auf die PokeAPI als technische Grundlage zurückgreift.',
      contactHeadline: 'Kontakt',
      contactDescriptionHeader: 'Haben Sie ein Problem, das gelöst werden muss?',
      contactDescription: 'Kontaktieren Sie mich gerne, wenn Sie eine engagierte Frontend-Entwicklerin suchen, die mit Leidenschaft und Kreativität Mehrwert in Ihre Projekte bringt.',
      contactNeed: 'Sie suchen einen Front-End Entwickler?',
      contactContactMe: 'Kontaktieren Sie mich!',
      contactName: 'Name',
      contactEmail: 'E-Mail',
      contactMessage: 'Mitteilung',
      contactNameRequired: 'Ihr Name ist erforderlich',
      contactEmailRequired: 'Ihre E-Mail ist erforderlich',
      contactMessageRequired: 'Ihre Mitteilung ist leer',
      contactPrivacyPolicyLeft: 'Ich habe die',
      contactPrivacyPolicyMiddle: 'Datenschutzerklärung ',
      contactPrivacyPolicyRight: 'gelesen und stimme der Verarbeitung meiner Daten zu',
      contactSendMessage: 'Mitteilung senden :)',


    },
  };


  // Getter für aktuelle Übersetzungen
  get currentTranslations() {
    return this.translationsData[this.currentLang];
  }

  // Funktion zum Wechseln der Sprache
  toggleChangeLanguage() {
    this.currentLang = this.currentLang === 'en' ? 'de' : 'en';
  }
}
