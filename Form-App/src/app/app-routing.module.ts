import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component'
import { LoginComponent } from '../app/login/login.component'

const routes: Routes = [

  {path:'home',component:HomeComponent},
  {path:'',component:LoginComponent}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
