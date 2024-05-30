import { Component } from '@angular/core';
import { CrudService } from '../crud.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Userfild} from '../crudUser'
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  allEmp:Userfild [] =[];
  RegForm : FormGroup;
  idValue:any;
  formVisible = false;
  userIdToDelete: any;

    constructor(private fb : FormBuilder,private crudOp : CrudService,private router:Router){
    this.RegForm = this.fb.group({
      fname : ['',[Validators.required, Validators.minLength(3)]],
      lname : ['',[Validators.required,Validators.minLength(3)]],
      email :['',[Validators.required,Validators.email]],
      Locality : ['',[Validators.required]],
      address :['',Validators.required],
      phone :['',Validators.required]
    })
  }
  onSubmit() {
    if (this.RegForm.valid) {     
      this.crudOp.addEmployee(this.RegForm.value).subscribe((val:any)=>{
        alert("emp added...!")        
      })
      this.RegForm.reset();      
      this.displayEmp();
    }
  }
  setUserIdToDelete(id: any) {
    this.userIdToDelete = id;
  }
deleteEmp(){
  this.crudOp.deleteEmployee(this.userIdToDelete).subscribe((val:any)=>{    
    this.displayEmp();
  })
}
  ngOnInit(){
    this.displayEmp();
   this.displayForm();
  }
  displayEmp(){
    this.crudOp.getEmployee().subscribe((val:any)=>{
      this.allEmp = val
    })
  }
  displayForm(){
    this.crudOp.formVisibility$.subscribe((visible:any )=> {
      this.formVisible = visible;
    });
  }

  detailsPage(id:any){
    this.router.navigate([`dashboard/view/${id}`])
  }
  editEmp(data:any,id:any){
    this.router.navigate([`dashboard/view/${data}_${id}`])
  }

}
