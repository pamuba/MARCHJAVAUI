import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-directive',
  template: `
   <div *ngFor="let color of colors; last as l; first as f; even as e">
    <h2 [style.color]="color">{{f}} {{color}} {{l}} {{e}}</h2>
   </div>
  `,
  styles: [
  ]
})
export class ForDirectiveComponent implements OnInit {

  public colors = ["red", "green", "blue"]
  constructor() { }

  ngOnInit(): void {
  }

}
