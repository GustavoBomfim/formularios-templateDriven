import { Component, OnInit } from '@angular/core';
//import { FormGroup } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null,
    cep: null,
    numero: null,
    rua: null,
    complemento: null,
    bairro: null,
    cidade: null,
    estado: null,
  }

  onSubmit(form: any){
    console.log(form);
    //console.log(this.usuario);

    this.http.post('https://httpbin.org/post', JSON.stringify(form.value))
      .subscribe(dados => {
        console.log(dados);
        form.form.reset();
    }); 
    
  }
  constructor(private http: HttpClient, private cepService: ConsultaCepService) { }

  ngOnInit(): void {
  }

  consultaCEP(cep: any, form: any){
    cep = cep.replace(/\D/g, '');

    if( cep != null && cep !== ''){
      this.cepService.consultaCEP(cep).subscribe(res => this.populaDadosForm(res, form));;
    }
  }
  populaDadosForm(dados: any, formulario: any) {

    formulario.form.patchValue({
      endereco: {
        cep: dados.cep,
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

  resetaDadosForm(formulario: any){
    formulario.form.patchValue({
      endereco: {
        complemento: null,
        rua: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    })
  }



  
}
