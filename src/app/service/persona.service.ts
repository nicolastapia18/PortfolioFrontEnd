import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonaModel } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URL = "https://progressive-bertie-nicolastapia18.koyeb.app/persona/"

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<PersonaModel[]>{
    return this.httpClient.get<PersonaModel[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<PersonaModel>{
    return this.httpClient.get<PersonaModel>(this.URL + `detail/${id}`);
  }

  public save(persona: PersonaModel): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', persona);
  }

  public update(id: number, persona: PersonaModel): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, persona);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
