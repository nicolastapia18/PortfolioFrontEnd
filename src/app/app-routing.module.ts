import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAboutComponent } from './component/about/edit-about.component';
import { EditEducationComponent } from './component/education/edit-education.component';
import { NewEducationComponent } from './component/education/new-education.component';
import { EditExperienceComponent } from './component/experience/edit-experience.component';
import { NewExperienceComponent } from './component/experience/new-experience.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { EditProyectoComponent } from './component/proyects/edit-proyecto.component';
import { NewProyectoComponent } from './component/proyects/new-proyecto.component';
import { EditSkillComponent } from './component/skills/edit-skill.component';
import { NewSkillComponent } from './component/skills/new-skill.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'nuevaexp', component: NewExperienceComponent},
  {path: 'editexp/:id', component: EditExperienceComponent},
  {path: 'nuevaedu', component: NewEducationComponent},
  {path: 'editedu/:id', component: EditEducationComponent},
  {path: 'nuevaskill', component: NewSkillComponent},
  {path: 'editskill/:id', component: EditSkillComponent},
  {path: 'editabout/:id', component: EditAboutComponent},
  {path: 'nuevoproyecto', component: NewProyectoComponent},
  {path: 'editproyecto/:id', component: EditProyectoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
