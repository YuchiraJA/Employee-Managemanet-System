import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employees.model';
import { EmployeesService } from 'src/app/services/employees.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  
  employees: Employee[] = [
    // {
    //   id: 'c705cd8b',
    //   name: 'Saman Perera',
    //   email: 'saman @gmail.com',
    //   phone: 94713426574,
    //   salary: 120000,
    //   department: 'IT'
    // },
    // {
    //   id: 'c705cd8b',
    //   name: 'Saman Perera',
    //   email: 'saman @gmail.com',
    //   phone: 94713426574,
    //   salary: 120000,
    //   department: 'IT'
    // },
    // {
    //   id: 'c705cd8b',
    //   name: 'Saman Perera',
    //   email: 'saman @gmail.com',
    //   phone: 94713426574,
    //   salary: 120000,
    //   department: 'IT'
    // },

  ];



  constructor(private employeesService: EmployeesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //this.employees.push()
    this.getAllEmployees();
  }

  deleteEmployee(id: string) {
    this.employeesService.deleteEmployee(id)
    .subscribe({
      next: (response) => {
      this.getAllEmployees();
      }
    });

  }

  getAllEmployees(){
    this.employeesService.getAllEmployees()
    .subscribe({
      next: (employees) => {
         console.log(employees);
        this.employees = employees;
      },
      error: (response) => {
        console.log(response);
      }
    });
  }

  
}
