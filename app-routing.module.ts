import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{AddRestoComponent} from './add-resto/add-resto.component'
import {ListOfRestaurentComponent} from './list-of-restaurent/list-of-restaurent.component'
import{LoginComponent} from './login/login.component'
import{RegisterComponent} from './register/register.component'
import{UpdateRestoComponent} from './update-resto/update-resto.component'
import { registerLocaleData } from '@angular/common';

const routes: Routes = [
  {
    component:AddRestoComponent,
    path:'add'
  },
  {
    component:LoginComponent,
    path:'login'
  },

  {
    component:RegisterComponent,
    path:'register'
  },
  {
    component:UpdateRestoComponent,
    path:'update/:id'
  },
  {
    component:ListOfRestaurentComponent,
    path:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
