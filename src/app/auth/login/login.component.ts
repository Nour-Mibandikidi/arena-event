import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { emailValidator } from 'src/app/shared/validators/custom-validators';
import { HoverDirective } from 'src/app/directive/hover.directive';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  signUpForm!: FormGroup;
  message!: string;
  SignUpOrSignIn: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.signUpForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, emailValidator()]],
    });
  }

  SignUpOrSignInMethod() {
    this.SignUpOrSignIn = !this.SignUpOrSignIn;
  }

  signUp() {
    console.log('Méthode signUp appelée');
    console;
    if (this.signUpForm.valid) {
      const user = this.signUpForm.value;
      console.log(user);
      this.authService.addUser(user).subscribe(
        (response) => {
          this.message = 'Login réussi';
          console.log('Connexion réussie', response);
          this.authService.saveUser();
          this.router.navigate(['/home']);
        },
        (error) => {
          this.message = "Échec lors de l'inscription";
          console.error('Échec de la connexion', error);
        }
      );
    }
  }

  login(): void {
    if (this.loginForm.valid) {
      const user = this.loginForm.value;
      console.log(user);
      this.authService.login(user).subscribe(
        (response) => {
          this.message = 'Login réussi';
          console.log('Connexion réussie', response);
          this.authService.saveUser();
          this.authService.user = response;
          localStorage.setItem("user",this.authService.user.id);
          this.router.navigate(['/home']);
        },
        (error) => {
          this.message = "Échec de l'authentification";
          console.error('Échec de la connexion', error);
        }
      );
    }
  }
}
