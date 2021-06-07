import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input() expanded: boolean = true;
  @Output() manualToggle = new EventEmitter;
  
  constructor() { }

  ngOnInit(): void {
  }

  toggle(){}

}
