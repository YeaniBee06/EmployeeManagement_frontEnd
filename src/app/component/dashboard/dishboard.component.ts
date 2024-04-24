// @ts-ignore

import {Component, OnInit} from '@angular/core';
import {FormBuilder,FormControl,FormGroup} from "@angular/forms";
import {Employee} from "../../model/employee";
import {EmployeeService} from "../../service/employee.service";

@Component({
  selector: 'app-dishboard',
  templateUrl: './dishboard.component.html',
  styleUrl: './dishboard.component.css'
})
export class DashboardComponent implements OnInit{
  empDetail !: FormGroup;
  empObj : Employee = new  Employee();
  empList : Employee[] = [];
  constructor( private  FormBuilder: FormBuilder, private empService : EmployeeService) { }
  ngOnInit(): void {

    this.getAllEmployee();

this.empDetail = this.FormBuilder.group({
  name: [''],
  email: [''],
  salary: [''],
  address: [''],
});

  }

  addEmployee () {
    console.log(this.empDetail);

    this.empObj.id = this.empDetail.value.id;
    this.empObj.name = this.empDetail.value.name;
    this.empObj.email = this.empDetail.value.email;
    this.empObj.salary = this.empDetail.value.salary;
    this.empObj.address = this.empDetail.value.salary;

    this.empService.addEmployee(this.empObj).subscribe(res => {
      console.log(res);
      this.getAllEmployee();
    }, err => {
      console.log(err);
    });
  }
  getAllEmployee() {
   this.empService.getAllEmployee().subscribe(res=>{
     this.empList =res;
   },error => {
     console.log("error while fetching data")
    });
  }
  editEmployee(emp: Employee) {
    this.empDetail.controls['id'].setValue(emp.id);
    this.empDetail.controls['name'].setValue(emp.name);
    this.empDetail.controls['email'].setValue(emp.email);
    this.empDetail.controls['salary'].setValue(emp.salary);
    this.empDetail.controls['address'].setValue(emp.address);
  }
}


