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
  @Output() onClose = new EventEmitter<void>();

  closeDetails(): void {
    this.onClose.emit();
  }
}
