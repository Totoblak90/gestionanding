import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// import Swal from 'sweetalert2'


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
  miFormulario: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  siHayError!: string;

  constructor( 
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  login() { 

    // this.authService.login( this.miFormulario.controls.email.value , this.miFormulario.controls.password.value)
    //   .subscribe(
    //     ok => {
    //       if (ok === true) {
    //         this.router.navigateByUrl('/dashboard')
    //       } else {
    //          Swal.fire('Error', ok, 'error')
    //       }

    //     }
    //    )
    this.router.navigateByUrl('/tabs');
  }
}
