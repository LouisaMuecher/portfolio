import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../services/projects.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
  standalone: true,
  imports: [CommonModule, TranslateModule]
})
export class ProjectDetailsComponent {
  @Input() project: Project | null = null;
  @Input() projects: Project[] = []; 
  @Output() onClose = new EventEmitter<void>();
  @Output() onNextProject = new EventEmitter<number>(); 

  closeDetails(): void {
    this.onClose.emit();
  }

  nextProject(): void {
    if (this.project && this.projects.length > 0) {
      const currentIndex = this.projects.findIndex(p => p.id === this.project!.id);
      const nextIndex = (currentIndex + 1) % this.projects.length;
      this.onNextProject.emit(this.projects[nextIndex].id);
    }
  }
}