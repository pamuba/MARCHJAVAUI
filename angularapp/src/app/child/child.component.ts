import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h2>{{alias}}</h2>
    <button (click)="fireEvent()" >Send Data To Parent</button>
  `,
  styles: [
  ]
})
export class ChildComponent implements OnInit {

  @Input('parentData') alias :any;
  @Output() public childEvent = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  fireEvent(){
    this.childEvent.emit("Data From Child")
  }

}
