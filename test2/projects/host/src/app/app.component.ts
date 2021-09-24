import { Component } from '@angular/core';
import { NavigationParentItem, NavigationState, SWSidenavMode } from '@sw/angular-controls';
import {SharedService} from '@shared'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public sideNavMode = SWSidenavMode.OVER;
  public navOpened: boolean = false;
  public imgSrc = '../assets/serviceware-logo.svg';

  public toggleNavDrawer(open?: boolean) {
    this.navOpened = open ?? !this.navOpened;
  }

  constructor(private readonly sharedService: SharedService) {
    
  }

  tmp() {
    console.log(this.sharedService.getMenuItems());
  }

  navToggled(event: NavigationState) {
    this.navOpened = event === NavigationState.OPENED;
  }

  public get navitems(): NavigationParentItem[] {
    return this.sharedService.getMenuItems().map(x => {
      return {
        text: x.title,
        id: x.title,
        children: [],
        icon: x.icon,
        url: x.route
      }
    });
  }
}
