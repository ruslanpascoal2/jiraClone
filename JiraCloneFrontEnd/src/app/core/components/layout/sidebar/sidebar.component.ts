import { Component, Input, OnInit } from '@angular/core';
import { faChalkboard, faCog, faTruck  } from "@fortawesome/free-solid-svg-icons";

export interface menuItem{
  displayName: string,
  active?: boolean,
  route: string | string[],
  icon: any
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() set expanded(value: boolean){
    this._expanded = value;
    setTimeout(() => this.hideContent = !this.hideContent, !!value ? 200 : 0 );
  };

  get expanded(){
    return this._expanded;
  }

  _expanded: boolean = true;
  hideContent: boolean = true;

  menuItems:menuItem[] = [
    { 
      displayName: "Kanban Board",
      active: true,
      icon: faChalkboard,
      route: ["", "board"]
    },
    { 
      displayName: "Project Settings",
      active: false,
      icon: faCog,
      route: "project-settings"
    },
    { 
      displayName: "Releases",
      active: false,
      icon: faTruck,
      route: "releases"
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
