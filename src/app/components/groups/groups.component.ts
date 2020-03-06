import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Group } from 'src/app/models/Group';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  public groups: Group[] = []
  @Output() clickedGroup = new EventEmitter();

  private allGroups: Group = new Group(0, "TODOS");

  constructor(private http: HttpService) {


    this.http.getGroup().subscribe((data) => { this.groups = [this.allGroups, ...data] });
    

  }
  
  ngOnInit(): void {
  }

}
