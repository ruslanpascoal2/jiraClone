import { Component, OnInit } from '@angular/core';
import { faJira } from '@fortawesome/free-brands-svg-icons'
import { faSearch, faPlus, faQuestionCircle} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  faJira = faJira;
  faSearch = faSearch;
  faPlus = faPlus;
  faQuestionCircle = faQuestionCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
