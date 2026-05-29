import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-simple-selector',
  imports: [CommonModule],
  templateUrl: './simpleselector.html',
  styleUrl: './simpleselector.css',
})
export class SimpleselectorComponent {
  // Input : titre du sélecteur
  title = input<string>('Sélecteur');

  // Input : liste des valeurs disponibles
  values = input<string[]>([]);

  // Output : événement émis quand une valeur est choisie
  choix = output<string>();

  // Variable locale pour tracker la sélection
  selectedValue = '';

  onSelect(value: string) {
    this.selectedValue = value;
    this.choix.emit(value);
  }
  // Retourne les classes pour le conteneur des résultats
  getResultBoxClasses(): string {
    if (!this.selectedValue) return 'bg-gray-50 border-2 border-gray-300';

    return `bg-${this.selectedValue}-200 border-2 border-${this.selectedValue}-500`;
  }

  // Retourne les classes pour le texte
  getResultTextClasses(): string {
    if (!this.selectedValue) return 'text-gray-600';

    return `text-${this.selectedValue}-600`;
  }
}
