import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-directive',
  template: `
     <h2 *ngIf="display; then thenBlock; else elseBlock" ></h2>


     <ng-template #thenBlock>
      <h2>
        Angular 13
      </h2>
     </ng-template>

     <ng-template #elseBlock>
      <h2>
        Name is hidden
      </h2>
     </ng-template>
  `,
  styles: [
  ]
})
export class IfDirectiveComponent implements OnInit {

  public display = false
  constructor() { }

  ngOnInit(): void {
  }

}
