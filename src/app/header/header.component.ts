import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'Glauben Enterprises';
  navbar:String[]=['Home','About','Services','Contact'];
  
  navbarClick(navLink:String){
    console.log(navLink)
  }
}
