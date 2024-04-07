import { Component, OnInit } from '@angular/core';
import { BienService } from '../../../services/bien.service';
import { Bien } from '../../../models/bien';
@Component({
  selector: 'app-bien-list',
  templateUrl: './bien-list.component.html',
  styleUrl: './bien-list.component.css'
})
export class BienListComponent implements OnInit {

  biens!: Bien[];

  constructor(private bienService: BienService) { }

  ngOnInit(): void {
    this.bienService.getAllBien().subscribe((data: any) => {
      this.biens = data;
    });
  }
}
