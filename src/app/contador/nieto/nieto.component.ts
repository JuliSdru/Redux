// import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { ResetAction } from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit {

  // @Input() contador:number; tengo que recibir del padre el contador
  // @Output() contadorCambio = new EventEmitter<number>(); EventEmitter emite un numero

  contador:number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    //suscribirnos para escuchar los cambios que pueda recibir ese contador
    //o el estado en la propiedad del contador
    //select para escuchcar solo al contador
    this.store.select('contador')
    .subscribe( contador => {
      this.contador = contador;
      console.log(contador);
    });
  }

  reset(){
    const accion = new ResetAction();
    this.store.dispatch(accion); 

  }

  // reset(){
  //   this.contador = 0;
  //   this.contadorCambio.emit(0);
  // }

}
