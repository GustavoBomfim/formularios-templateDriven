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
    cep: null
  }

  onSubmit(form: any){
    console.log(form);
    //console.log(this.usuario);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
