import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  //template:'<div>{{result}}</div>',
  styleUrl: './my-component.component.css'
})
export class MyComponentComponent {
  result:number=0
  constructor(){}

  calculateSum(a:number,b:number):void{
    this.result=a+b
  }
}
