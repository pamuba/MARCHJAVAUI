import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  template: `
    <h2>{{name}}</h2>
    <h2>{{name | uppercase}}</h2>
    <h2>{{name | lowercase}}</h2>
    <h2>{{name | titlecase}}</h2>
    <h2>{{name | slice:2:5}}</h2>

    <h2>{{5.678 | number:'3.4-5'}}</h2>
    <h2>{{5.678 | number:'3.1-2'}}</h2>


    <h2>{{.25 | percent}}</h2>
    <h2>{{5.678 | currency}}</h2>
    <h2>{{5.678 | currency:'EUR'}}</h2>

    <h2>{{date}}</h2>
    <h2>{{date | date:'short'}}</h2>
    <h2>{{date | date:'shortDate'}}</h2>
    <h2>{{date |  date:'shortTime'}}</h2>
    <h2>{{date |  date:'dd-MMMM-yyyy'}}</h2>
  `,
  styles: [
  ]
})
export class PipesComponent implements OnInit {

  public name = "john Wick"
  public date  = new Date()
  constructor() { }

  ngOnInit(): void {
  }

}
