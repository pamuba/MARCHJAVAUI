import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prop-binding',
  template: `
   <h1>
    Welcome {{name}}
    <input type="text" value="TextBox" />
    <input disabled="false" type="text" value="TextBox" />
    <input disabled="{{false}}" type="text" value="TextBox" />
    <input [disabled]="false" type="text" value="TextBox" />
    <input [disabled]="isDisabled" type="text" value="TextBox" />
   </h1>
  `,
  styles: [
  ]
})
export class PropBindingComponent implements OnInit {

  public name = "Angular";
  public isDisabled = false;
  constructor() { }

  ngOnInit(): void {
  }

}
