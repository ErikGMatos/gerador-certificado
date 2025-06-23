import { Component } from '@angular/core';
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { PrimaryButton } from "../../_components/primary-button/primary-button";
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certificado-form',
  imports: [SecondaryButton, PrimaryButton, FormsModule, CommonModule],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css'
})
export class CertificadoForm {
  nome = ''
  atividade = ''
  atividades: string[] = []

  campoInvalido(control: NgModel) {
    return control.invalid && control.touched
  }

  formValido() {
    return this.nome.length > 0 && this.atividades.length > 0;
  }

  adicionarAtividade() {
    this.atividades.push(this.atividade)
    this.atividade = ''
  }

  excluirAtividade(index: number) {
    this.atividades.splice(index, 1)
  }
}
