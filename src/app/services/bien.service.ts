import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BienService {

  constructor(private http: HttpClient) { }

  getAllBien() {
    return this.http.get(`${environment.jsonServerUrl}biens`);
  }

  getBienById(id: number) {
    return this.http.get(`${environment.jsonServerUrl}biens/?id=${id}`);
  }

}
