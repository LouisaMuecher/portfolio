import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ CommonModule, TranslateModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  currentLanguage = 'EN';

  constructor(private translate: TranslateService) {
    this.translate.onLangChange.subscribe(event => {
      this.currentLanguage = event.lang.toUpperCase();
    });
  }
}
