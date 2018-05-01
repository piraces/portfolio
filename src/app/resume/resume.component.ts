import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  resumePathES = '/assets/files/CV-ES.pdf';
  resumePathEN = '/assets/files/CV-EN.pdf';
  constructor() { }

  ngOnInit() {
  }

}
