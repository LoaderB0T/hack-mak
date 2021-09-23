import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '@helpline/shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'host';

  constructor(private readonly router: Router, private readonly a: SharedService) {}

  public nav() {
    this.router.navigate(['/module1']);
  }

  public add() {
    this.a.add();
  }

  public get val(): number {
    return this.a.val;
  }
}
