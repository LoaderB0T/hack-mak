import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor() {}

  private _state = 0;

  public test(text: string) {
    alert('Hi ' + text);
  }

  public add() {
    this._state++;
  }

  public get val() {
    return this._state;
  }
}
