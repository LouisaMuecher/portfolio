import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../services/projects.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ProjectDetailsComponent {
  @Input() project: Project | null = null;
  @Input() projects: Project[] = [];  // Neue Input-Property für alle Projekte
  @Output() onClose = new EventEmitter<void>();
  @Output() onNextProject = new EventEmitter<number>();  // Neue Output-Property

  closeDetails(): void {
    this.onClose.emit();
  }

  nextProject(): void {
    if (this.project && this.projects.length > 0) {
      const currentIndex = this.projects.findIndex(p => p.id === this.project!.id);
      const nextIndex = (currentIndex + 1) % this.projects.length; // Zurück zum Anfang wenn am Ende
      this.onNextProject.emit(this.projects[nextIndex].id);
    }
  }
}