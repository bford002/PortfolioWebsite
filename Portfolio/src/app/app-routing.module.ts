import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { BioComponent } from './bio/bio.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectmodalComponent } from './projectmodal/projectmodal.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: BioComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent, },
  { path: 'projectdescription', component: ProjectmodalComponent, },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent, 
  ProjectsComponent, 
  ProjectmodalComponent, 
  SkillsComponent, 
  ContactComponent, 
  BioComponent
];
