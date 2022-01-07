import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'db-artikel-page',
  templateUrl: './artikel-page.component.html',
  styleUrls: ['./artikel-page.component.scss']
})
export class ArtikelPageComponent implements OnInit {
  filled = true;
  single = false;
  lieferdienste = new Array(7);

  constructor() { }

  ngOnInit(): void {
  }

  toggleElement(event: Event): void {
    console.log(event);
    let target = event.target ||event.srcElement ||event.currentTarget;
  }

}
