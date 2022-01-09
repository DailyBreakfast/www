import { Component, OnInit } from '@angular/core';
import { navigation } from '../../shared/objects/navigation';

@Component({
  selector: 'db-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  navigation = navigation;

  constructor() { }

  ngOnInit(): void {
  }

}
