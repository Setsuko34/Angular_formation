import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-gradient',
  imports: [CommonModule],
  templateUrl: './showgradient.html',
  styleUrl: './showgradient.css',
  standalone: true
})
export class ShowgradientComponent {
  // Input : la couleur sélectionnée
  selectedColor = input<string>('');

  // Map des couleurs Tailwind en codes hex
  private colorMap: { [key: string]: { dark: string; light: string } } = {
    'purple': { dark: '#9333ea', light: '#e9d5ff' },
    'green': { dark: '#16a34a', light: '#dcfce7' },
    'blue': { dark: '#2563eb', light: '#dbeafe' }
  };

  // Retourne le gradient en style CSS
  getGradientStyle(): string {
    const color = this.selectedColor();
    if (!color || !this.colorMap[color]) {
      return 'background-color: #e5e7eb';
    }

    const { dark, light } = this.colorMap[color];
    return `background: linear-gradient(135deg, ${dark} 0%, ${light} 100%)`;
  }

  // Retourne la classe pour le texte
  getTextColorClass(): string {
    const color = this.selectedColor();
    if (!color) return 'text-gray-500';

    return `text-${color}-700`;
  }

  // Retourne la couleur du texte en hex pour éviter les classes dynamiques
  getTextColor(): string {
    const textColorMap: { [key: string]: string } = {
      'purple': '#a855f7',
      'green': '#22c55e',
      'blue': '#3b82f6'
    };
    return textColorMap[this.selectedColor()] || '#6b7280';
  }
}
