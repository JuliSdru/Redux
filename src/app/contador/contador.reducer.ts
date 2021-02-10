// import { Action } from '@ngrx/store';
import { ActionsSubject } from '@ngrx/store';
// import { RESET } from '@ngrx/store-devtools/src/actions';
import { actions, DECREMENTAR, DIVIDIR, INCREMENTAR, MULTIPLICAR, RESET} from './contador.actions';

// poder llamar a todos los imports en una sola linea
// import * as fromContador from './contador.actions';
// export function contadorReducer (state: number = 10, action: fromContador.actions)




export function contadorReducer (state: number = 10, action: actions)
{
    switch(action.type)
    {
        
        // poder llamar a todos los imports en una sola linea
        // case fromContador.INCREMENTAR
        case INCREMENTAR:
            return state + 1;
        case DECREMENTAR:
            return state - 1;
        case MULTIPLICAR:
            return state * action.payload;
        case DIVIDIR:
            return state / action.payload;
        case RESET:
            return 0;
        default:
            return state;
    }
}