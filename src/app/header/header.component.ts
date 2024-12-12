import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NavigationComponent, TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  scrollDownDefault: string = './../../assets/img/scroll-down-default.svg';
  scrollDownMove: string = './../../assets/img/scroll-down-move.svg';
  currentImage?: string;

  ngOnInit() {
    let toggle = false;
    this.currentImage = this.scrollDownDefault;
    setInterval(() => {
      this.currentImage = toggle ? this.scrollDownDefault : this.scrollDownMove;
      toggle = !toggle;
    }, 500);
  }
}
