import { Component } from '@angular/core';
import { User } from '../../_models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  //users: String[] = ['José', 'Vinicius', 'Everton', 'Nicolas'];
  users: User[] = [
    {
      nome: 'José',
      idade: 21
    },
    {
      nome: 'Vinicius',
      idade: 35
    },
    {
      nome: 'Everton',
      idade: 52
    },
    {
      nome: 'Nicolas',
      idade: 69
    },
  ]
}
