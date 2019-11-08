import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'tda-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  readonly loginForm = this.fb.group({
    userNameOrEmailAddress: ['', [ Validators.required ]],
    password: ['', [ Validators.required ]],
    rememberClient: [ true ]
  });

  constructor(
    protected readonly fb: FormBuilder,
    protected readonly auth: AuthService,
    protected readonly snackbar: MatSnackBar,
    protected readonly router: Router
  ) { }

  ngOnInit() {
  }

  async login(): Promise<void> {
    try {
      if (this.loginForm.invalid) {
        throw new Error('Por favor, preencha os campos corretamente!');
      }

      const data = this.loginForm.value;
      this.loginForm.disable();

      await this.auth.login(data);

      this.router.navigateByUrl('/');
    } catch (err) {
      this.snackbar.open(err.message, 'Entendi');
    } finally {
      this.loginForm.enable();
    }
  }

}
