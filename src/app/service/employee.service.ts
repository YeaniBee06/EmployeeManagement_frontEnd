import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Employee} from "../model/employee";
import {Observable} from "rxjs";

class Observalable<T> {
  subscribe(param: (res) => void, param2: (err) => void) {
    
  }
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 addEmpURL : string;
 getEmpURL : string;

  constructor(private http: HttpClient) {
   this.addEmpURL = 'http://localhost:9091/emp/addEmployee';
   this.getEmpURL = 'http: localhost: 9091/emp/ getAll'
  }
  addEmployee(emp: Employee): Observalable<Employee> {
  return this.http.post<Employee>(this.addEmpURL,emp);
  }

  getAllEmployee() : Observable<Employee[]>{
    return this.http.get<Employee[]>(this.getEmpURL);
  }


}
