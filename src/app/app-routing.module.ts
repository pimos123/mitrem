import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes } from '@angular/router';//

import {HomeComponent } from './home/home.component';//
import{CreateComponent} from './home/create/create.component';//ปุ่ม
import {BmiComponent } from './home/bmi/bmi/bmi.component';//
const router:Routes = [
  {path: '', redirectTo: '/home',pathMatch: 'full'},//
  {path: 'home',component:HomeComponent},//
  {path: 'create',component:CreateComponent},//
  {path: 'bmi',component:BmiComponent},//
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(router)//
  ],
  declarations:[],
  exports:[RouterModule]//ส่งออกเพื่อสามาเข้าถึงข้อมูลได้
})
export class AppRoutingModule { }

