import { Action } from "@ngrx/store";


//dentro de [] identificar que accion se va a hacer
export const INCREMENTAR = '[Contador] Incrementar';
export const DECREMENTAR = '[Contador] Decrementar';


//voy a crear una clase que implementa la interface action
export class IncrementarAction implements Action{
    readonly type = INCREMENTAR;
}

export class DecrementarAction implements Action{
    readonly type = DECREMENTAR;
}