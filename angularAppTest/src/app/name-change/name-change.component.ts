import { Component } from '@angular/core';

@Component({
  selector: 'app-name-change',
  templateUrl: './name-change.component.html',
  styleUrl: './name-change.component.css'
})
export class NameChangeComponent {
  isNameChange:boolean=false

  toogleChange():void{
    this.isNameChange=!this.isNameChange
  }
}
