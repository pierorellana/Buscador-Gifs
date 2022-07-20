import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
})
export class ResultadoComponent  {

  get resultados(){
    return this.gifService.resultado;
  }

  constructor( private gifService: GifsService){}
}
