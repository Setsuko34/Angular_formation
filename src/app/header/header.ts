import {Component, inject, input, OnInit} from '@angular/core';
import {Preferences} from '../common/service/preferences';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header{
  titre = input("titre");
  public preferencesService = inject(Preferences) ;
}
