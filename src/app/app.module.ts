import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { TareasService } from './services/tareas.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TareasComponent } from './components/tareas/tareas.component';
@NgModule({
  declarations: [
    AppComponent,
    TareasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TareasService],
  bootstrap: [AppComponent],
})
export class AppModule { }
