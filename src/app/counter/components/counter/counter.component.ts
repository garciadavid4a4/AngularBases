import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter : {{Counter}}</h3>

    <button (click)="increaseBy(1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>`
})
export class CounterComponent {
  public Counter = 10

  increaseBy(value: number):void {
    this.Counter+=value
  }

  reset():void {
    this.Counter=10;
  }
  constructor() {}
}
