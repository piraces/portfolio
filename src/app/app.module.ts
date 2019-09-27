import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { faCoffee, faEnvelope, faKey, fas } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedin, faGithub, faStackOverflow, fab } from '@fortawesome/free-brands-svg-icons';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { AppRoutingModule } from './routing/routing.module';
import { ResumeComponent } from './resume/resume.component';

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
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
    library.addIconPacks(fab);
    library.addIcons(faCoffee);
    library.addIcons(faEnvelope);
    library.addIcons(faKey);
    library.addIcons(faTwitter);
    library.addIcons(faLinkedin);
    library.addIcons(faGithub);
    library.addIcons(faStackOverflow);
  }
}
