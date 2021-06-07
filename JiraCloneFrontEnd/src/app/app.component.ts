import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  ngOnInit(){
    this.handleResize();
  }

  expanded = true;
  
  handleResize() {
    const match = window.matchMedia('(min-width: 1024px)');
    match.addEventListener('change', (e) => {
      console.log(e)
      this.expanded = e.matches;
    });
  }

  manualToggle(){
    this.expanded = !this.expanded;
  }
}
