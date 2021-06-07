import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faChevronRight, faChevronLeft} from "@fortawesome/free-solid-svg-icons"


@Component({
  selector: 'app-resizer',
  templateUrl: './resizer.component.html',
  styleUrls: ['./resizer.component.scss']
})
export class ResizerComponent implements OnInit {
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  @Input() expanded: boolean = true;
  @Output() manualToggle = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

}
