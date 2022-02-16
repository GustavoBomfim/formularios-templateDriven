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
}
