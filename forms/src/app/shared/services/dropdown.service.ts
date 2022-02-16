import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { EstadoBr } from '../models/estado-br';

@Injectable()
export class DropdownService {

  constructor(private http: HttpClient) { }

  getEstadoBr(){
    return this.http.get<EstadoBr[]>('assets/dados/estadosbr.json').pipe();
  }

  getCargos(){
    return [
      { nome: 'Dev', nivel: 'Junior', desc: 'Dev Jr'},
      { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl'},
      { nome: 'Dev', nivel: 'Senior', desc: 'Dev Sr'},
      
    ];
  }
}
