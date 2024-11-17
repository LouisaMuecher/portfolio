import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectService, Project } from '../services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [CommonModule, ProjectDetailsComponent]
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  selectedProject: Project | null = null;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe({
      next: (projects) => {
        this.projects = projects;
      },
      error: (error) => {
        console.error('Error loading projects:', error);
      }
    });
  }

  openProjectDetails(project: Project): void {
    console.log('Opening project:', project);
    this.selectedProject = project;
  }

  closeProjectDetails(): void {
    this.selectedProject = null;
  }
}