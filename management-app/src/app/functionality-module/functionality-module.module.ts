import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternComponent } from '../intern/intern.component';
import { HomeComponent } from '../home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { InternService } from '../services/intern.service';
import { AppRoutingModule } from '../app-routing.module';

import {MatIconModule} from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';

import { AdderComponent } from '../adder/adder.component';
import { AddInternComponent } from '../add-intern/add-intern.component';
import { EditInternComponent } from '../edit-intern/edit-intern.component';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';


@NgModule({
  declarations: [
    InternComponent,
    HomeComponent,
    AdderComponent,
    AddInternComponent,
    EditInternComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule
  ],

  providers: [InternService]
})
export class FunctionalityModule { }
