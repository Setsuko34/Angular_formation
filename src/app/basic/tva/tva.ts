import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Signal, signal, computed } from '@angular/core';

@Component({
  selector: 'app-tva',
  imports: [
    FormsModule],
  templateUrl: './tva.html',
  styleUrl: './tva.css',
})
export class Tva {
   prixHT= signal<number>(0);
  tauxSel = signal<number>(20);
  tva = computed(() => {
    return this.prixHT() * this.tauxSel() / 100;
  });
  ttc = computed(() => {
    return this.prixHT() + this.tva();
  });

  tauxPossibles = [5,10,20];
  mapTauxCategorieProd= new Map<number,string[]>();
  // Signal pour les catégories du taux sélectionné
  listeCategoriePourTauxSel = computed(() => {
    return this.mapTauxCategorieProd.get(this.tauxSel()) || [];
  });

  // Historique des calculs
  historiqueCalculs = signal<string[]>([]);
  constructor(){
    this.mapTauxCategorieProd.set(20 , [ "services" ,"outils" , "objets"]);
    this.mapTauxCategorieProd.set(10 , [ "transports" ,"hotels" , "restaurants" , "spectacles" , "médicaments"]);
    this.mapTauxCategorieProd.set(5 , [ "aliments" ,"énergies" , "livres" ]);
  }
  onPrixHTChange(event: any) {
    const value = parseFloat(event.target.value);
    if (!isNaN(value)) {
      this.prixHT.set(value);
      this.ajouterHistorique();
    }
  }

  onSelectTaux(event: any) {
    const val = parseFloat(event.target.value);
    this.tauxSel.set(val);
    this.ajouterHistorique();
  }

  private ajouterHistorique() {
    const calcul = `${this.prixHT().toFixed(2)} € × ${this.tauxSel()}% = TVA: ${this.tva().toFixed(2)} € | TTC: ${this.ttc().toFixed(2)} €`;
    this.historiqueCalculs.update(histoire => [...histoire, calcul]);
  }
  getTauxArray(): number[] {
    return this.tauxPossibles.sort((a, b) => b - a);  }

}
