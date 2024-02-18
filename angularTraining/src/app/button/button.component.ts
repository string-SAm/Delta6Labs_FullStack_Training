import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: '<button (click)="onClick()">Click me</button>',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  onClick():void{
    console.log('Button Clicked'); 
  }
}
