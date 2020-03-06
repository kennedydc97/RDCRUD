import { Component, OnInit, ViewChild } from '@angular/core';
import { Group } from 'src/app/models/Group';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('list') list: ProductListComponent

  constructor() { }

  groupList(group: Group){
    console.log(group);
    this.list.showGroup(group.cod);
  }

  ngOnInit(): void {
  }

}
