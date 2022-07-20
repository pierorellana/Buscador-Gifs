import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGIfs } from '../Interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

    private api: string = 'sPlVlB2XX7WARwxanhoditn89j6wsODV';

    private servicioUrl: string = 'https://api.giphy.com/v1/gifs';

    private _historial: string[] = [];

    public resultado: Gif[] = [];

    get historial(){
      return [...this._historial];
    }

    constructor( private http: HttpClient ){
      if( localStorage.getItem('historial') ){
        this._historial = JSON.parse( localStorage.getItem('historial')! ) || [];
      }

        this.resultado = JSON.parse( localStorage.getItem('resultado')! ) || [];
    }

    buscarGifs( query: string ){

      query = query.trim().toLocaleLowerCase();

      if( !this._historial.includes( query ) ){
        this._historial.unshift( query );
        this._historial = this._historial.splice(0,15);

        localStorage.setItem('historial', JSON.stringify( this._historial ));
      }

      const params = new HttpParams()
        .set('api_key', this.api)
        .set('limit', '24')
        .set('q', query);

      this.http.get<SearchGIfs>(`${ this.servicioUrl }/search`,{ params })
      .subscribe(( resp ) => { 
        this.resultado = resp.data;
        localStorage.setItem('resultado', JSON.stringify( this.resultado ));
      })
    }
}
