import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None, //got rid of margin 8 
})
export class AppComponent implements OnInit {
  
  ngOnInit(){}
}
