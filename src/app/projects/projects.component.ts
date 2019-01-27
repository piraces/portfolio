import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {
  projects: Project[];
  projectsRows: Array<Project[]>;

  PROJECTS_DATA: Project[] = [
    {title: 'developer.li', link: 'https://developer.li', subtitle: 'Subdomains for free using the domain developer.li (built in Angular)', imagePath: '/assets/img/developerli.png', description: 'Simple subdomain availability check web which helps you to configure a free subdomain in the developer.li domain (made with the NES.css awesome style).'},
    {title: 'WTransfer', link: 'https://t.me/wtransfer_bot', subtitle: 'Telegram Bot built with AWS Lambda and WeTransfer API', imagePath: '/assets/img/wtransfer.png', description: 'Bot built with Node.js in AWS which you can send files and it automatically uploads it to WeTransfer, to provide you a public link to download the file.'},
    {title: 'Fiestas de Ejea', link: 'https://github.com/piraces/fiestasEjea', subtitle: 'Ionic (Angular), Firebase with CI/CD (bitrise.io)', imagePath: '/assets/img/fiestas.png', description: 'Festivities info app for my native region, incuding firebase integration. Developed with Ionic (angular). Available for Android and iOS.'},
    {title: 'Portfolio', link: 'https://github.com/piraces/portfolio', subtitle: 'Angular, Typescript with CI/CD (Jenkins)', imagePath: '/assets/img/portfolio.png', description: 'Angular portfolio made static for my personal page, hosted on github and managed by Jenkins to perform CI/CD.'},
    {title: 'Adidas Assistant', link: 'https://github.com/Bozaneros/AdidasAssistant', subtitle: 'Tensorflow + Python (for recognition), Node.js (backend), MongoDB (DB), Facebook API, Recast.AI.', imagePath: '/assets/img/adi.png', description: 'Facebook Bot that acts as an assistant. It is able to interpret human natural language, and perform different actions such as recognize Adidas\' trainers.'},
    {title: '© - graph', link: 'https://github.com/ismaro3/c-graph', subtitle: 'Javascript, HTML5, CSS3, SPARQL, Java Spark, Vis.js.', imagePath: '/assets/img/c-graph.png', description: 'Tools related to the visualisation of copyright evidence and/or enhance the Copyright Wiki (copyrightevidence.org).'},
    {title: 'Stock Surfer', link: 'https://github.com/albertomg994/Stock-Surfer', subtitle: 'Javascript, Phaser (HTML5).', imagePath: '/assets/img/stocksurfer.png', description: 'Mobile game where you have to surf the stock graphs of several enterprises and change among them to remain above of a minimum level (colecting bonuses).'},
    {title: 'Stores for Me!', link: 'http://devpost.com/software/stores4me', subtitle: 'Javascript, AngularJS, HTML5, CSS3, MongoDB, NodeJS, Leaflet.js.', imagePath: '/assets/img/stores4me.png', description: 'Heat map of bank transactions so a customer can see where people like him/her (age, salary,...) buys more frequently.'},
    {title: 'Linked Data Hurricanes Info', link: 'https://github.com/borjaeg/keystone', subtitle: 'Java Spark, Javascript.', imagePath: '/assets/img/keystone.png', description: 'Web application that shows in an interactive map the zones affected by hurricanes. For that, it uses Open and Linked Data from DBPedia and Geonames.'},
    {title: 'Process Mining for Security', link: 'http://sid.cps.unizar.es/PMS/', subtitle: 'Process Mining, Data Mining, Model Driven Software Engineering, Web Information Systems.', imagePath: '/assets/img/pms.png', description: 'Approach for detecting new threats in Web information systems before they materialize and produce some kind of damage. This approach is based on process mining techniques and semiautomatic creation of formal models, from the diagrams produced during the design and development phases of the system to be protected and its log files.'},
    {title: 'PocketShop!', link: 'https://github.com/WallaTeam/FinApps15-App', subtitle: 'Java, AngularJS + Ionic, Python.', imagePath: '/assets/img/pocketshop.png', description: 'A solution for small business that provides a stock, client and sales management system, using a Raspberry Pi and one or more Android devices.'},
    {title: 'JajaTweets', link: 'https://github.com/piraces/JajaTweets', subtitle: 'NodeJS, Express, AngularJS, MongoDB.', imagePath: '/assets/img/jajaTweets.png', description: 'Web Social Managing tool for Twitter, where users can add and manage multiple Twitter accounts (including all Twitter actions available). Users can also visualize stats of their accounts, short URLs and subscribe to certain Hashtags, accounts and search terms.'},
    {title: 'WallaLinks!', link: 'https://github.com/WallaTeam/WallaLinks', subtitle: 'Spring Framework (Java), ExpressJS, AngularJS, MongoDB.', imagePath: '/assets/img/wallalinks.png', description: 'URL-Shortener web service and platform with advanced features like protected links, expiration, admin and user panel and stats.'},
    {title: 'WallaPet', link: 'https://github.com/WallaTeam/Wallapet', subtitle: 'Android SDK, JavaEE.', imagePath: '/assets/img/wallapet.png', description: 'Android app for making simple deals between sellers/buyers of Animals and Animals in adoption.'}
  ];

  constructor() {
  }

  ngOnInit() {
    this.projects = this.PROJECTS_DATA;
    this.projectsRows = new Array<Project[]>();
    var size = 3;
    while (this.projects.length > 0)
        this.projectsRows.push(this.projects.splice(0, size));
  }

}

export interface Project {
  title: string;
  link: string;
  subtitle: string;
  imagePath: string;
  description: string;
}

