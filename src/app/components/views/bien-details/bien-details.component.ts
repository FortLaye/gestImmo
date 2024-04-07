import { Component, OnInit } from '@angular/core';
import { BienService } from '../../../services/bien.service';
import { ActivatedRoute } from '@angular/router';
import { Bien } from '../../../models/bien';

@Component({
  selector: 'app-bien-details',
  templateUrl: './bien-details.component.html',
  styleUrl: './bien-details.component.css'
})
export class BienDetailsComponent implements OnInit {

  public bien!: Bien;

  constructor(private bienService: BienService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const id: number = +this.route.snapshot.params['id'];

    this.bienService.getBienById(id).subscribe(((response: any) => {
      this.bien = response[0];
    }))

  }

}
