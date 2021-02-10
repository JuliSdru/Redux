import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit {

  @Input() contador:number; //tengo que recibir del padre el contador
  @Output() contadorCambio = new EventEmitter<number>(); //EventEmitter emite un numero

  constructor() { }

  ngOnInit(): void {
  }

  reset(){
    this.contador = 0;
    this.contadorCambio.emit(0);
  }

}
