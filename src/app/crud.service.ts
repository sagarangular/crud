import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { }

  addEmployee(data:any):Observable<any>{
   return this.http.post("http://localhost:3000/employees",data)
  }
  getEmployee(){
    return this.http.get("http://localhost:3000/employees")
  }
  deleteEmployee(id:any):Observable<any>{
    return this.http.delete(`http://localhost:3000/employees/${id}`)
  }
  updateEmployee(id:any,data:any):Observable<any>{
    return this.http.put(`http://localhost:3000/employees/${id}`,data)
   }
}
