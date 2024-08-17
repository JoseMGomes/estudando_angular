import { Component, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements DoCheck{

  num: number = 0;

  adiciona1(){
    this.num++;
  }
  remove1(){
    this.num--;
  }

  ngDoCheck(): void {
    console.log('Uma mudança foi realizada')
  }
}
