import { Component } from '@angular/core';
import { Projects } from './projects/projects';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  imports: [Projects, CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
  standalone: true,
})
export class Portfolio {

  projects = [
    { title: 'Join', skills: 'JavaScript | HTML | CSS | Firebase', description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories', live: 'join', git: 'Join' },
    { title: 'El Pollo Loco', skills: 'JavaScript | HTML | CSS', description: 'A simple Jump-and-Run game based on an object-oriented approach. ' , live: 'el-pollo-loco', git: 'El-pollo-loco' },
    { title: 'Pokedex', skills: 'JavaScript | HTML | CSS | Api', description: 'A simple Jump-and-Run game based on an object-oriented approach. ', live: 'pokedex', git: 'Pokedex' },
    
  ]

}
