// import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { DividirAction, MultiplicarAction } from '../contador.actions';


@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  // @Input() contador:number; tengo que recibir del padre el contador
  // @Output() cambioContador = new EventEmitter<number>(); EventEmitter emite un numero

  contador: number;

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

  multiplicar()
  {
    const accion = new MultiplicarAction(5); //creamos la accion, (5) numero x el cual lo quiero multiplicar payload
    this.store.dispatch(accion); //store ejecute el reducer
    //this.contador *= 2;
    //this.cambioContador.emit(this.contador);
  }

  dividir()
  {
    const accion = new DividirAction(5); 
    this.store.dispatch(accion); 
    //this.contador /= 2;
    //this.cambioContador.emit(this.contador);
  }

  // resetNieto(nuevoContador)
  // {
  //   this.contador = nuevoContador;
  //   this.cambioContador.emit(this.contador);
  // }

}
