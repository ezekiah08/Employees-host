import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService  {

  readonly EmployeeApi = "https://localhost:7251/api";
  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
   return this.http.get<Employee[]>(this.EmployeeApi + '/employees');
  }

    addEmployee(addEmployeeRequest: Employee): Observable<Employee> {
      addEmployeeRequest.id = '00000000-0000-0000-0000-000000000000';
     return this.http.post<Employee>(this.EmployeeApi + '/employees',
     addEmployeeRequest);
    }

    getEmployee(id: string): Observable<Employee> {
     return this.http.get<Employee>(this.EmployeeApi + '/employees/' + id);
    }

    updateEmployee(id: string, updateEmployeeRequest: Employee): Observable<Employee> {
     return this.http.put<Employee>(this.EmployeeApi + '/employees/' + id,
      updateEmployeeRequest );
    }

    deleteEmployee(id: string): Observable<Employee> {
      return  this.http.delete<Employee>(this.EmployeeApi + '/employees/' + id)
    }
  }
