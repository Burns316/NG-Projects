import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  buttonBool = true;
  navBool = false;

  constructor() {
  }

  ngOnInit() {
    // this is for the toggle menue button while on mobile devices.  
    // In order to check this you must use the mobile device feature in the inspector
    if(window.screen.width < 995){
      this.buttonBool = true;
      this.navBool = false;
    }
    else{
      this.buttonBool = false;
      this.navBool = true;
    }
  }

  navBtnClick(){
    if(!this.navBool){
      this.navBool = true;
    }
    else{
      this.navBool = false;
    }
  }

}
