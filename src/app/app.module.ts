import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraModule} from './calculadora';
import { CalculadoraService } from './calculadora';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalculadoraModule
  ],
  providers: [
    CalculadoraService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
