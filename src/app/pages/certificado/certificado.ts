import { Component, OnInit } from '@angular/core';
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CertificadoService } from '../../_services/certificado';
import { ICertificado } from '../../interfaces/certificado';

@Component({
  selector: 'app-certificado',
  imports: [SecondaryButton, RouterLink],
  templateUrl: './certificado.html',
  styleUrl: './certificado.css'
})
export class Certificado implements OnInit {
  constructor(private certificadoService: CertificadoService, private route: ActivatedRoute) { }
  id: string | null = null;
  certificado: ICertificado | undefined;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.certificado = this.certificadoService.certificados.find(item => item.id === this.id)
    });

    console.log(this.certificadoService.certificados);
  }
}
