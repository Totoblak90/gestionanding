import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  formularioSendEmail: FormGroup = this.fb.group({
    email: ['', [Validators.email]],
    contenido: ['', [Validators.minLength(10)]]
  })

  onClick() {
    this.router.navigateByUrl('home')
  }

  sendEmail() {
    console.log('mail enviado')
  }

}
