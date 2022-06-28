import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'emp-details',
  template: `
    <h2>Employee Details</h2>
    <ul *ngFor="let emp of employees">
      <li>ID:{{emp.id}} NAME:{{emp.name}} AGE:{{emp.age}}</li>
    </ul>
  `,
  styles: [
  ]
})
export class EmpDetailsComponent implements OnInit {

  employees:any = []
  constructor(private _empService:EmployeeService) { }

  ngOnInit(): void {
    this._empService.getEmployees()
      .subscribe(data => this.employees = data)
  }

}
