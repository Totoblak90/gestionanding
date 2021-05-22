import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  miFormulario: FormGroup = this.fb.group({
    email: ['tobias', [Validators.email]],
    password: ['tobias', [Validators.minLength(6)]]
  })

  ngOnInit() {
  }

  onSubmit() {
    this.router.navigateByUrl('tabs')
  }

}
