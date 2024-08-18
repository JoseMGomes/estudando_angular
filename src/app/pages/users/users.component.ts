import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  //users: String[] = ['José', 'Vinicius', 'Everton', 'Nicolas'];

  userSelecionado: User | undefined;
  userForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.userForm = this.fb.group({
      nome: ['', [Validators.required, Validators.maxLength(40)]],
      idade: [
        '',
        [Validators.required, Validators.min(18), Validators.max(80)],
      ],
    });
  }

  SubmitForm() {
    if (this.userForm.valid) {
      this.users.push(this.userForm.value);
      this.userForm.reset();
    }
  }

  users: User[] = [
    {
      nome: 'José',
      idade: 21,
    },
    {
      nome: 'Vinicius',
      idade: 35,
    },
    {
      nome: 'Everton',
      idade: 52,
    },
    {
      nome: 'Nicolas',
      idade: 69,
    },
  ];

  infoUserSelecionado(user: User) {
    this.userSelecionado = user;
  }
}
