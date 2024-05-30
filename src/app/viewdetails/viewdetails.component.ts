import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../crud.service';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent {
detailEmp:any;
editData:boolean =false;
RegForm : FormGroup;
editId:any;

constructor(private route:ActivatedRoute,
  private crud:CrudService,
  private re : Router,
  private location: Location,
  private fb : FormBuilder,){
    this.RegForm = this.fb.group({
      fname : ['',[Validators.required, Validators.minLength(3)]],
      lname : ['',[Validators.required,Validators.minLength(3)]],
      email :['',[Validators.required,Validators.email]],
      Locality : ['',[Validators.required]],
      address :['',Validators.required],
      phone :['',Validators.required]
    })
  }
  ngOnInit() {
   this.getDetailsData();
   this.getEdit();
  }

  getDetailsData(){
    let productDetails = this.route.snapshot.paramMap.get('id');
    this.crud.getDetails(productDetails).subscribe((data:any)=>{
   this.detailEmp = data;
   this.editData =false;

    })
  }
  getEdit(){
    let editDetailsLink = this.re.url.split('_').pop();
    this.crud.getDetails(editDetailsLink).subscribe((data:any)=>{
   this.detailEmp = data;
   this.RegForm.patchValue(data)   
    })
    this.editData =true;
    this.editId=editDetailsLink
  }
  
  editDetails(data:any){
    let idLink = this.route.snapshot.paramMap.get('id');
    this.editId =idLink
    this.editData =true;
    this.RegForm.patchValue(data)    
    
  }
  SaveUpdateDetails(){
    this.crud.updateEmployee(this.editId,this.RegForm.value).subscribe((val:any)=>{
      alert("emp updated...!")        
    })
    this.back();
  }
  cancelBtn(){
    this.editData = false
  }
  back(){
    this.location.back();
  }
}
