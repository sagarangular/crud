import { Component } from '@angular/core';
import { CrudService } from '../crud.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  allEmp:any [] =[];
  displayCrud:boolean=false;
  RegForm : FormGroup;
  idValue:any;
  dataValue:boolean=false;
    constructor(private fb : FormBuilder,private crudOp : CrudService){
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
      if(this.dataValue == true){
        this.crudOp.updateEmployee(this.idValue,this.RegForm.value).subscribe((val:any)=>{
          alert("emp updated...!")        
        })
      
        this.dataValue = false
      }else{
        this.crudOp.addEmployee(this.RegForm.value).subscribe((val:any)=>{
          alert("emp added...!")        
        })
       
      }
      this.RegForm.reset();
      this.displayEmp();
     
    }
  }

deleteEmp(id:any){
  this.crudOp.deleteEmployee(id).subscribe((val:any)=>{
    alert("Emp delete...!")
    this.displayEmp();
  })
}

editEmp(data:any){
  this.RegForm.patchValue(data)
  this.dataValue = true
  this.idValue = data.id;
}


  ngOnInit(){
    this.displayEmp();
  }
  displayEmp(){
    this.crudOp.getEmployee().subscribe((val:any)=>{
      this.allEmp = val.employees
    })
  }
}
