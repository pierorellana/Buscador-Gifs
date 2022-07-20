import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
})
export class SideBarComponent {
  
constructor( private gifService: GifsService ){}

get historial(){
  return this.gifService.historial;
}

buscar( termino: string ){
  this.gifService.buscarGifs(termino);
  }
}
