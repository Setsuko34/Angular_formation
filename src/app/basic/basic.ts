import { Component } from '@angular/core';
import {Calculatrice} from './calculatrice/calculatrice';
import {Tva} from './tva/tva';

@Component({
  selector: 'app-basic',
  imports: [
    Calculatrice,
    Tva
  ],
  templateUrl: './basic.html',
  styleUrl: './basic.css',
})
export class Basic {}
