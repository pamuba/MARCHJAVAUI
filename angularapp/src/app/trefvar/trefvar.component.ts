import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trefvar',
  template: `
    <input type="text" #myTnput>
    <button (click)="logMessage(myTnput.value)">Log</button>
  `,
  styles: [
  ]
})
export class TrefvarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logMessage(txt:string){
    console.log(txt)
  }

}
