import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { AppRoutingModule } from './routing/routing.module';
import { ResumeComponent } from './resume/resume.component';


// Add an icon to the library for convenient access in other components
library.add(faCoffee, faEnvelope, faTwitter, faLinkedin, faGithub);

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AboutComponent,
    ProjectsComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FontAwesomeModule,
    PdfViewerModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
