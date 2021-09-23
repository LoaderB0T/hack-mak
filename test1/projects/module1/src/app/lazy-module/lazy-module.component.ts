import { Component, OnInit } from '@angular/core';
import {SharedService} from '@helpline/shared'
@Component({
  selector: 'app-lazy-module',
  templateUrl: './lazy-module.component.html',
  styleUrls: ['./lazy-module.component.scss']
})
export class LazyModuleComponent implements OnInit {
  constructor(private readonly a: SharedService) {}

  ngOnInit() {
  }

  public add() {
    this.a.add();
  }

  public get val(): number {
    return this.a.val;
  }

}
