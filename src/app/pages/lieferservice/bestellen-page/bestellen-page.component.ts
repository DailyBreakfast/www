import { Component, OnInit } from '@angular/core';

@Component({
  selector   : 'db-bestellen-page',
  templateUrl: './bestellen-page.component.html',
  styleUrls  : ['./bestellen-page.component.scss']
})
export class BestellenPageComponent implements OnInit {
  filled = true;
  single = false;
  lieferdienste = new Array(7);

  seasons = [
    {
      label: 'SEPA-Lastschrift',
      icon : ''
    },
    {
      label: 'Überweisung',
      icon : ''
    },
    {
      label: 'PayPal',
      icon : ''
    },
    {
      label: 'Kreditkarte',
      icon : ''
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
