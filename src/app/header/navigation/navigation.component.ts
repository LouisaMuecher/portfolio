import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  currentLanguage: string = 'en';

  switchLanguage(language: string): void {
    this.currentLanguage = language;
    // Hier kommt noch eine Methode zum Text wechseln hin.
  }
}
