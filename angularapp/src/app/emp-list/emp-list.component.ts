import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'emp-list',
  template: `
    <h2>Employee List</h2>
    <ul *ngFor="let emp of employees">
      <li>ID:{{emp.id}} NAME:{{emp.name}}</li>
    </ul>
  `,
  styles: [
  ]
})
export class EmpListComponent implements OnInit {

  employees:any = []
  constructor(private _empService:EmployeeService) { }

  ngOnInit(): void {
    this._empService.getEmployees()
        .subscribe(data => this.employees = data)
  }

}
