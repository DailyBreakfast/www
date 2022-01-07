import { Component, OnInit } from '@angular/core';
import { Color } from '@swimlane/ngx-charts/lib/utils/color-sets';
import { multi } from './demodata';

@Component({
  selector: 'db-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
  selected = 5;



  filter = [
    {value: 1, viewValue: 'Letzte 7 Tage'},
    {value: 2, viewValue: 'Letzte 30 Tage'},
    {value: 3, viewValue: 'Letzte 3 Monate'},
    {value: 4, viewValue: 'Letzte 6 Monate'},
    {value: 5, viewValue: 'Letzte 12 Monate'},
    {value: 6, viewValue: 'Letzte 24 Monate'}
  ]

  multi: any[] | undefined;

  colorScheme: string | Color = 'light';

  constructor() {
    Object.assign(this, { multi });
  }

  ngOnInit(): void {
  }

}
