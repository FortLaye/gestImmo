import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside-filter',
  templateUrl: './aside-filter.component.html',
  styleUrl: './aside-filter.component.css'
})
export class AsideFilterComponent implements OnInit {

  rangeValue: number = 50; // Initialisation avec une valeur par défaut
  displayedRange!: number; // Chiffre à afficher sous le cursseur

  ngOnInit(): void {
    this.displayedRange = this.rangeValue * 10000; // Initialisation avec une valeur par défaut
  }


  // Fonction pour gérer le changement de valeur du Range
  onChangeRange(event: any) {
    this.displayedRange = event.target.value * 10000;
  }

}
