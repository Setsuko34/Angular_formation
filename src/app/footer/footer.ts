import { Component, inject } from '@angular/core';
import {Preferences} from '../common/service/preferences';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-footer',
  imports: [
    FormsModule
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  listeCouleurs : string[] = [ "lightyellow", "white",
    "lightgrey" , "lightgreen" , "lightpink" , "lightblue"] ;
  public preferencesService = inject(Preferences) ;
}
