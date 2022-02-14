import { Component, OnInit } from '@angular/core';
//import { FormGroup } from '@angular/forms';

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
  }
  constructor() { }

  ngOnInit(): void {
  }

  verificaValidTouched(campo: any){
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo: any){
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }

  }

}
