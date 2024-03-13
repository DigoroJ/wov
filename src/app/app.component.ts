import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Women of valour';
  about = false;
  home = true;
  events = false;
  contacts = false;

  gotoAbout(){
    this.home = false;
    this.about = true;
    this.events = false;
    this.contacts = false;
  }

  gotoHome(){
    this.home = true;
    this.about = false;
    this.events = false;
    this.contacts = false;
  }

  gotoContacts(){
    this.home = false;
    this.about = false;
    this.events = false;
    this.contacts = true;
  }

  gotoEvents(){
    this.home = false;
    this.about = false;
    this.events = true;
    this.contacts = false;
  }
}

