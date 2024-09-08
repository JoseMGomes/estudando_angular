import { UserService } from './_services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.getUser()
  }

  constructor(private UserService : UserService){}

  getUser() {
    const user =localStorage.getItem('user');
    this.UserService.setUser(user ? JSON.parse(user) : undefined);
  }
}
