import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [AppComponent,HomeComponent, NavbarComponent, AboutComponent, 
    SkillsComponent, ProjectsComponent, WorkExperienceComponent, 
    EducationComponent, ContactComponent],
  imports: [BrowserModule,FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule { }

