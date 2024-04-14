import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BienService {

  constructor(private http: HttpClient) { }

  getAllBien():Observable<any> {
    return this.http.get(`${environment.apiUrl}biens`);
  }

  getBienById(id: number) {
    return this.http.get(`${environment.apiUrl}biens/${id}`);
  }

}
