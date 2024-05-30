import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable,BehaviorSubject } from 'rxjs';
import {Userfild} from './crudUser'
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { }
  private formVisibility = new BehaviorSubject<boolean>(false);
  formVisibility$ = this.formVisibility.asObservable();


  addEmployee(data:Userfild[]):Observable<Userfild[]>{
   return this.http.post<Userfild[]>("http://localhost:3000/employees",data)
  }
  getEmployee():Observable<Userfild[]>{
    return this.http.get<Userfild[]>("http://localhost:3000/employees")
  }
  deleteEmployee(id:Userfild[]):Observable<Userfild[]>{
    return this.http.delete<Userfild[]>(`http://localhost:3000/employees/${id}`)
  }
  updateEmployee(id:Userfild[],data:Userfild[]):Observable<Userfild[]>{
    return this.http.put<Userfild[]>(`http://localhost:3000/employees/${id}`,data)
   }
   
   getDetails(id:any){
    return this.http.get(`http://localhost:3000/employees/${id}`)
   }
 
   showForm() {
     this.formVisibility.next(true);
   }
 
   hideForm() {
     this.formVisibility.next(false);
   }
}
