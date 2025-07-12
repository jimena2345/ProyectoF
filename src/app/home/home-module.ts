import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing-module';
import { Home } from './home';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';


@NgModule({
  declarations: [
    Home,
   
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    ReactiveFormsModule,

  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
  ],
  
})
export class HomeModule {

 }
