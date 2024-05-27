import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { }

  addEmployee(data:any):Observable<any>{
   return this.http.post("https://sagarangular.github.io/host_api/db.json",data)
  }
  getEmployee(){
    return this.http.get("https://sagarangular.github.io/host_api/db.json")
  }
  deleteEmployee(id:any):Observable<any>{
    return this.http.delete(`https://sagarangular.github.io/host_api/db.json/${id}`)
  }
  updateEmployee(id:any,data:any):Observable<any>{
    return this.http.put(`https://sagarangular.github.io/host_api/db.json/${id}`,data)
   }
}
