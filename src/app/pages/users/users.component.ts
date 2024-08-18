import { Component } from '@angular/core';
import { User } from '../../_models/user';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  //users: String[] = ['José', 'Vinicius', 'Everton', 'Nicolas'];

  userSelecionado: User | undefined;
  userForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}


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
  ];

  infoUserSelecionado(user: User){
    this.userSelecionado = user
  }
}
