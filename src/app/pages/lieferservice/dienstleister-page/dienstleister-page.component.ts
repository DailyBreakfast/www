import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'db-dienstleister-page',
  templateUrl: './dienstleister-page.component.html',
  styleUrls: ['./dienstleister-page.component.scss']
})
export class DienstleisterPageComponent implements OnInit {

  lieferdienste = new Array(23); // oder Value = new Array(0)

  constructor() { }

  ngOnInit(): void {
  }

}
