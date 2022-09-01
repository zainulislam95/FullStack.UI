import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees: Employee[] = [
    {
      id: "111",
      name: "Zain",
      email: "zain@gmail.com",
      phone: 145,
      salary: 10000,
      department: "SID"
    },
    {
      id: "222",
      name: "Aqeel",
      email: "aqeel@gmail.com",
      phone: 232323,
      salary: 20000,
      department: "SID"
    }

  ]

  constructor() { }

  ngOnInit(): void {
    
  }

}
