import { Component, OnInit } from '@angular/core';
import { Element } from '../card/card.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

const JOBS_DATA: Element[] = [
  {date: 'October 2019 - Now', description: 'Software Engineer, Plain Concepts. (Spain)'},
  {date: 'August 2018 - October 2019', description: '.Net Analyst Developer, Vueling Airlines S.A. (Spain)'},
  {date: 'July 2018 - October 2019', description: '.Net Analyst Developer, Hiberus Tecnología, Zaragoza (Spain)'},
  {date: 'December 2016 - July 2018', description: 'Software Engineer, Endalia HR Consulting & Software, Zaragoza (Spain).'},
  {date: 'January 2013 - September 2015', description: 'Computing services department manager, at Exea Alimentos S.A. De C.V.'}
];

const EDUCATION_DATA: Element[] = [
  {date: '2012-2016 (July)', description: 'Computer Science and Engineering Degree Graduate, at University of Zaragoza, Spain.'},
  {date: '2010-2012', description: 'High School diploma / Secondary School, at IES Reyes Católicos, Ejea de los Caballeros (Zaragoza), Spain.'}
];

const EXPERIENCE_DATA: Element[] = [
  {date: 'April 2017', description: 'Participant at S4CIP’17: 2nd Workshop on Safety & Security aSSurance'},
  {date: 'November 2016', description: 'Participant at "IV Congreso Nacional de I+D en Defensa y Seguridad, 2016" (DESE I+D 2016)'},
  {date: 'November 2016', description: 'EUHackathon 2016 (Visualizing copyright evidence) participator at Brussels (Belgium).'},
  {date: 'November 2016', description: 'ImaginChallenge Games Edition 2016 participator at Barcelona.'},
  {date: 'October 2016', description: 'HackUPC 2016 (Autumn) participator at Barcelona.'},
  {date: 'July 2016', description: 'Attendee at "Keyword search in Big Linked Data" summer school and Hackathon, CiTIUS, Santiago de Compostela, Spain.'},
  {date: 'November 2015', description: 'Finapps Party 2015 participator at Barcelona'}
];

const AWARDS_DATA: Element[] = [
  {date: '9 October 2016', description: 'Prize for the challenge: "GFT: Change the future of banking" in HackUPC 2016 (Autumn), with my partner (Ismael Rodríguez).'},
  {date: '22 July 2016', description: 'First Prize in Keystone Hackaton, "Keyword Search in Big Linked Data", with my team (Borja Espejo, Ismael Rodríguez and I).'},
  {date: 'July 2016', description: 'Paper "Process Mining to improve Security in Web Information Systems", sent and accepted at "IV Congreso Nacional de I+D en Defensa y Seguridad (DESEI+D 2016)".'},
  {date: '5 July 2016', description: 'Final Degree Project: "Process Mining to improve Security in Web Information Systems", obtaining an evaluation of 9.4 out of 10 with honors.'}
];

const VOLUNTEERING_DATA: Element[] = [
  {date: 'February 2014 - April 2015', description: 'Volunteer at "APINME: Asociación Pro Investigación para la reparación medular" (Research for spinal repair, Health). Computer Maintenance, relationship with suppliers and donors, creation/management and maintenance of website, management and control of donations (in different ways).'}
];

const CERTIFICATES_DATA: Element[] = [
  {date: 'August 2016', description: 'First Certificate In English (FCE) - University of Cambridge.'},
  {date: 'February 2015', description: 'Computer Forensics (at "Asociación de Ingenieros en Informática de Aragón - AI2Aragón").'}
];

export class AboutComponent implements OnInit {
  interests = 'Interests';

  jobsColumns = ['date', 'description'];
  jobsHeaders = ['Date', 'Position'];
  jobs = JOBS_DATA;

  educationColumns = ['date', 'description'];
  educationHeaders = ['Date', 'Studies'];
  education = EDUCATION_DATA;

  experienceColumns = ['date', 'description'];
  experienceHeaders = ['Date', 'Experience'];
  experience = EXPERIENCE_DATA;

  awardsColumns = ['date', 'description'];
  awardsHeaders = ['Date', 'Award/Honor'];
  awards = AWARDS_DATA;

  volunteeringColumns = ['date', 'description'];
  volunteeringHeaders = ['Date', 'Volunteer task'];
  volunteering = VOLUNTEERING_DATA;

  certificatesColumns = ['date', 'description'];
  certificatesHeaders = ['Date', 'Certificate'];
  certificates = CERTIFICATES_DATA;

  constructor() { }

  ngOnInit() {
  }

}
