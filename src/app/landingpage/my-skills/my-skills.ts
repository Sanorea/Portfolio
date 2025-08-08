import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  imports: [CommonModule],
  templateUrl: './my-skills.html',
  styleUrl: './my-skills.scss',
  standalone: true

})
export class MySkills {

  skills = [
    {
      title: 'HTML',
      imgPath: 'html'
    },
    {
      title: 'CSS',
      imgPath: 'css'
    },
    {
      title: 'JavaScript',
      imgPath: 'javascript'
    },
    {
      title: 'TypeScript',
      imgPath: 'typescript'
    },
    {
      title: 'Angular',
      imgPath: 'angular'
    },
    {
      title: 'Firebase',
      imgPath: 'firebase'
    },
    {
      title: 'Git',
      imgPath: 'git'
    },
    {
      title: 'REST-API',
      imgPath: 'api'
    },
    {
      title: 'Scrum',
      imgPath: 'scrum'
    },
    {
      title: 'Material Design',
      imgPath: 'materialdesigne'
    }
  ];


}
