import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  bynaryImage!: string;

  apiUrl = 'http://localhost:8080';

  biens: any = [];

  ngOnInit(): void {
    this.http.get(`${this.apiUrl}/bien/`).subscribe(((response: any) => {
       this.biens = response;
    }))

    this.http.get(`${this.apiUrl}/images`).subscribe(((response: any) => {
      this.bynaryImage = response[0]?.imageData;
    }))
  }


}
