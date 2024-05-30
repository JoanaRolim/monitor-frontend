import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiteService {
  private apiUrl = 'http://localhost:3000/sites';

  constructor(private http: HttpClient) {}

  getSites(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
