import {Component, OnInit} from '@angular/core';
import {Friend} from "./friend";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{


  constructor() {
  }

  languages = [{
    languageId: 1,
    languageName: 'HTML'
  }, {
    languageId: 2,
    languageName: 'CSS',
  }, {
    languageId: 3,
    languageName: 'JavaScript'
  }, {
    languageId: 4,
    languageName: 'Java'
  }];
  languageName = 'Select Language';

  friendModel= new Friend("", "", "", 0, null);
}
