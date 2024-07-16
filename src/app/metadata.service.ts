import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// interface Metadata {
//   charset?: string,
//   viewport?: string,
//   title?: string,
//   description?: string,
//   canonical?: string,
//   canonicalURL?: string,
//   image?: string,
//   imageAlt?: string,
//   favicon?: string,
//   color?: string,
//   author?: string,
//   robots?: string,
//   googlebot?: string,
//   sitemap?: string,
//   locale?: string,
//   site?: string,
// }

@Injectable({
  providedIn: 'root'
})
export class MetadataService {
  private apiUrl = 'https://service.userjapa.me/api/scrap';
  conteudo?: any = null;

  constructor(private http: HttpClient) { }

  fetchMetadata(url: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?url=${encodeURIComponent(url)}`);
  }

  getConteudo(): Observable<any> {
    return this.conteudo;
  }

  setConteudo(data: any) {
    this.conteudo = data;
  }
}
