import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-directive',
  template: `
    <div [ngSwitch]="color">
      <div [style.color]="'red'" *ngSwitchCase="'red'">U Picked RED Color</div>
      <div [style.color]="'green'" *ngSwitchCase="'green'">U Picked GREEN Color</div>
      <div [style.color]="'blue'" *ngSwitchCase="'blue'">U Picked BLUE Color</div>
      <div *ngSwitchDefault>Pick Again</div>
    </div>
  `,
  styles: [
  ]
})
export class SwitchDirectiveComponent implements OnInit {

  public color = 'yellow';
  constructor() { }

  ngOnInit(): void {
  }

}
