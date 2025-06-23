import { Component, OnInit } from '@angular/core';
import { ItemCertificado } from "../../_components/item-certificado/item-certificado";
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { RouterLink } from '@angular/router';
import { CertificadoService } from '../../_services/certificado';
import { ICertificado } from '../../interfaces/certificado';

@Component({
  selector: 'app-certificados',
  imports: [ItemCertificado, SecondaryButton, RouterLink],
  templateUrl: './certificados.html',
  styleUrl: './certificados.css'
})
export class Certificados implements OnInit {
  constructor(private certificado: CertificadoService) { }

  certificados: ICertificado[] = []

  ngOnInit(): void {
    this.certificados = this.certificado.certificados
    console.log(this.certificados);
  }
}
