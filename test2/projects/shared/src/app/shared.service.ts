import { Injectable } from '@angular/core';
import { MenuItem } from './menu-items';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private readonly _menuItems: MenuItem[] = [
      {
          icon: 'home',
          title: 'Home',
          route: '/'
      }
  ];
  constructor() {}

  public addMenuItem(menuItem: MenuItem) {
    this._menuItems.push(menuItem);
  }

  public getMenuItems(): MenuItem[] {
    return this._menuItems;
  }
}
