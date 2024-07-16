import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-code-result',
  templateUrl: './code-result.component.html',
  styleUrl: './code-result.component.scss'
})
export class CodeResultComponent {
  @Input() code?: any;

  copy() {
    const teste: HTMLElement = document.querySelector("code")!;
    const range = document.createRange();
    range.selectNodeContents(teste);

    const selection = window.getSelection();
    if (selection) {
      selection.removeAllRanges();
      selection.addRange(range);
    }

    try {
      const successful = document.execCommand('copy');
      const msg = successful ? 'Texto copiado com sucesso!' : 'Falha ao copiar o texto';
      console.log(msg);
    } catch (err) {
      console.error('Erro ao copiar o texto: ', err);
    }
  }
}
