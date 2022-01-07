import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'db-artikel',
  templateUrl: './artikel.component.html',
  styleUrls: ['./artikel.component.scss']
})
export class ArtikelComponent implements OnInit {

  @HostBinding('class.close')
  close: boolean = true;
  days= [
    {label: "Montag"},
    {label: "Dienstag"},
    {label: "Mittwoch"},
    {label: "Donnerstag"},
    {label: "Freitag"},
    {label: "Samstag"},
    {label: "Sonntag"},
    {label: "Feiertage"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
