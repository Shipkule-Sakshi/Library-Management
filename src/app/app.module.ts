// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [], // ❌ Do NOT declare standalone components here
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppComponent   // ✅ import standalone AppComponent instead of declaring
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}