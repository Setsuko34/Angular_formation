import {Component, input, model} from '@angular/core';

@Component({
  selector: 'app-toggle-panel',
  imports: [],
  templateUrl: './toggle-panel.html',
  styleUrl: './toggle-panel.css',
})
export class TogglePanel {
  panelOpenState=model(false);
  title /* : string */ = input( 'default panel title' );
  constructor() { }
}
