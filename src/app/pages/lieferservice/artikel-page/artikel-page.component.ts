import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImprintComponent } from './imprint/imprint.component';

@Component({
  selector: 'db-artikel-page',
  templateUrl: './artikel-page.component.html',
  styleUrls: ['./artikel-page.component.scss']
})
export class ArtikelPageComponent implements OnInit {
  filled = true;
  single = false;
  lieferdienste = new Array(7);

  constructor(public dialog: MatDialog) { }


  openInfo() {
    const dialogRef = this.dialog.open(ImprintComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }

}
