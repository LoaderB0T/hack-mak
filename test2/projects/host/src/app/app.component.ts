import { Component } from '@angular/core';
import { SWSidenavMode } from '@sw/angular-controls';
import {SharedService} from '@shared'

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

  constructor(private readonly sharedService: SharedService) {
    
  }

  tmp() {
    console.log(this.sharedService.getMenuItems());
  }
}
