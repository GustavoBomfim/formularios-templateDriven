import { Component, OnInit } from '@angular/core';
//import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: 'Loiane Lopes',
    email: 'Loiane@email.com'
  }

  onSubmit(form: any){
    console.log(form.value);
    console.log(this.usuario);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
