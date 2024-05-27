import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modalpopup',
  templateUrl: './modalpopup.component.html',
  styleUrls: ['./modalpopup.component.css']
})
export class ModalpopupComponent {
  @Input() modalId: string = '';
  @Input() title: string = 'Default Title';
  @Input() content: string = 'Default Content';

}
