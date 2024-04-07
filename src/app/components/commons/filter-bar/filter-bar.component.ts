import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.css'
})
export class FilterBarComponent implements OnInit {

  currentDate!: string;
  ngOnInit(): void {
    this.currentDate = new Date().toISOString().slice(0, 10).trim();
  }

}
