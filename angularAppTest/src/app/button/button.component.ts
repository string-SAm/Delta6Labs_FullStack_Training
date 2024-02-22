import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  count=0
  
  incrementCounter(){
    this.count+=1
  }

  decrementCounter(){
    this.count-=1
  }
}
