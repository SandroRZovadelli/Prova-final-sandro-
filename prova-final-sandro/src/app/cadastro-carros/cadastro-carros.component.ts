import { Component, OnInit } from '@angular/core';
import { Carro } from '../carro.model';

@Component({

  selector: 'app-cadastro-carros',
  templateUrl: './cadastro-carros.component.html',
  styleUrls: ['./cadastro-carros.component.css']
})
export class CadastroCarrosComponent implements OnInit {
  carro: Carro = {} as Carro;
  constructor() { }

  ngOnInit(): void {
  }

}
