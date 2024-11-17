import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  demoLink?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: 1,
      title: 'Join',
      description: 'Eine Kanban-Projektmanagement-Anwendung',
      image: 'assets/img/join.png',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      githubLink: 'https://github.com/LouisaMuecher/join',
      demoLink: 'https://join.louisa-muecher.de/html/login.html'
    },
    {
      id: 2,
      title: 'El Pollo Loco',
      description: 'Jump & Run Game',
      image: 'assets/img/elpolloloco.png',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      githubLink: 'https://github.com/LouisaMuecher/Join',
      demoLink: 'https://elpolloloco.louisa-muecher.de/'
    },
    {
      id: 3,
      title: 'Join',
      description: 'Eine Kanban-Projektmanagement-Anwendung',
      image: 'assets/img/dabubble.png',
      technologies: ['Angular', 'Firebase', 'TypeScript'],
      githubLink: 'https://github.com/LouisaMuecher',
      demoLink: 'home.louisa-muecher.de'
    },
    
  ];

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }
}
