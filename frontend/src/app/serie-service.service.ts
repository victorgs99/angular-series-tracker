import {HttpClient} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {Serie} from './serie'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SerieServiceService {

  private baseURL: string = "http://127.0.0.1:3000";

  constructor(private http: HttpClient) {
  }

  getSeriesPorVer(): Observable<Serie[]> {
    return this.http.get<Serie[]>(this.baseURL + '/api/series/por-ver');
  }

  getSeriesViendoActualmente(): Observable<Serie[]> {
    return this.http.get<Serie[]>(this.baseURL + '/api/series/viendo-actualmente');
  }

  getFinalizados(): Observable<Serie[]> {
    return this.http.get<Serie[]>(this.baseURL + '/api/series/finalizados');
  }

  getSeriePorId(id:String): Observable<Serie> {
    return this.http.get<Serie>(this.baseURL + '/api/series/serie/'+id);
  }

  addSerie(serie: Serie): Observable<Serie[]>{
    return this.http.post<Serie[]>(this.baseURL + '/api/series/serie/add',serie);
  }

  updateSerie(id:String, serie: Serie): Observable<Serie[]>{
    return this.http.put<Serie[]>(this.baseURL + '/api/series/serie/update/'+id, serie);
  }

  deleteSeriePorId(id:String): Observable<Serie> {
    return this.http.delete<Serie>(this.baseURL + '/api/series/serie/delete/'+id);
  }

  addEpisodioSerie(id:String, episodio: any): Observable<Serie[]>{
    return this.http.post<Serie[]>(this.baseURL + '/api/serie/episodio/add/'+id, episodio);
  }

  deleteEpisodioSerie(idSerie:String, idEpisodio:String): Observable<Serie> {
    return this.http.delete<Serie>(this.baseURL + '/api/serie/'+idSerie+'/episodio/'+idEpisodio+'/delete');
  }
}
