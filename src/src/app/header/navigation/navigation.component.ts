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

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'EN' ? 'DE' : 'EN';
    const lang = this.currentLanguage.toLowerCase();
    this.translate.use(lang);
  }
}