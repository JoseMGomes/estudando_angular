import { ToastrService } from 'ngx-toastr';
import { User } from '../../_models/user';
import { UserGit } from '../../_models/userGit';
import { UserService } from './../../_services/user.service';
import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  user: UserGit | undefined;
  username: string = '';

  constructor(
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  getGitUser() {
    this.userService.getGitUser(this.username).subscribe(
      (response: UserGit) => {
        this.user = response;
      },
      (error) => {
        this.toastr.error(error.error.message);
      }
    );
  }
}
