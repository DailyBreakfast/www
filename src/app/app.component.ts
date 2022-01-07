import { Component } from '@angular/core';
import { navigation } from './shared/objects/navigation';

@Component({
  selector   : 'db-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.scss']
})
export class AppComponent {
  title = 'daily-breakfast';
  showFiller = false;
  navigation = navigation;
}
