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
  previewProject: Project | null = null;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  showPreview(project: Project): void {
    if (!this.selectedProject) { // Nur Preview zeigen, wenn kein Popup offen ist
      this.previewProject = project;
    }
  }

  hidePreview(): void {
    if (!this.selectedProject) { // Nur Preview verstecken, wenn kein Popup offen ist
      this.previewProject = null;
    }
  }

  openProjectDetails(project: Project): void {
    this.selectedProject = project;
    this.previewProject = null; // Preview ausblenden wenn Popup geöffnet wird
  }

  closeProjectDetails(): void {
    this.selectedProject = null;
  }
}