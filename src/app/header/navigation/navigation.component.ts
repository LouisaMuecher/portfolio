import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  standalone: true,
  imports: [TranslateModule]
})
export class NavigationComponent {
  currentLanguage = 'EN';
  isMenuOpen = false;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : 'auto';
  }

  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'EN' ? 'DE' : 'EN';
    const lang = this.currentLanguage.toLowerCase();
    this.translate.use(lang);
  }

  scrollToSection(sectionId: string, event: Event) {
    event.preventDefault(); // Verhindert das Standard-Verhalten des Links
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
        
        if (this.isMenuOpen) {
            this.toggleMenu();
        }
    }
}
}