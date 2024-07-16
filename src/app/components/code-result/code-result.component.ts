import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-code-result',
  templateUrl: './code-result.component.html',
  styleUrl: './code-result.component.scss'
})
export class CodeResultComponent {
  @Input() code?: any;
}
