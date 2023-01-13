import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './component/about/about.component';
import { BannerComponent } from './component/banner/banner.component';
import { EducationComponent } from './component/education/education.component';
import { ExperienceComponent } from './component/experience/experience.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { LogoapComponent } from './component/logoap/logoap.component';
import { ProyectsComponent } from './component/proyects/proyects.component';
import { SkillsComponent } from './component/skills/skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienceComponent } from './component/experience/new-experience.component';
import { EditExperienceComponent } from './component/experience/edit-experience.component';
import { NewEducationComponent } from './component/education/new-education.component';
import { EditEducationComponent } from './component/education/edit-education.component';
import { NewSkillComponent } from './component/skills/new-skill.component';
import { EditSkillComponent } from './component/skills/edit-skill.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { EditAboutComponent } from './component/about/edit-about.component';
import { EditProyectoComponent } from './component/proyects/edit-proyecto.component';
import { NewProyectoComponent } from './component/proyects/new-proyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BannerComponent,
    EducationComponent,
    ExperienceComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    LogoapComponent,
    ProyectsComponent,
    SkillsComponent,
    NewExperienceComponent,
    EditExperienceComponent,
    NewEducationComponent,
    EditEducationComponent,
    NewSkillComponent,
    EditSkillComponent,
    EditAboutComponent,
    EditProyectoComponent,
    NewProyectoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
