import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [
  {path:'', 
  redirectTo:'home',
  pathMatch:'full'},
  {path:'home', component:HomeComponent}, 
  {path:'aboutus', component:AboutusComponent},
  {path:'contactus', component:ContactusComponent},
  {path:'projects', component:ProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
