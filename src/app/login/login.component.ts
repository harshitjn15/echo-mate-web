import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, 
    private router: Router) {
  }
  ngOnInit(): void {
  }

  user: User = {
    username: '',
    password: '',
    email: ''
  };

  registerUser: User = {
    username: '',
    password: '',
    email: ''
  };

  isRegisterPopupVisible: boolean = false;

  onSubmit() {
    this.userService.login(this.user).subscribe(
      (response) => {
        // Successful login
        console.log('User Logged In successfully:', response);
        this.router.navigate(['/feeds']);
        // Handle further actions like navigation to another page
      },
      (error) => {
        // Error occurred during login
        if (error.status === 401) {
          alert('Unauthorized: Incorrect username or password.');
        } else {
          alert('An error occurred while logging in');
        }
      }
    );
  }

  openRegisterPopup() {
    this.isRegisterPopupVisible = true;
  }

  closeRegisterPopup() {
    this.isRegisterPopupVisible = false;
  }

  onRegisterSubmit() {
    this.userService.registerUser(this.registerUser).subscribe(
      (response) => {
        // Successful login
        console.log('User Logged In successfully:', response);
      },
      (error) => {
        // Error occurred during login
        if (error.status === 401) {
          alert('Unauthorized: Incorrect username or password.');
        } else {
          alert('An error occurred while logging in');
        }
      }
    );

    this.closeRegisterPopup();
  }
}
