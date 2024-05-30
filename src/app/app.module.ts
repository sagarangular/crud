import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalpopupComponent } from './modalpopup/modalpopup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserListComponent } from './user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CrudService } from './crud.service';
import { LoginComponent } from './login/login.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PhonePipe } from './phone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ModalpopupComponent,
    NavbarComponent,
    DashboardComponent,
    UserListComponent,
    LoginComponent,
    ViewdetailsComponent,
    PhonePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
