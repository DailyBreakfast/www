import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'db-einstellungen-page',
  templateUrl: './einstellungen-page.component.html',
  styleUrls: ['./einstellungen-page.component.scss']
})
export class EinstellungenPageComponent implements OnInit {
  hide = true;

  constructor() { }

  ngOnInit(): void {
  }

}
