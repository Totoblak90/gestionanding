import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tabla } from './interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  displayedColumns: string[] = ['numero', 'fecha', 'realizado por', 'estado'];
  dataSource: Tabla[] = [];

  constructor(
    private router: Router
  ) {}

  onClick() {
    this.router.navigateByUrl('home')
  }

}
