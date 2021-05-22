import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  dataSource=["Vildom"]

  constructor(
    private router: Router
  ) {}

  onClick() {
    this.router.navigateByUrl('home')
  }

}
