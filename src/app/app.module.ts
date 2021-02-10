import { ModuleWithComponentFactories, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//ngrx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { contadorReducer } from './contador/contador.reducer';

import { AppComponent } from './app.component';
import { HijoComponent } from './contador/hijo/hijo.component';
import { NietoComponent } from './contador/nieto/nieto.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    NietoComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({contador: contadorReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
    // maxAge solo puede manejar/registrar 25 estados/acciones desde que empieza su programa hasta ult momento
    // logOnly bandera para que impida que los usarios puedan manipular los estados manualmente
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
