import { Component, Input, } from '@angular/core';
import { Bien } from '../../../models/bien';


@Component({
  selector: 'app-bien-card',
  templateUrl: './bien-card.component.html',
  styleUrl: './bien-card.component.css'
})
export class BienCardComponent  {
  

  @Input() bien!: Bien
  descItems: string[] = [];

  date: Date = new Date();

  displayedDescription(des: string): string[] {
    return des.split(', ');
  }

}
