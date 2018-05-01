import { Component, OnInit, Input } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() icon: string;
  @Input() cardTitle: string;
  @Input() displayedColumns: string[];
  @Input() headerColumns: string [];
  @Input() dataSource;

  constructor(){

  }

  ngOnInit(){

  }

}

export interface Element {
  date: string;
  description: string;
}