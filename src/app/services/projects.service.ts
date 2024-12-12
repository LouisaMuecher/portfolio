import { Injectable } from '@angular/core';

export interface Technology {
  name: string;
  iconPath: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[]; 
  technologiesWithIcons?: Technology[];
  githubLink: string;
  demoLink?: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: 1,
      title: 'Join',
      description: 'PROJECTS.JOIN.DESCRIPTION',
      image: 'assets/img/join.png',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      technologiesWithIcons: [
        { name: 'JavaScript', iconPath: 'assets/img/javascript.svg' },
        { name: 'HTML', iconPath: 'assets/img/html.svg' },
        { name: 'CSS', iconPath: 'assets/img/css.svg' }
      ],
      githubLink: 'https://github.com/LouisaMuecher/join',
      demoLink: 'https://join.louisa-muecher.de/html/login.html'
    },
    {
      id: 2,
      title: 'El Pollo Loco',
      description: 'PROJECTS.POLLO_LOCO.DESCRIPTION',
      image: 'assets/img/elpolloloco.png',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      technologiesWithIcons: [
        { name: 'JavaScript', iconPath: 'assets/img/javascript.svg' },
        { name: 'HTML', iconPath: 'assets/img/html.svg' },
        { name: 'CSS', iconPath: 'assets/img/css.svg' }
      ],
      githubLink: 'https://github.com/LouisaMuecher/Join',
      demoLink: 'https://elpolloloco.louisa-muecher.de/'
    },
    {
      id: 3,
      title: 'DABubble',
      description: 'PROJECTS.DABUBBLE.DESCRIPTION',
      image: 'assets/img/dabubble.png',
      technologies: ['Angular', 'Firebase', 'TypeScript'],
      technologiesWithIcons: [
        { name: 'Angular', iconPath: 'assets/img/javascript.svg' },
        { name: 'Firebase', iconPath: 'assets/img/html.svg' },
        { name: 'TypeScript', iconPath: 'assets/img/css.svg' }
      ],
      githubLink: 'https://github.com/LouisaMuecher',
      demoLink: 'https://home.louisa-muecher.de'
    },
    
  ];

  getProjects(): Project[] {
    return this.projects;
  }
}