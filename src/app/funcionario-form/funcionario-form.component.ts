import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent {

  ultimoId = 0;
  nome = 'Thiago';
  adicionado = false;
  @Output('criado') funcionarioAdicionado = new EventEmitter;

  adicionar() {
    const numero = Math.round(Math.random() * 100);
    this.adicionado = true;

    const funcionario:any = {
      id: ++this.ultimoId,
      nome: this.nome
    };

    this.funcionarioAdicionado.emit(funcionario);

    setTimeout(() => {
      this.adicionado = false;
    }, 2000);
  }

  clean() {
    this.nome = '';
  }
}

export interface Funcionario {
  id: number
  nome: string
}
