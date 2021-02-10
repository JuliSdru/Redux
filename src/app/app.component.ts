import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { DecrementarAction, IncrementarAction } from './contador/contador.actions';

interface AppState { //voy a mandar al store, interface q dice q va a manejar el store
  contador: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'redux-app';

  contador: number;

  constructor(private store: Store<{contador: number}>){
    this.store.subscribe( state =>
      {
        // console.log(state);
        this.contador = state.contador;
      });
  }

  incrementar(){
    //this.contador ++;
    //todas las acciones tiene un type
    // const accion: Action = { 
    //   type: 'INCREMENTAR'
    // };
    //crea de forma automatica el incrementar action
    const accion =  new IncrementarAction();
    this.store.dispatch(accion);
  }


  

  decrementar(){
    //this.contador --; 
    //todas las acciones tiene un type
    // const accion: Action = { 
    //   type: 'DECREMENTAR'
    // };
    //crea de forma automatica el incrementar action
    const accion =  new DecrementarAction();
    this.store.dispatch(accion);
  }
  }
