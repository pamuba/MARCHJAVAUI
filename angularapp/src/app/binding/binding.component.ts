import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  template: `
    <p>
      <input [(ngModel)]="name" />
      {{name}}
    </p>
  `,
  styles: [
  ]
})
export class BindingComponent implements OnInit {

  public name = "John"

  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.name = "New Name"
    }, 1000)
  }

}
