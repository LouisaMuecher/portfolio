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
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
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
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
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
      description: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
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