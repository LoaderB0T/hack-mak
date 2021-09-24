import { Component } from '@angular/core';
import { SWSidenavMode } from '@sw/angular-controls';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public sideNavMode = SWSidenavMode.OVER;
  public navOpened: boolean = false;

  public toggleNavDrawer(open?: boolean) {
    this.navOpened = open ?? !this.navOpened;
  }
}
