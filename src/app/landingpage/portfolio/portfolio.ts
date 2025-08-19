import { Component, Input } from '@angular/core';
import { Projects } from './projects/projects';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  imports: [Projects, CommonModule],
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.scss'],
  standalone: true,
})
export class Portfolio {
  @Input() translations!: any;

  projects: any[] = [];

  ngOnInit() {
    this.projects = [
      { 
        title: 'Join',
        skills: 'JavaScript | HTML | CSS | Firebase',
        description: this.translations?.portfolioJoin,
        live: 'join',
        git: 'Join'
      },
      { 
        title: 'El Pollo Loco',
        skills: 'JavaScript | HTML | CSS',
        description: this.translations?.portfolioElPolloLoco,
        live: 'el-pollo-loco',
        git: 'El-pollo-loco'
      },
      { 
        title: 'Pokedex',
        skills: 'JavaScript | HTML | CSS | Api',
        description: this.translations?.portfolioPokedex,
        live: 'pokedex',
        git: 'Pokedex'
      },
    ];
  }
}

