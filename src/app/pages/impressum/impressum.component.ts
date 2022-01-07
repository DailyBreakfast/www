import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChangelogComponent } from './changelog/changelog.component';
import  pack  from '../../../../package.json';

@Component({
  selector: 'db-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.scss']
})
export class ImpressumComponent implements OnInit {
  version = '0.0.0';

  constructor(public dialog: MatDialog) {
    this.version = pack.version;
  }

  ngOnInit(): void {
  }


  openChangelog() {
    const dialogRef = this.dialog.open(ChangelogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
