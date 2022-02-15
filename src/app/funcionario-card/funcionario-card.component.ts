import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  //styleUrls: ['./funcionario-card.component.css']
  styles: [`
    .card-block {
      text-transform: uppercase;
      color: blue;
    }
  `]
})

export class FuncionarioCardComponent {

  @Input('employee') funcionario:any;

  getClassesCss() {
    return ['badge bg-danger', 'badge bg-dark'];
  }
  
  isAdmin() {
    return this.funcionario.nome.startsWith('R');
  }

  // getEstilosCartao() {
  //   return {
  //     'border-width.px': this.funcionario.id,
  //     'background-color': this.funcionario.id % 2 == 0 ?
  //     'lightblue' : 'lightgreen'
  //   };
  // }

  getEstilosCartao() {
    const map = new Map<number, string>([
      [0, 'red'],
      [1, 'yellow'],
      [2, 'green']
    ]);
  
    return {
      backgroundColor: map.get(this.funcionario.id % 3),
      'border-width.px': this.funcionario.id
    };    
  }
 
}
