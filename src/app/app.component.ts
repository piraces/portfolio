import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Raúl Piracés';
  home = 'Home';
  about = 'About me';
  projects = 'Projects';
  blog = 'Blog';
  resume = 'Resume';
  
  currentDate = new Date().getFullYear();
}

