import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loadedPath = 'recipes';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBXVI9Vm8b99de0fhSwv5qbM2ziIMPmVEc',
      authDomain: 'angular-recipe-book-c9849.firebaseapp.com'
    });
  }

  onNavigate(pathSelected: string) {
    this.loadedPath = pathSelected;
  }
}
