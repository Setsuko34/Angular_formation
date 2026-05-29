import { Component } from '@angular/core';
import {Calculatrice} from './calculatrice/calculatrice';
import {Tva} from './tva/tva';
import {TogglePanel} from '../common/components/toggle-panel/toggle-panel';
import {SimpleselectorComponent} from '../common/components/simpleselector/simpleselector';
import {ShowgradientComponent} from '../common/components/showgradient/showgradient';

@Component({
  selector: 'app-basic',
  imports: [
    Calculatrice,
    Tva,
    TogglePanel,
    SimpleselectorComponent,
    ShowgradientComponent
  ],
  templateUrl: './basic.html',
  styleUrl: './basic.css',
})
export class Basic {
  couleurChoisie: string = '';

  onChoixCouleur(valeur: string) {
    this.couleurChoisie = valeur;
    console.log('Couleur sélectionnée :', valeur);
  }
}
